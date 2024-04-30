var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Requerir el enrutador de productos que contendrá las rutas CRUD
var productRouter = require('./routes/product'); // Asegúrate de que este archivo exista y esté configurado

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

// Rutas principales
app.use('/', indexRouter); // Ya incluido para la ruta raíz y cualquier otra configuración específica
app.use('/users', usersRouter); // Para manejar las rutas de usuarios si es necesario

// Rutas para los productos
app.use('/products', productRouter); // Aquí se integra el enrutador de productos con la aplicación

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

module.exports = app;
