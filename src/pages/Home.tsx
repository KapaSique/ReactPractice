import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Cable,
  Check,
  Cpu,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  badge: string;
  description: string;
  variantLabel: "Размер" | "Модель";
  variants: string[];
  specs: string[];
};

const products: Product[] = [
  {
    id: "hoodie-quantum",
    title: "IVT Quantum Hoodie",
    category: "Худи",
    price: "4 990 ₽",
    image: "/catalog/hoodie-01.jpg",
    badge: "Drop 01",
    description: "Плотный хлопок и мягкий флис внутри, чтобы худи держал форму и выглядел дорого.",
    variantLabel: "Размер",
    variants: ["S", "M", "L", "XL", "XXL"],
    specs: ["430 GSM", "Fleece Inside", "Unisex"],
  },
  {
    id: "hoodie-compiler",
    title: "IVT Compiler Hoodie",
    category: "Худи",
    price: "5 290 ₽",
    image: "/catalog/hoodie-02.jpg",
    badge: "Limited",
    description: "Архитектурный крой и усиленные швы для ежедневной носки в универе и городе.",
    variantLabel: "Размер",
    variants: ["S", "M", "L", "XL"],
    specs: ["Oversize", "Reinforced Seams", "Heavy Cotton"],
  },
  {
    id: "tee-core-white",
    title: "IVT Core Tee White",
    category: "Футболка",
    price: "2 390 ₽",
    image: "/catalog/tshirt-01.jpg",
    badge: "Best Seller",
    description: "Минималистичная белая база с чистым силуэтом и плотным воротом.",
    variantLabel: "Размер",
    variants: ["XS", "S", "M", "L", "XL", "XXL"],
    specs: ["240 GSM", "Soft Touch", "Straight Fit"],
  },
  {
    id: "tee-night-ops",
    title: "IVT Night Ops Tee",
    category: "Футболка",
    price: "2 790 ₽",
    image: "/catalog/tshirt-02.jpg",
    badge: "New",
    description: "Черный матовый силуэт под techwear-луки и строгую ИВТ-эстетику.",
    variantLabel: "Размер",
    variants: ["S", "M", "L", "XL", "XXL"],
    specs: ["260 GSM", "Drop Shoulder", "Street Cut"],
  },
  {
    id: "tee-signal-red",
    title: "IVT Signal Tee Red",
    category: "Футболка",
    price: "2 590 ₽",
    image: "/catalog/tshirt-03.jpg",
    badge: "Color Drop",
    description: "Яркий акцентный цвет с премиальной фактурой ткани без лишних деталей.",
    variantLabel: "Размер",
    variants: ["S", "M", "L", "XL"],
    specs: ["240 GSM", "Colorfast", "Relaxed Fit"],
  },
  {
    id: "case-iphone-17",
    title: "IVT iPhone 17 Case",
    category: "Чехол",
    price: "1 790 ₽",
    image: "/catalog/case-iphone-17.jpg",
    badge: "Latest",
    description: "Тонкий матовый корпус с усиленными углами и уверенной посадкой в руке.",
    variantLabel: "Модель",
    variants: ["iPhone 17", "iPhone 17 Plus"],
    specs: ["TPU + PC", "MagSafe", "Drop 2m"],
  },
  {
    id: "case-iphone-17-pro",
    title: "IVT iPhone 17 Pro Case",
    category: "Чехол",
    price: "1 990 ₽",
    image: "/catalog/case-iphone-17pro.jpg",
    badge: "Pro Shield",
    description: "Слим-кейс с усиленной рамкой вокруг блока камер Pro.",
    variantLabel: "Модель",
    variants: ["iPhone 17 Pro", "iPhone 17 Pro Max"],
    specs: ["Aero Frame", "Microfiber", "Camera Guard"],
  },
  {
    id: "case-iphone-17-pro-max",
    title: "IVT iPhone 17 Pro Max Case",
    category: "Чехол",
    price: "2 090 ₽",
    image: "/catalog/case-iphone-17promax.jpg",
    badge: "Flagship",
    description: "Максимальная защита и чистая геометрия для флагманской версии.",
    variantLabel: "Модель",
    variants: ["iPhone 17 Pro Max", "iPhone 17 Ultra"],
    specs: ["Raised Bezel", "Shock Absorb", "Matte Shell"],
  },
  {
    id: "macbook-pro-sleeve",
    title: "IVT MacBook Pro Armor Sleeve",
    category: "Чехол Mac",
    price: "3 990 ₽",
    image: "/catalog/macbook-case-01.jpg",
    badge: "Mac Series",
    description: "Плотный рукав под рабочий ритм: мягкая подкладка и защищенная молния.",
    variantLabel: "Модель",
    variants: ["MacBook Pro 14 (M5/M4)", "MacBook Pro 16 (M5/M4)"],
    specs: ["Zip Guard", "Padded Walls", "Water Repel"],
  },
  {
    id: "macbook-air-sleeve",
    title: "IVT MacBook Air Graphite Sleeve",
    category: "Чехол Mac",
    price: "4 290 ₽",
    image: "/catalog/macbook-case-02.jpg",
    badge: "Air Series",
    description: "Графитовый premium sleeve для Air-линейки с мягкой антискретч-подкладкой.",
    variantLabel: "Модель",
    variants: ["MacBook Air 13 (M4)", "MacBook Air 15 (M4)"],
    specs: ["Travel Safe", "Impact Zones", "Slim Form"],
  },
];

