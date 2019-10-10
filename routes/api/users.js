const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const usersCtrl = require('../../controllers/users');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/createteam', usersCtrl.createteam)
// router.post('/pokemonsearch', usersCtrl.addPokemon)


module.exports = router;