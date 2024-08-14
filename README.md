# Запуск проекта
Для запуска проекта через докер вам нужно будет прописать команду `docker-compose up --build` и после этого 
перейти по адресу http://localhost:5173/ и все, проект запущен.

Если же по каким-то причинам вы не смогли запустить проект через докер, то попробуйте другой способ. Пропишите команду 
`npm install`, и после установки пакетов запустите проект командой `npm run dev`.

# Используемые технологии
## 1. eslint + prettier
Для обеспечения чистоты кода и автоисправления кода, не соответствующего заданному стайлгайду.
## 2. clsx
Для работы с несколькими className (удобно объединяет несколько css-классов в один).
## 3. axios
Для работы с запросами к api
## 4. react-router-dom
Для работы с роутингом
## 5. jwt-decode
Для расшифровки jwt-токенов
## 6. mantine
готовый ui-kit + содержит готовый набор хуков

# Дополнительная информация
В данном тестовом задании было принято решение не использовать стейтменеджер из-за
простоты проекта, поэтому использовался react context.


