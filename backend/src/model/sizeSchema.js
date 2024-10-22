const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  size:String,
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


sizeSchema.pre('insert-one',function(){
    this.created_at = new Date();
})

sizeSchema.pre('save',function(){
    this.created_at = new Date();
})

const sizeModel = mongoose.model('product_size',sizeSchema);

module.exports = sizeModel;
