import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О проекте" },
  { to: "/contacts", label: "Контакты" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-10">
      <div className="glass mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl px-3 py-3 sm:px-5">
        <Link
          to="/"
          className="font-display inline-flex items-center gap-2 text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="size-4" />
          </span>
          Liquid Drop
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(2,132,199,0.35)]"
                    : "text-muted-foreground hover:bg-white/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="rounded-xl" asChild>
            <Link to="/login">Войти</Link>
          </Button>
          <Button className="rounded-xl bg-primary/90 text-primary-foreground hover:bg-primary" asChild>
            <Link to="/register">Залететь в дроп</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl md:hidden"
              aria-label="Открыть меню"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="glass border-white/50">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-lg">Liquid Drop</SheetTitle>
            </SheetHeader>

            <nav className="mt-4 flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    location.pathname === link.to
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 border-t border-white/60" />

              <Button variant="ghost" className="justify-start rounded-xl" asChild>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Войти
                </Link>
              </Button>
              <Button className="justify-start rounded-xl" asChild>
                <Link to="/register" onClick={() => setOpen(false)}>
                  Залететь в дроп
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
