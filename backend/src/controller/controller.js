const { createColorController, readColorController } = require("./admin/colorcontroller");
const {createProductController, readProductCategories} = require("./admin/ProductController");
const { createSizeController, readSizeController } = require("./admin/sizeController");

module.exports = {
    createProductController,
    readProductCategories,
    createColorController,
    readColorController,
    createSizeController,
    readSizeController
}