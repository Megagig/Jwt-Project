const express = require('express');
const { Dashboard, login } = require('../controllers/main');
const authenticationMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/login', login);
router.get('/dashboard', authenticationMiddleware, Dashboard);
module.exports = router;
