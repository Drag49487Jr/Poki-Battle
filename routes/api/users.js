const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

router.get('/getteams/:id', usersCtrl.getTeams)
router.get('/getteam/:eid/', usersCtrl.getTeam)
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/addteam', usersCtrl.addteam)
router.post('/addpokemon', usersCtrl.addpokemon)
router.delete('/removepokemon', usersCtrl.removepokemon)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;