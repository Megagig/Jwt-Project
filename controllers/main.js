const CustomAPIError = require("../errors/custom-error");
const login = async (req, res) => {
	const { username, password } = req.body;
	//validation
	if (!username || !password) {
		throw new CustomAPIError ("Please enter username or password", 400);
	}

	res.send('fake login/register/signup route')
}

const Dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 1000)
	res.status(200).json({
		success: true,
		message: `hello Anthony`, secret: `Here is your authorized data, Your luckyNumber is ${luckyNumber}`
	})
}

module.exports = {
	login,
	Dashboard,
}