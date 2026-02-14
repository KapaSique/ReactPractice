import { Link } from "react-router-dom";
import { Github, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О нас" },
  { to: "/contacts", label: "Контакты" },
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "mailto:info@example.com", icon: Mail, label: "Email" },
  { href: "https://t.me", icon: MessageCircle, label: "Telegram" },
];

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              RRReact
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Современное React-приложение, созданное с использованием Vite,
              Tailwind CSS и shadcn/ui.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Навигация</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts & Social */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Контакты</h3>
            <p className="text-sm text-muted-foreground">
              info@example.com
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RRReact. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
