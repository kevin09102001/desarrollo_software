// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql' // Cambia esto según tu gestor de base de datos: 'mysql'|'sqlite'|'postgres'|'mssql'
});

module.exports = sequelize;
