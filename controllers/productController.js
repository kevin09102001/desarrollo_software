const Product = require('../models/product');

const productController = {
  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.identificador);
      if (product) {
        return res.status(200).json(product);
      }
      return res.status(404).json({ message: 'Product not found' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.identificador);
      if (product) {
        const updatedProduct = await product.update(req.body);
        return res.status(200).json(updatedProduct);
      }
      return res.status(404).json({ message: 'Product not found' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.identificador);
      if (product) {
        await product.destroy();
        return res.status(200).json({ message: 'Product deleted' });
      }
      return res.status(404).json({ message: 'Product not found' });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

module.exports = productController;
