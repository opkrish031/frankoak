const parentCategory = require("../../model/productSchema");

const createProductController = async (req, res) => {
  try {
    const data = new parentCategory(req.body);

    const response = await data.save();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

const readProductCategories = async (req, res) => {
  try {
    const data =await parentCategory.find({ deleted_at: null });
    console.log(data);
    res.status(200).json({ message: "Success" ,data});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  readProductCategories,
  createProductController
  
};
