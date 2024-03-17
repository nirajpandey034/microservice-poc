const {
  loginController,
  registerController,
} = require('../models/user.controller');

const login = async ({ email, password }) => {
  try {
    const response = await loginController({
      email: email,
      password: password,
    });

    return response;
  } catch (err) {
    console.log(err);
    return { err: err?.message || `Error: ${err}` };
  }
};

const register = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await registerController({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    return response;
  } catch (err) {
    console.log(err);
    return { err: err?.message || `Error: ${err}` };
  }
};

module.exports = { login, register };
