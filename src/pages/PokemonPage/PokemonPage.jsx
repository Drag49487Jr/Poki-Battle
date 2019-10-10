import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const PokemonPage = (props) => {
    return (
        <div>
            <h1>Pokemon Panel</h1>
            <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
            />
        </div>
    )
};

export default PokemonPage;