const { addProductController } = require('../models/product.controller');
const { generateId } = require('../utils/generateId');

const addProduct = async ({ title, price }) => {
  try {
    const id = generateId();

    const response = await addProductController({
      id: id,
      title: title,
      price: price,
    });
    return response;
  } catch (err) {
    console.log(err);
    return { err: err?.message || `Error: ${err}` };
  }
};

module.exports = { addProduct };
