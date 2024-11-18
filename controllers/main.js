const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
  const { username, password } = req.body;
  //validation
  // we can use Mongoose validation OR Joi OR check in the controller with if..else statement
  if (!username || !password) {
    throw new CustomAPIError('Please enter username or password', 400);
  }

  // Create a new  Jwt Token

  //just for demo, normally provided by the DB
  const id = new Date().getTime();

  // Try to keep the payload small, better experience for the user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
// send a response
  res.status(200).json({
    msg: 'Successfully logged in',
    token,
  })

};

const Dashboard = async (req, res) => {
  authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 400);
  }
  const luckyNumber = Math.floor(Math.random() * 1000);
  res.status(200).json({
    success: true,
    message: `hello Anthony`,
    secret: `Here is your authorized data, Your luckyNumber is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  Dashboard,
};
