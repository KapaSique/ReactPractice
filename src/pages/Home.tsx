import {
  ArrowRight,
  Atom,
  Cable,
  Cpu,
  Orbit,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "IVT Quantum Hoodie",
    category: "Худи",
    price: "4 990 ₽",
    image: "/catalog/hoodie-01.jpg",
    tag: "Drop 01",
    description: "Плотный хлопок, мягкий внутренний слой и clean-графика ИВТ.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tech: ["430 GSM", "Fleece Inside", "Unisex"],
  },
  {
    title: "IVT Compiler Hoodie",
    category: "Худи",
    price: "5 290 ₽",
    image: "/catalog/hoodie-02.jpg",
    tag: "Limited",
    description: "Глубокий цвет, архитектурный крой и премиальная фурнитура.",
    sizes: ["S", "M", "L", "XL"],
    tech: ["Oversize", "Reinforced Seams", "Heavy Cotton"],
  },
  {
    title: "IVT Core Tee White",
    category: "Футболка",
    price: "2 390 ₽",
    image: "/catalog/tshirt-01.jpg",
    tag: "Best Seller",
    description: "Чистая база для daily-fit: ровный силуэт и плотный ворот.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tech: ["240 GSM", "Soft Touch", "Straight Fit"],
  },
  {
    title: "IVT Night Ops Tee",
    category: "Футболка",
    price: "2 790 ₽",
    image: "/catalog/tshirt-02.jpg",
    tag: "New",
    description: "Черный матовый силуэт с четкими швами и премиальной геометрией.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tech: ["260 GSM", "Drop Shoulder", "Street Cut"],
  },
  {
    title: "IVT Signal Tee Red",
    category: "Футболка",
    price: "2 590 ₽",
    image: "/catalog/tshirt-03.jpg",
    tag: "Color Drop",
    description: "Акцентный красный цвет, гладкая текстура ткани и чистый силуэт.",
    sizes: ["S", "M", "L", "XL"],
    tech: ["240 GSM", "Colorfast", "Relaxed Fit"],
  },
  {
    title: "IVT iPhone 17 Case",
    category: "Чехол",
    price: "1 790 ₽",
    image: "/catalog/case-iphone-17.jpg",
    tag: "Latest",
    description: "Тонкий матовый корпус с усиленными углами и мягкой посадкой.",
    compatibility: ["iPhone 17", "MagSafe", "Drop 2m"],
    tech: ["TPU + PC", "Anti-Yellow", "Soft Touch"],
  },
  {
    title: "IVT iPhone 17 Pro Case",
    category: "Чехол",
    price: "1 990 ₽",
    image: "/catalog/case-iphone-17pro.jpg",
    tag: "Pro Shield",
    description: "Премиальный слим-кейс под камеру Pro и ежедневный intense-режим.",
    compatibility: ["iPhone 17 Pro", "MagSafe", "Camera Guard"],
    tech: ["Aero Frame", "Microfiber", "Scratch Resist"],
  },
  {
    title: "IVT iPhone 17 Pro Max Case",
    category: "Чехол",
    price: "2 090 ₽",
    image: "/catalog/case-iphone-17promax.jpg",
    tag: "Flagship",
    description: "Чистая геометрия и усиленная защита для 6.9-дюймовой Pro Max.",
    compatibility: ["iPhone 17 Pro Max", "MagSafe", "Raised Bezel"],
    tech: ["6.9-inch fit", "Shock Absorb", "Matte Shell"],
  },
  {
    title: "IVT MacBook Pro Armor Sleeve",
    category: "Чехол Mac",
    price: "3 990 ₽",
    image: "/catalog/macbook-case-01.jpg",
    tag: "Mac Series",
    description: "Чистый белый sleeve для Pro-серии с мягкой подкладкой и плотным zip.",
    compatibility: ["MacBook Pro 14 (M5/M4 Pro)", "MacBook Pro 16 (M5/M4 Max)"],
    tech: ["Zip Guard", "Padded Walls", "Water Repel"],
  },
  {
    title: "IVT MacBook Air Graphite Sleeve",
    category: "Чехол Mac",
    price: "4 290 ₽",
    image: "/catalog/macbook-case-02.jpg",
    tag: "Air Series",
    description: "Графитовый матовый sleeve для Air-линейки с премиальной текстурой.",
    compatibility: ["MacBook Air 13 (M4)", "MacBook Air 15 (M4)"],
    tech: ["Lightweight", "Impact Zones", "Travel Safe"],
  },
];

