import {
  ArrowRight,
  Orbit,
  ShieldCheck,
  Shirt,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Lavender Drift Hoodie",
    category: "Худи",
    price: "4 990 ₽",
    image: "/catalog/hoodie-01.jpg",
    tag: "Studio Fit",
    description: "Мягкий объёмный крой с чистой студийной пластикой ткани.",
  },
  {
    title: "Blue Pulse Hoodie",
    category: "Худи",
    price: "5 290 ₽",
    image: "/catalog/hoodie-02.jpg",
    tag: "Limited",
    description: "Глубокий цвет и плотный хлопок для уверенного силуэта.",
  },
  {
    title: "Cloud Core Tee",
    category: "Футболка",
    price: "2 390 ₽",
    image: "/catalog/tshirt-01.jpg",
    tag: "Best Seller",
    description: "Базовая белая футболка в clean-стиле без лишнего шума.",
  },
  {
    title: "Oversize Back Tee",
    category: "Футболка",
    price: "2 690 ₽",
    image: "/catalog/tshirt-02.jpg",
    tag: "New Cut",
    description: "Свободная посадка с акцентом на длину и фактуру ткани.",
  },
  {
    title: "Night Flight Case",
    category: "Чехол",
    price: "1 790 ₽",
    image: "/catalog/case-01.jpg",
    tag: "Protect",
    description: "Матовый чехол с контрастной графикой и сильным фокусом.",
  },
  {
    title: "Carbon Grip Case",
    category: "Чехол",
    price: "1 990 ₽",
    image: "/catalog/case-02.jpg",
    tag: "Premium",
    description: "Тонкий, цепкий, визуально дорогой кейс под daily-сетап.",
  },
];

const highlights = [
  {
    icon: Shirt,
    title: "Крой и посадка",
    text: "Каждая вещь отснята и показана так, чтобы текстура читалась без фильтров.",
  },
  {
    icon: Smartphone,
    title: "Аксессуары",
    text: "Чехлы подобраны с акцентом на премиальный вид и тактильный контроль.",
  },
  {
    icon: ShieldCheck,
    title: "Контроль качества",
    text: "Проверка каждой позиции перед публикацией и стабильный цвет в каталоге.",
  },
];

export const Home = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -left-20 top-10 size-56 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-cyan-200/45 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
              <Sparkles className="size-3.5" />
              Fresh Liquid Collection
            </span>

            <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Светлый fashion-каталог с безумным motion и стеклянным вайбом
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Мы сделали интерфейс ярче, живее и жирнее по анимациям: liquid glass-панели,
              воздушные градиенты, динамичные карточки и фотостудийная подача каждого дропа.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-xl px-6">
                <Link to="/register" className="inline-flex items-center gap-2">
                  Забрать дроп
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="ghost" asChild className="glass rounded-xl px-6">
                <a href="#catalog">Смотреть каталог</a>
              </Button>
            </div>
          </div>

          <div className="floaty glass-strong relative rounded-3xl p-5 sm:p-6">
            <div className="absolute inset-0 rounded-3xl border border-white/70" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              LIVE METRICS
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["24h", "Время обновления"],
                ["6", "Фотореал карточек"],
                ["+34%", "Визуальный импакт"],
                ["100%", "Liquid glass vibe"],
              ].map(([value, label], idx) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-3 stagger-in"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <p className="font-display text-2xl font-bold text-foreground">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="glass-soft overflow-hidden rounded-2xl px-2 py-3 sm:px-4">
        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-2 pr-10 text-sm font-semibold">
                <Orbit className="size-4 text-primary" />
                Liquid Glass UI
                <Sparkles className="size-4 text-primary" />
                Studio Product Shots
                <ArrowRight className="size-4 text-primary" />
                Crazy Smooth Animations
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              Catalog Drop
            </p>
            <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
              Худи, чехлы и футболки
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, idx) => (
            <article
              key={product.title}
              className="glass group overflow-hidden rounded-3xl p-3 stagger-in"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
                  {product.tag}
                </span>
              </div>

              <div className="space-y-3 p-2 pt-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                      {product.category}
                    </p>
                    <h3 className="font-display text-xl leading-tight text-foreground">
                      {product.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-foreground">
                    {product.price}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{product.description}</p>

                <Button className="group/btn mt-2 w-full rounded-xl" asChild>
                  <Link to="/register" className="inline-flex items-center justify-center gap-2">
                    Взять в коллекцию
                    <ArrowRight className="size-4 transition group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, idx) => (
          <article
            key={item.title}
            className="glass rounded-2xl p-5 stagger-in"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <item.icon className="size-5" />
            </div>
            <h3 className="font-display mt-4 text-xl text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
};
