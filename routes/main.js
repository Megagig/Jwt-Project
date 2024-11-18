const express = require('express');
const {Dashboard, login} = require("../controllers/main");
const router = express.Router();

router.post("/login", login)
router.get('/dashboard', Dashboard)
module.exports = router;