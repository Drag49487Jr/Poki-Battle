const User = require('../models/user');
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
        let newTeam = {
            teamName: req.body.teamName, 
            region: req.body.region}
        user.teams.push(newTeam)
        user.save((err) => {
            if(err) console.log(err)
        })
}
//We want to get the user not through
async function getTeams(req, res) {
    console.log(req.body.user)
    let user = await User.findById(req.params.id)
    return res.json(user.teams)
}

async function getTeam (req, res) {
    console.log('--------',req);
    // console.log('bhifebshjfebieoud', req.params.id)
   let user = await User.findById(console.log('I want this to be the team Id not user id',req.params.id))
//    return res.json(console.log('gettttttttteam',user.teams.pokemons))
}

async function addpokemon(req, res) {
    let user = await User.findById(req.body._id)
    .then(user => {
        user.team.findById()
    })
    let newPokemon = {
        pokemonName: req.body.pokemonName,
        height: req.body.height,
        base_experience: req.body.base_experience
    }
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
    getTeams,
    getTeam
};