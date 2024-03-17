const express = require('express');
const app = express();
require('dotenv').config();

app.get('*', (req, res) => {
  return res.json({ info: 'Hi! You have reached Cart MS.' });
});

app.listen(process.env.APP_PORT, (res, err) => {
  if (err) {
    console.log('Something went wrong');
  }
  console.log(`Server Started successfully at ${process.env.APP_PORT}`);
});
