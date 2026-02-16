import { Link } from "react-router-dom";
import { Github, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О проекте" },
  { to: "/contacts", label: "Контакты" },
];

const socialLinks = [
  { href: "https://github.com/KapaSique", icon: Github, label: "GitHub" },
  { href: "mailto:batteryofsprunk@gmail.com", icon: Mail, label: "Email" },
  { href: "https://t.me/stelmahhh", icon: MessageCircle, label: "Telegram" },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 px-4 pb-6 sm:px-6 lg:px-10">
      <div className="glass-soft mx-auto w-full max-w-7xl rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
              IVT Merch Lab
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              Премиальный ИВТ-каталог со светлым liquid-glass стилем, студийной подачей
              вещей и тех-аксессуаров.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Навигация
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="w-fit text-sm font-medium text-foreground/80 transition hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Связь
            </h3>
            <p className="text-sm text-foreground/80">batteryofsprunk@gmail.com</p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="glass inline-flex size-10 items-center justify-center rounded-xl text-foreground/80 transition hover:-translate-y-0.5 hover:text-primary"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/60 pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} IVT Merch Lab. Made for IMI Labs.
        </div>
      </div>
    </footer>
  );
};
