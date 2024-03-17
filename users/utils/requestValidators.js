const { body } = require('express-validator');

const loginValidator = [
  body('email', 'Invalid does not Empty').not().isEmpty(),
  body('email', 'Invalid email').isEmail(),
  body('password', 'The minimum password length is 6 characters').isLength({
    min: 6,
  }),
];
const createValidator = [
  body('firstName', 'The minimum firstname length is 3 characters').isLength({
    min: 3,
  }),
  body('lastName', 'The minimum firstname length is 3 characters').isLength({
    min: 3,
  }),
  body('email', 'Invalid email').isEmail(),
  body('password', 'password does not Empty').not().isEmpty(),
  body('password', 'The minimum password length is 6 characters').isLength({
    min: 6,
  }),
];

module.exports = { loginValidator, createValidator };
