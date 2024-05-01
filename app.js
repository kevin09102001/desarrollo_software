// app.js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Requerir configuraciones de base de datos
require('./config/database'); // Sequelize
require('./config/mongodb'); // Mongoose

var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware de registro y análisis de cuerpo de solicitudes
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Importar rutas
var indexRouter = require('./routes/index'); // Asumiendo que tienes un archivo de rutas básicas
var usersRouter = require('./routes/users'); // Asumiendo que tienes un archivo de rutas para usuarios
var productRouter = require('./routes/product'); // Rutas para el controlador de productos

// Rutas principales
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);

// Captura de errores 404 y redirección al manejador de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // Configuración de variables locales, solo proporcionando error en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderización de la página de error
  res.status(err.status || 500);
  res.render('error');
});

// Configuración del puerto y lanzamiento del servidor
var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});

module.exports = app;
