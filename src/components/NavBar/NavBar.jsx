import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
    <div className='navbarIn'>
        <span className='user'>Welcome, {props.user.name} </span>
        <Link className='link' to ='/' onClick={props.handleLogout}>LOG OUT</Link><br></br>
        <Link className='link' to='/createteam'>Create Pokemon Team</Link> 
    </div>
    :
    <div>
    <div className='navbarOut'>
        <Link className='link' to='/login'>Log In</Link>
        <Link className='link' to='/signup'>Sign Up</Link>
        <img className='image'src='../images/pokemonPhrase.png' alt='if'></img>
    </div>
        </div>
    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;