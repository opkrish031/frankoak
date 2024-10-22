const express = require('express');
const productRouter = require('./admin/productController');
const { colorRouter } = require('./admin/colorRoutes');
const sizeRouter = require('./admin/sizeRoutes');

const adminPanelRouter = express.Router();

adminPanelRouter.use('/parent-category',productRouter);
adminPanelRouter.use('/parent-color',colorRouter);
adminPanelRouter.use('/parent-size',sizeRouter);

module.exports = adminPanelRouter;