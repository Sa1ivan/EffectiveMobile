# 🎬 Movies Catalog (Angular + Kinopoisk API)

Каталог фильмов с поиском, пагинацией и **lazy-загрузкой постеров**.  
Работает на **Angular + Angular Material**, данные берутся с [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech/).

<p align="center">
  <img src="docs/preview.png" alt="Превью приложения" width="800"/>
</p>

---

## 🚀 Возможности

- 🔎 Поиск фильмов по названию
- 📊 Каталог **ТОП-250 лучших фильмов**
- 📑 Пагинация через Angular Material (с кастомными подписями)
- 🖼 Lazy-загрузка постеров с **skeleton placeholder**
- 📱 Адаптивный интерфейс (desktop + mobile)
- ⚡ Высокая производительность (OnPush change detection)
- 🔑 API-ключ добавляется автоматически через HTTP Interceptor

---

## 🛠️ Технологии

- [Angular](https://angular.io/) 15+
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech/)

---

## 📦 Установка и запуск

```bash
# 1. Клонировать проект
git clone https://github.com/your-repo/movies-catalog.git
cd movies-catalog

# 2. Установить зависимости
npm install

# 3. Запустить приложение
ng serve

# Приложение будет доступно на http://localhost:4200/
