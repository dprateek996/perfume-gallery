const express = require('express');
const path = require('path'); // Ensure path is required
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

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// ================= DEPLOYMENT SETUP =================
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  // Serve the static files from the React app's build directory
  app.use(express.static(path.join(__dirname, 'client/dist')));

  // For any other route, serve the index.html file
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  );
} else {
  // In development, just have a simple root route
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}
// ====================================================

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});