import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <Link to ='' onClick={props.handleLogout}>LOG OUT</Link>
        <span>Welcome, {props.user} </span>
    </div>
    :
    <div>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
    </div>

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;