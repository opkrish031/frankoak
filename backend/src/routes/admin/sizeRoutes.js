const express = require('express');
const multer = require('multer')
const {readSizeController, createSizeController } = require('../../controller/controller');
const sizeRouter = express.Router();

sizeRouter.use(multer().none())

sizeRouter.post('/upload-size', createSizeController)
sizeRouter.get('/read-size', readSizeController)


module.exports = sizeRouter;