const express = require("express");
const router = express.Router();

router.use('/users/', require('./users/usersRoutes'));

module.exports = router;