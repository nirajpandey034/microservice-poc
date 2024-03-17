const UserModel = require('./user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginController = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '1h',
        }
      );

      // send response
      return {
        token: token,
        success: true,
        user: `${user.firstName} ${user.lastName}`,
      };
    }
    return { success: false };
  } catch (err) {
    throw new Error(err);
  }
};

const registerController = async ({ firstName, lastName, email, password }) => {
  try {
    //checking existing user
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return response.status(409).send('User Already Exist. Please Login');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      firstName,
      lastName,
      email: email,
      password: encryptedPassword,
    });
    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '1h',
      }
    );

    // return new user
    return { token: token, success: true };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { loginController, registerController };
