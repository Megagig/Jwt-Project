const login = async (req, res) => {
	res.send('fake login/register/signup route')
}

const Dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 1000)
	res.send(200).json({
		success: true,
		message: `hello Anthony`, secret: `Here is your authorized data, Your luckyNumber is ${luckyNumber}`
	})
}

module.exports = {
	login,
	Dashboard,
}