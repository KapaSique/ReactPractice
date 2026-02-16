import { Layers, Sparkles, WandSparkles } from "lucide-react";

const blocks = [
  {
    icon: Layers,
    title: "IVT Visual Direction",
    text: "Мы ушли от тяжелого тёмного полотна к светлой многослойной поверхности с мягкими бликами и глубиной.",
  },
  {
    icon: Sparkles,
    title: "Animation First",
    text: "Карточки двигаются с разной скоростью, появляются по стадиям и создают ощущение живого каталога, а не статики.",
  },
  {
    icon: WandSparkles,
    title: "Catalog Energy",
    text: "Визуал построен вокруг ИВТ-мерча: крупные продукты, ритм типографики и акцентные CTA.",
  },
];

export const About = () => {
  return (
    <div className="space-y-6">
      <section className="glass rounded-[2rem] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">О проекте</p>
        <h1 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
          Почему сайт теперь выглядит смелее
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Редизайн сфокусирован на светлой атмосфере, стеклянных слоях и более агрессивной
          анимационной подаче. Интерфейс стал визуально дороже и живее, сохранил простую
          навигацию и подчеркнул идею премиального ИВТ-дропа.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {blocks.map((block, idx) => (
          <article
            key={block.title}
            className="glass rounded-2xl p-5 stagger-in"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <block.icon className="size-5" />
            </div>
            <h2 className="font-display mt-4 text-xl text-foreground">{block.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{block.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
