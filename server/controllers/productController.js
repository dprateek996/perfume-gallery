const Product = require('../models/Product.js');

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const filter = {};

    if (req.query.category && req.query.category !== 'all') {
      filter.category = req.query.category;
    }

    if (req.query.keyword) {
      filter.$text = { $search: req.query.keyword };
    }

    let sort = { createdAt: -1 };
    if (req.query.sort) {
      switch (req.query.sort) {
        case 'price_asc':
          sort = { price: 1 };
          break;
        case 'price_desc':
          sort = { price: -1 };
          break;
        case 'rating':
          sort = { rating: -1 };
          break;
        case 'name':
          sort = { name: 1 };
          break;
      }
    }

    const products = await Product.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(filter);
    const pages = Math.ceil(total / limit);

    res.json({
      products,
      pagination: {
        page,
        limit,
        total,
        pages,
        hasNext: page < pages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error("Error in getProducts:", error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error("Error in getProductById:", error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getProducts, getProductById };