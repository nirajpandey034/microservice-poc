const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const database = require('./config/database');
const UserRoute = require('./routes/user.routes');

app.use(express.json());
app.use(cors());
app.options('*', cors());

database();

app.use('/users', UserRoute);

app.get('*', (req, res) => {
  return res.status(500).json({ info: 'Hi! You have reached Users MS.' });
});

app.listen(process.env.APP_PORT, (res, err) => {
  if (err) {
    console.log('Something went wrong');
  }
  console.log(`Server Started successfully at ${process.env.APP_PORT}`);
});
