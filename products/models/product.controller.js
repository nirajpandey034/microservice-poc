const ProductModel = require('./product.model');

const addProductController = async ({ id, title, price }) => {
  try {
    const response = await ProductModel.create({
      id: id,
      title: title,
      price: price,
    });
    return { data: response, success: true };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { addProductController };
