import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Email is taken!');
    })
    .then(({token}) => tokenService.setToken(token));
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
}

function addTeam(team) {
    return fetch(BASE_URL + 'addteam', {
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(team)
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Team Not Submitted!');
    })
}

function getAllTeams(id) {
    return fetch(BASE_URL + 'getteams/' + id, {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'}),
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Cant get Teams!');
    });
  }


function getOneTeam() {
    return fetch(BASE_URL)
}

function addPokemon(pokemon, p2) {
    let pokemon2 ={
        _id: pokemon,
        pokemonName: p2[0],
        height: p2[1],
        base_experience: p2[2]
    }
    return fetch(BASE_URL + 'addpokemon', {
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body:JSON.stringify(pokemon2)
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Pokemon not added!');
    })
}

function removePokemon() {
    return fetch(BASE_URL + 'removepokemon', {
        method:'DELETE',
        headers: new Headers({'Content-Type':'application/json'}),
        body:JSON.stringify()
    }).then(res => res.json());
}

function getUser() {
    return tokenService.getUserFromToken();
}

function logout() {
    tokenService.removeToken();
}
export default {
    signup,
    getUser,
    logout,
    login,
    addTeam,
    getAllTeams,
    addPokemon,
    removePokemon,
    getOneTeam,
};