const highlights = [
  {
    icon: Cpu,
    title: "IVT DNA",
    text: "Каждая позиция собрана в эстетике ИВТ: clean-типографика, инженерный характер, premium-финиш.",
  },
  {
    icon: Cable,
    title: "Совместимость",
    text: "Свежие линейки под iPhone 17 и актуальные MacBook (M5/M4), чтобы сетап был цельным.",
  },
  {
    icon: ShieldAlert,
    title: "Контроль качества",
    text: "Материалы, швы и посадка проходят ручную проверку перед публикацией дропа.",
  },
];

export const Home = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="glass liquid-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -left-20 top-10 size-56 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-violet-200/45 blur-3xl" />
        <div className="noise-layer" />

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
              <Sparkles className="size-3.5" />
              IVT Merch Lab
            </span>

            <h1 className="font-display text-gradient-motion text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Премиальный ИВТ-мерч: одежда и чехлы с безумным liquid-motion
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Светлый интерфейс на максималках: liquid-glass панели, яркие энергетические
              орбы, aggressive hover-динамика и витрина, где каждый айтем выглядит как
              студийный premium-shot.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-xl px-6">
                <Link to="/register" className="inline-flex items-center gap-2">
                  Забрать IVT Drop
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="ghost" asChild className="glass rounded-xl px-6">
                <a href="#catalog">Смотреть каталог</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "iPhone 17 Series",
                "MacBook Pro M5/M4",
                "MacBook Air M4",
                "XS-XXL Sizes",
              ].map((pill, idx) => (
                <span
                  key={pill}
                  className="floating-pill glass-soft rounded-full px-3 py-1 text-xs font-semibold text-foreground/80"
                  style={{ animationDelay: `${idx * 180}ms` }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="floaty glass-strong glow-ring relative rounded-3xl p-5 sm:p-6">
            <div className="absolute inset-0 rounded-3xl border border-white/70" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              LIVE DROP METRICS
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["24h", "Время обновления"],
                ["10", "Премиум карточек"],
                ["+78%", "Визуальный импакт"],
                ["100%", "Liquid glass vibe"],
              ].map(([value, label], idx) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-3 stagger-in card-breathe"
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
                IVT Premium Merch
                <Sparkles className="size-4 text-primary" />
                Liquid Glass UI
                <ArrowRight className="size-4 text-primary" />
                Hyper Animations
                <Atom className="size-4 text-primary" />
                Studio Product Shots
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              Catalog Drop / ИВТ Merch
            </p>
            <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
              Худи, футболки, iPhone и MacBook чехлы
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, idx) => (
            <article
              key={product.title}
              className="glass product-card tilt-crazy group overflow-hidden rounded-3xl p-3 stagger-in"
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

                {product.sizes ? (
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Размеры
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((size) => (
                        <span key={size} className="size-chip">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {product.compatibility ? (
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Совместимость
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.compatibility.map((device) => (
                        <span key={device} className="size-chip">
                          {device}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-1.5">
                  {product.tech.map((point) => (
                    <span key={point} className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] text-foreground/70">
                      {point}
                    </span>
                  ))}
                </div>

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
            className="glass rounded-2xl p-5 stagger-in card-breathe"
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

      <section className="glass-soft relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(125,211,252,.35),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(196,181,253,.3),transparent_35%),radial-gradient(circle_at_60%_80%,rgba(110,231,183,.28),transparent_40%)]" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              Next Drop
            </p>
            <h3 className="font-display mt-2 text-2xl text-foreground sm:text-3xl">
              IVT Capsule 02 уже в прогреве
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Вторая волна: светлые и черные футболки, худи в новых оттенках и расширенная
              линейка tech-кейсов. Ранний доступ по регистрации.
            </p>
          </div>
          <Button asChild className="rounded-xl px-7 py-6 text-base">
            <Link to="/register" className="inline-flex items-center gap-2">
              Войти в waitlist
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
