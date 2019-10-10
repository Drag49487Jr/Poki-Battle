const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

router.get('/getteams/:id', usersCtrl.getteams)
// router.get('/getteams/:id', usersCtrl.getteam)
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/addteam', usersCtrl.addteam)
router.post('/addpokemon', usersCtrl.addpokemon)
router.delete('/removepokemon', usersCtrl.removepokemon)



module.exports = router;