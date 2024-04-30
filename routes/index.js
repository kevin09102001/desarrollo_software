const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para el CRUD de productos
router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:identificador', productController.getProductById);
router.put('/products/:identificador', productController.updateProduct);
router.delete('/products/:identificador', productController.deleteProduct);

// Ruta de prueba que responde "Hello World!" en la página de inicio
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ruta de prueba para manejar una solicitud POST en la ruta raíz (/)
router.post('/', (req, res) => {
  res.send('Got a POST request');
});

module.exports = router;

