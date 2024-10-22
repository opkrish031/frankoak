const express = require('express');
const multer = require('multer');
const { createColorController, readColorController } = require('../../controller/controller');
const sizeRouter = express.Router();

sizeRouter.use(multer().none())

sizeRouter.post('/upload-size', createColorController)
sizeRouter.get('/read-size', readColorController)


module.exports = sizeRouter;