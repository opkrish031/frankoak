const express = require('express');
const multer = require('multer');
const { createProductController, readProductCategories } = require('../../controller/controller');
const productRouter = express.Router();

productRouter.use(multer().none())

productRouter.post('/upload-product', createProductController)
productRouter.get('/read-product', readProductCategories)


module.exports = productRouter;