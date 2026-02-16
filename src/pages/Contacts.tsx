import { Github, Mail, MapPin, MessageCircle } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "batteryofsprunk@gmail.com",
    href: "mailto:batteryofsprunk@gmail.com",
    icon: Mail,
  },
  {
    label: "Telegram",
    value: "@stelmahhh",
    href: "https://t.me/stelmahhh",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "KapaSique",
    href: "https://github.com/KapaSique",
    icon: Github,
  },
];

export const Contacts = () => {
  return (
    <div className="space-y-6">
      <section className="glass rounded-[2rem] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">Контакты</p>
        <h1 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
          На связи для коллабов и задач
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Если хочешь доработать каталог, анимации, UI-систему или собрать новый визуальный
          стиль для проекта, можно написать любым удобным способом.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {links.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="glass group rounded-2xl p-5 transition hover:-translate-y-0.5"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <item.icon className="size-5" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 font-semibold text-foreground group-hover:text-primary">{item.value}</p>
          </a>
        ))}
      </section>

      <section className="glass-soft rounded-2xl p-5 text-sm text-muted-foreground">
        <p className="inline-flex items-center gap-2">
          <MapPin className="size-4 text-primary" />
          Формат работы: remote, быстрые итерации, фокус на визуальном качестве.
        </p>
      </section>
    </div>
  );
};
