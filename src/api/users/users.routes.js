//routes = регулировчик

const express = require("express");
const router = express.Router();
const controller = require('./users.controller');
const passport = require('passport');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/auth', controller.auth);
router.post('/logout', controller.logout);
router.post('/edit', controller.editUserInfo);
module.exports = router;