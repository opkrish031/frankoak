const mongoose = require("mongoose");

const colorProSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color_code: {
    type: String,
    default:'000000',
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
  created_at: Date,
  updated_at: {
    type: Date,
    default: Date.now,
  },
});


colorProSchema.pre('insert-one',function(){
    this.created_at = new Date();
})

colorProSchema.pre('save',function(){
    this.created_at = new Date();
})

const colorName = mongoose.model('color_product',colorProSchema);

module.exports = colorName;
