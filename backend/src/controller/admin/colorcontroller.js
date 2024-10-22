const colorName = require("../../model/colorSchema");

const createColorController = async (req, res) => {
  try {
    const data = new colorName(req.body);

    const response = await data.save();
    console.log(req.body);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

const readColorController = async (req, res) => {
  try {
    const data = await colorName.find({deleted_at:null})
    res.status(200).json({ message: "Success" ,data});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  createColorController,
  readColorController
};
