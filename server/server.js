const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'client/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});