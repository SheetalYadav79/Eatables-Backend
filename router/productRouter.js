const express = require('express');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controller/productController');
const authenticateToken = require('../middlewares/authmiddleware');
const router = express.Router();

router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products/:productId', updateProduct);
router.delete('/products/:productId', deleteProduct);

module.exports = router;
