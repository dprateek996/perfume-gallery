const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  scentNotes: {
    type: String,
    required: false
  },
  category: {
    type: String,
    enum: ['perfume', 'attar'],
    default: 'perfume'
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 1
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true
});

productSchema.index({ category: 1 });
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ price: 1 });
productSchema.index({ rating: -1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;