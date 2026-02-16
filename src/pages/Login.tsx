import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Login = () => {
  return (
    <div className="mx-auto max-w-lg">
      <section className="glass rounded-[2rem] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">Вход</p>
        <h1 className="font-display mt-3 text-3xl text-foreground">Welcome Back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Авторизуйся, чтобы управлять избранным дропом и новыми релизами.
        </p>

        <form className="mt-6 space-y-4">
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
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            />
          </label>

          <Button className="w-full rounded-xl" type="button">
            Войти
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          Нет аккаунта?{" "}
          <Link to="/register" className="font-semibold text-primary hover:underline">
            Создать
          </Link>
        </p>

        <p className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Soft security flow <ArrowRight className="size-3.5 text-primary" /> instant access
        </p>
      </section>
    </div>
  );
};
