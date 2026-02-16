import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Register = () => {
  return (
    <div className="mx-auto max-w-lg">
      <section className="glass rounded-[2rem] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">Регистрация</p>
        <h1 className="font-display mt-3 text-3xl text-foreground">Join The Drop</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Создай профиль, чтобы отслеживать новые коллекции и быстрые релизы.
        </p>

        <form className="mt-6 grid gap-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Имя</span>
            <input
              type="text"
              placeholder="Artem"
              className="w-full rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Email</span>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Пароль</span>
            <input
              type="password"
              placeholder="Минимум 8 символов"
              className="w-full rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </label>

          <Button className="mt-1 w-full rounded-xl" type="button">
            <span className="inline-flex items-center gap-2">
              Создать аккаунт
              <Sparkles className="size-4" />
            </span>
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          Уже есть аккаунт?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Войти
          </Link>
        </p>
      </section>
    </div>
  );
};
