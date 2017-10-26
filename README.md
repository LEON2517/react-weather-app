# React Weather App

## Погодное одностраничное веб-приложение

### Функционал app:

### Автоматический запрос погоды от API по координатам пользователя - это город / место по умолчанию.
### Автоматическое добавление классов, а зависимости от прогноза погоды (гроза/дождь/снег и тд)
### Добавление / удаление городов

### Код app:

### API https://openweathermap.org

### Используемый стек:
#### React/Redux/Immutable JS/React Routes v.4/WebPack/Bubble

### Иммутабельная масштабируемая структура

### Обработка ошибок:
#### ERROR в случае ошибок соединения и не корректно введенных данных(пустого поля)
производиться реддирект на страницу ошибки
#### Not Found в случае не корректного запроса (например http://localhost:8080/home/no_page)

### Обработка ожидания ответа от сервера:
#### Добавлен Loader, который анализирует три состояния ответа от сервера START, SUCCESS, FAIL

### Роутинг:
#### Добавлена возможность перехода между страницами
#### Добавлен редирект с основного домена на страницу home
#### Добавлена возможность асинхронного роутинга в middlewares за счет react-router-redux
#### Добавлена возможность использовать "красивые ссылки" без #




