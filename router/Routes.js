const express = require('express');
const authRoutes = require('./AuthRouter');
const productRoutes = require('./productRouter')
const router = express.Router();

router.use(productRoutes);
router.use(authRoutes);
module.exports = { router };