import React from 'react';
import NavBar from '../NavBar/NavBar';

const PokemonBoard = (props) => {
    return (
        <div>
            Pokemon Board
            <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
            />
        </div>
    )
}

export default PokemonBoard;