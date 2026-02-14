import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О нас" },
  { to: "/contacts", label: "Контакты" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">

        <Link to="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent transition-opacity hover:opacity-80">
          RRReact
        </Link>


        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.to}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4 ${location.pathname === link.to ? "after:w-3/4" : ""}`}
                  data-active={location.pathname === link.to}
                >
                  <Link to={link.to}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>


        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link to="/login">Войти</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Регистрация</Link>
          </Button>
        </div>


        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-left">RRReact</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    location.pathname === link.to
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 border-t" />
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/login" onClick={() => setOpen(false)}>
                  Войти
                </Link>
              </Button>
              <Button asChild className="justify-start">
                <Link to="/register" onClick={() => setOpen(false)}>
                  Регистрация
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
