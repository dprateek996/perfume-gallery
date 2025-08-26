const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/Product.js');
const products = require('./data/products.js');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Clear any existing products
    await Product.deleteMany();

    // Insert the new products
    await Product.insertMany(products);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();