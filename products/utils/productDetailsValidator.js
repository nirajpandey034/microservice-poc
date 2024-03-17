const { body } = require('express-validator');

const detailsValidator = [
  body('title', 'Invalid does not Empty').not().isEmpty(),
  body('price', 'Invalid does not Empty').not().isEmpty(),
];

module.exports = { detailsValidator };
