import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/login">Войти</Link>
        <Link to="/register">Регистрация</Link>
      </nav>
    </header>
  );
}