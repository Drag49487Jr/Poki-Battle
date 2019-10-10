import tokenService from './tokenService';
const BASE_URL = '/api/users/';
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        console.log(res)
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
    return fetch(BASE_URL + 'createteam', {
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(team)
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Team Not Submitted!');
    })
}

function updatePokemon() {
    return fetch(API_URL, {
        method:'PUT',
        header: new Headers({'Content-Type': 'application/json'}),
        body:JSON.stringify()
    }).then(res => res.json());
}

function removePokemon() {
    return fetch(API_URL, {
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
    updatePokemon,
    removePokemon,

};