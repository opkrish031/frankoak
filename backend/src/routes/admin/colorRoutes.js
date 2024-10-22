const express = require('express');
const multer = require('multer')
const { createColorController, readColorController } = require('../../controller/controller');

const colorRouter = express.Router();

colorRouter.use(multer().none())

colorRouter.post('/upload-color',createColorController)
colorRouter.get('/read-color',readColorController)

module.exports = {
    colorRouter
}