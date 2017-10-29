# react-weather-app

Uses React, Redux, Immutable, React Routes v.4, Webpack, Bubble

1. Install dependencies app
```
npm i
```
2. Run webpack dev server
```
npm start
```
3. Go to localhost:8080

<hr>

Functionality of the application:

* Automatic weather request from the API by user coordinates is the city / location by default.
* Automatic addition of classes, and depending on the weather forecast (thunderstorm / rain / snow, etc.)
* Add / delete cities

Functionality of the code:

* Uses API https://openweathermap.org
* Uses API history HTML5
* Immutable scalable structure
* ERROR in case of connection errors and incorrectly entered data (or empty input field), an asynchronous redirect to the error page
* NotFound in case of incorrect query (for example: http://localhost:8080/home/no_page)
* Uses Loader, analysis of three response states from the server START, SUCCESS, FAIL
* Implemented asynchronous routing (react-router-redux)
* Redirect from the primary domain to the home page

<p align="center">
    <a href="http://www.picshare.ru/view/8340405/" target="_blank"><img src="http://www.picshare.ru/uploads/171103/XzkYTj747D.jpg" border="0" width="500" height="611"></a>
</p>


