const User = require('../models/user');
const Team = new User;
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        res.status(400).json(err);
    }
}
async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({ err: 'Bad Credentials' });
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token });
            } else {
                return res.status(401).json({ err: 'Bad Credentials'});
            }
        });
    } catch (err) {
        return res.status(401).json(err);
    }
}

async function addteam(req, res) {
    let user = await User.findById(req.body.user)
    console.log(req.body)
        let newTeam = {
            teamName: req.body.teamName, 
            region: req.body.region}
        user.teams.push(newTeam)
        user.save((err) => {
            if(err) console.log(err)
        })
}

async function getteams(req, res) {
    let user = await User.findById(req.params.id)
    return res.json(user.teams)
}

async function addpokemon(req, res) {
    let user = await User.findById(req.body._id)
        res.json(user)
}

async function removepokemon(req, res) {

}
function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}

module.exports = {
    signup,
    login,
    addteam,
    addpokemon,
    removepokemon,
    getteams,
};