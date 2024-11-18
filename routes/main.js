const express = require('express');
const {Dashboard, login} = require("../controllers/main");
const router = express.Router();

router.post("/", login)
router.get('/', Dashboard)
module.exports = router;