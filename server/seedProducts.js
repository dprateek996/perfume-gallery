const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product.js');
const products = require('./data/products.js');
const connectDB = require('./config/db.js');

dotenv.config();

const seedProducts = async () => {
    try {
        await connectDB();
        await Product.deleteMany({});
        console.log('Existing products cleared');
        await Product.insertMany(products);
        console.log(`${products.length} products added successfully!`);
        process.exit(0);
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts();
