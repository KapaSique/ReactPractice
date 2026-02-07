<div align="center">

# ⚛️ RRReact

**Учебный проект на React для лабораторных работ**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Supported-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com)

</div>

---

## 📖 О проекте

Многостраничное SPA-приложение, созданное в рамках университетских лабораторных работ по React. Проект демонстрирует современный стек фронтенд-разработки: маршрутизацию, компонентную архитектуру, адаптивную вёрстку и работу с UI-библиотеками.

## 🛠 Стек технологий

| Категория | Технологии |
|-----------|-----------|
| **Фреймворк** | ![React](https://img.shields.io/badge/-React_19-61DAFB?style=flat-square&logo=react&logoColor=black) ![React Router](https://img.shields.io/badge/-React_Router_7-CA4245?style=flat-square&logo=reactrouter&logoColor=white) |
| **UI** | ![Shadcn/ui](https://img.shields.io/badge/-shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white) ![Radix UI](https://img.shields.io/badge/-Radix_UI-161618?style=flat-square&logo=radixui&logoColor=white) ![Lucide](https://img.shields.io/badge/-Lucide_Icons-F56565?style=flat-square) |
| **Стили** | ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![CSS](https://img.shields.io/badge/-CSS_Variables-1572B6?style=flat-square&logo=css3&logoColor=white) |
| **Сборка** | ![Vite](https://img.shields.io/badge/-Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white) ![ESLint](https://img.shields.io/badge/-ESLint_9-4B32C3?style=flat-square&logo=eslint&logoColor=white) |
| **Язык** | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |

## 📁 Структура проекта

```
src/
├── components/
│   ├── Header.tsx          # 🧭 Навигация с мобильным меню
│   ├── Footer.tsx          # 📄 Подвал сайта
│   └── ui/                 # 🎨 Shadcn UI компоненты
│       ├── button.tsx
│       ├── navigation-menu.tsx
│       └── sheet.tsx
├── pages/
│   ├── Home.tsx            # 🏠 Главная страница
│   ├── About.tsx           # ℹ️  О нас
│   ├── Contacts.tsx        # 📞 Контакты
│   ├── Login.tsx           # 🔑 Авторизация
│   └── Register.tsx        # 📝 Регистрация
├── lib/
│   └── utils.ts            # 🔧 Утилиты (cn helper)
├── App.jsx                 # ⚙️  Маршрутизация
├── main.jsx                # 🚀 Точка входа
└── index.css               # 🎨 Глобальные стили и тема
```

## ✨ Возможности

- 🗂 **Маршрутизация** — 5 страниц с навигацией через React Router
- 📱 **Адаптивность** — мобильное бургер-меню + десктопная навигация
- 🎨 **Темизация** — система CSS-переменных с поддержкой тёмной темы
- ♿ **Доступность** — Radix UI примитивы с ARIA-атрибутами
- ⚡ **Быстрая сборка** — Vite с HMR для мгновенной перезагрузки
- 🧩 **Компонентная архитектура** — переиспользуемые UI-компоненты

## 🚀 Быстрый старт

### Предварительные требования

- [Node.js](https://nodejs.org/) >= 18
- npm >= 9

### Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/<username>/React.git
cd React

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Приложение будет доступно по адресу **http://localhost:5173**

### Другие команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | 🔥 Запуск dev-сервера с HMR |
| `npm run build` | 📦 Сборка для продакшена |
| `npm run preview` | 👀 Предпросмотр продакшен-сборки |
| `npm run lint` | 🔍 Проверка кода через ESLint |

## 🗺 Страницы

| Маршрут | Страница | Описание |
|---------|----------|----------|
| `/` | Главная | Лендинг приложения |
| `/about` | О нас | Информация о проекте |
| `/contacts` | Контакты | Контактные данные |
| `/login` | Вход | Авторизация пользователя |
| `/register` | Регистрация | Создание аккаунта |

## 📸 Скриншоты

> _по мере обновления_

---

<div align="center">

Эщкере 

![React](https://img.shields.io/badge/Made_with-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

</div>
