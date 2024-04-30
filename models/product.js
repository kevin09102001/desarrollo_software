const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Esta ruta puede variar dependiendo de dónde esté tu archivo de configuración de Sequelize.

class Product extends Model {}

Product.init({
  identificador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  entrada: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  salida: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'disponible'
  }
}, {
  sequelize,
  modelName: 'Product'
});

module.exports = Product;