const highlights = [
  {
    icon: Cpu,
    title: "IVT DNA",
    text: "Инженерный стиль и строгая типографика без визуального шума.",
  },
  {
    icon: Cable,
    title: "Свежие девайсы",
    text: "Линейки под iPhone 17 и MacBook M5/M4 для актуального сетапа.",
  },
  {
    icon: ShieldAlert,
    title: "Реальное качество",
    text: "Материалы и финиш проходят ручной контроль до публикации дропа.",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export const Home = () => {
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState<{ title: string; variant: string } | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -42]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.97]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.86]);

  const hasAllSelections = useMemo(
    () => Object.keys(selectedVariants).length === products.length,
    [selectedVariants]
  );

  useEffect(() => {
    if (!lastAdded) return;

    const timeout = setTimeout(() => setLastAdded(null), 2200);
    return () => clearTimeout(timeout);
  }, [lastAdded]);

  const selectVariant = (productId: string, value: string) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: value }));
  };

  const addToCart = (product: Product) => {
    const selected = selectedVariants[product.id];
    if (!selected) return;

    setCartCount((prev) => prev + 1);
    setLastAdded({ title: product.title, variant: selected });
  };

  return (
    <div className="relative space-y-8 md:space-y-12">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="premium-orb premium-orb-cyan"
          animate={{ x: [0, 70, -30, 0], y: [0, -60, 20, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="premium-orb premium-orb-violet"
          animate={{ x: [0, -90, 20, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.section
        style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
        className="glass liquid-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="noise-layer" />
        <div className="pointer-events-none absolute -left-24 top-12 size-64 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -top-14 size-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100"
            >
              <Sparkles className="size-3.5" />
              IVT Merch Lab
            </motion.span>

            <h1 className="font-display text-gradient-motion text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Премиальный ИВТ-каталог: темный liquid glass и агрессивный motion
            </h1>

            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Тяжелее по тону, чище по композиции. Теперь это не светлая витрина, а premium
              storefront с контролируемым хаосом анимаций на Framer.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                <a href="#catalog" className="inline-flex items-center gap-2">
                  Перейти в каталог
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="ghost" asChild className="rounded-xl border border-slate-400/25 bg-slate-900/60 text-slate-100 hover:bg-slate-800">
                <Link to="/contacts">Кастом для группы</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {["iPhone 17", "MacBook M5/M4", "XS-XXL", "Framer Motion"].map((pill, idx) => (
                <motion.span
                  key={pill}
                  className="rounded-full border border-slate-400/20 bg-slate-900/50 px-3 py-1 text-xs font-semibold text-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.07 }}
                >
                  {pill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            className="glass-strong relative overflow-hidden rounded-3xl p-5 sm:p-6"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-3xl border border-cyan-300/25" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              LIVE DROP METRICS
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["10", "Карточек в дропе"],
                ["4", "Категории мерча"],
                ["Framer", "Animation Engine"],
                [cartCount.toString(), "В корзине"],
              ].map(([value, label], idx) => (
                <motion.div
                  key={label}
                  className="rounded-2xl border border-slate-300/12 bg-slate-900/55 p-3"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.09 + 0.2 }}
                >
                  <p className="font-display text-2xl font-bold text-slate-100">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="catalog"
        className="space-y-5"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div variants={itemVariants} className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Catalog / IVT Merch
            </p>
            <h2 className="font-display mt-2 text-3xl text-slate-100 sm:text-4xl">
              Выбери размер или модель, потом добавляй в корзину
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Никакого мгновенного оформления. Сначала нормальный подбор по размеру и устройству.
            </p>
          </div>
          <motion.div layout className="inline-flex items-center gap-2 rounded-xl border border-slate-400/25 bg-slate-900/70 px-3 py-2 text-sm text-slate-100">
            <ShoppingBag className="size-4 text-cyan-300" />
            {cartCount}
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {lastAdded ? (
            <motion.div
              key={`${lastAdded.title}-${lastAdded.variant}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200"
            >
              <Check className="size-4" />
              Добавлено: {lastAdded.title} / {lastAdded.variant}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.div variants={sectionVariants} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => {
            const selected = selectedVariants[product.id];

            return (
              <motion.article
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10, rotateX: 3, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="glass group overflow-hidden rounded-3xl p-3"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="h-[320px] w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-slate-300/30 bg-slate-900/75 px-3 py-1 text-xs font-semibold text-slate-100">
                    {product.badge}
                  </span>
                </div>

                <div className="space-y-3 p-2 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200/90">
                        {product.category}
                      </p>
                      <h3 className="font-display text-xl leading-tight text-slate-100">{product.title}</h3>
                    </div>
                    <span className="rounded-full border border-slate-300/25 bg-slate-900/70 px-3 py-1 text-sm font-semibold text-slate-100">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300">{product.description}</p>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {product.variantLabel}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.variants.map((variant) => {
                        const isActive = selected === variant;

                        return (
                          <motion.button
                            key={variant}
                            type="button"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ y: -1 }}
                            onClick={() => selectVariant(product.id, variant)}
                            className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold transition ${
                              isActive
                                ? "border-cyan-300/70 bg-cyan-400/20 text-cyan-100"
                                : "border-slate-300/20 bg-slate-900/60 text-slate-300 hover:border-slate-300/45"
                            }`}
                          >
                            {variant}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full border border-slate-300/15 bg-slate-900/50 px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ y: -2 }}
                    onClick={() => addToCart(product)}
                    disabled={!selected}
                    className={`mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      selected
                        ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                        : "cursor-not-allowed border border-slate-400/20 bg-slate-800/70 text-slate-500"
                    }`}
                  >
                    <ShoppingBag className="size-4" />
                    {selected ? "Добавить в корзину" : `Выбери ${product.variantLabel.toLowerCase()}`}
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-4 md:grid-cols-3"
      >
        {highlights.map((item) => (
          <motion.article
            key={item.title}
            variants={itemVariants}
            className="glass rounded-2xl border border-slate-300/20 p-5"
          >
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-200">
              <item.icon className="size-5" />
            </div>
            <h3 className="font-display mt-4 text-xl text-slate-100">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.text}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section
        className="glass-soft relative overflow-hidden rounded-3xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(14,165,233,.2),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,.16),transparent_34%),radial-gradient(circle_at_60%_82%,rgba(129,140,248,.14),transparent_40%)]" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Next Drop</p>
            <h3 className="font-display mt-2 text-2xl text-slate-100 sm:text-3xl">
              IVT Capsule 02: ещё больше айтишного мерча
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Когда размер и модель уже выбраны, корзина собирается за секунды. Оформление отдельно,
              без давления на первом клике.
            </p>
          </div>

          <Button
            disabled={!hasAllSelections}
            className={`rounded-xl px-7 py-6 text-base ${
              hasAllSelections
                ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                : "cursor-not-allowed border border-slate-400/20 bg-slate-800 text-slate-500"
            }`}
          >
            Подготовить заказ ({cartCount})
          </Button>
        </div>
      </motion.section>
    </div>
  );
};
