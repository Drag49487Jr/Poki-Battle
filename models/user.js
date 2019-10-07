const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const pokemonSchema = new mongoose.Schema({
    pokemonName: String,
    type: String,
    baseStat: Number, 
});

const teamSchema = new mongoose.Schema({
    teamName:String,
    region:{
        type:String,
        enum:[
            'Oblivia',
            'Kanto',
            'Hoenn',
            'Johto',
            'Sinnoh',
            'Alola',
            'Kalos',
            'Unova',
            'Fiore',
            'Almia'
        ]
    },
    pokemons: [pokemonSchema]
})

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    }, 
    password: String,
    team: [teamSchema]
}, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    })
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch)
    });
};

module.exports = mongoose.model('User', userSchema);