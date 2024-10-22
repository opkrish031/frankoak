const mongoose = require("mongoose");

const productCatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
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

productCatSchema.pre('insert-one',function(){
    this.created_at = new Date();
})

productCatSchema.pre('save',function(){
    this.created_at = new Date();
})

const parentCategory = mongoose.model('parent_categories',productCatSchema);

module.exports = parentCategory;