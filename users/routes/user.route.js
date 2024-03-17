const express = require('express');
const router = express.Router();
require('dotenv').config();
const { validationResult } = require('express-validator');
const {
  loginValidator,
  createValidator,
} = require('../utils/requestValidators');
const { login, register } = require('../services/user.service');

router.post('/register', createValidator, async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // in case request body meet the validation criteria
    const { firstName, lastName, email, password } = req.body;
    // invoking service layer(business logic)
    const response = await register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    return res.status(200).json({ operation: 'Register', data: response });
  }
  res.status(422).json({ errors: errors.array() });
});
router.post('/login', loginValidator, async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // in case request body meet the validation criteria
    const { email, password } = req.body;
    // invoking service layer(business logic)
    const response = await login({ email: email, password: password });

    return res.status(200).json({ operation: 'Login', data: response });
  }
  res.status(422).json({ errors: errors.array() });
});

router.get('*', (req, res) => {
  return res.status(301).json({ info: 'User Default Route' });
});
module.exports = router;
