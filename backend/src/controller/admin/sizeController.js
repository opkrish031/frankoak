const sizeModel = require("../../model/sizeSchema");

const createSizeController = async (req, res) => {
  try {
    const data = new sizeModel(req.body);

    const response = await data.save();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

const readSizeController = async (req, res) => {
  try {
    const data = await sizeModel.find({ deleted_at: null });
    console.log(data);
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  createSizeController,
  readSizeController
};
