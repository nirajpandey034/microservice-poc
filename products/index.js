const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const database = require('./config/database');
const ProductRoute = require('./routes/product.routes');

app.use(express.json());
app.use(cors());
app.options('*', cors());

database();

app.use('/products', ProductRoute);

app.get('*', (req, res) => {
  return res.json({ info: 'Hi! You have reached Products MS.' });
});

app.listen(process.env.APP_PORT, (res, err) => {
  if (err) {
    console.log('Something went wrong');
  }
  console.log(`Server Started successfully at ${process.env.APP_PORT}`);
});
