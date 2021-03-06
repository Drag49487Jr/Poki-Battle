import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './PokemonPage.css'

const PokemonPage = (props) => {
    return (
        <div>
            <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
            />
            <img className='pikachu' src='https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif' alt='pikachu'></img>
        </div>
    )
};

export default PokemonPage;