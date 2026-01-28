const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors({
  origin: '*'
}));

app.use(express.json());


connectDB(); // Call the function to connect to MongoDB

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/contact', contactRoutes);
app.use('/api', projectRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
