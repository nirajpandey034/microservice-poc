const express = require('express');
const router = express.Router();
require('dotenv').config();
const { validationResult } = require('express-validator');
const { addProduct } = require('../services/product.service');

const { detailsValidator } = require('../utils/productDetailsValidator');

router.post('/add', detailsValidator, async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // in case request body meet the validation criteria
    const { title, price } = req.body;
    // invoking service layer(business logic)
    const response = await addProduct({
      title: title,
      price: price,
    });

    return res.status(200).json({ operation: 'Add Product', data: response });
  }
  res.status(422).json({ errors: errors.array() });
});
router.get('*', (req, res) => {
  return res.status(301).json({ info: 'Product Default Route' });
});
module.exports = router;
