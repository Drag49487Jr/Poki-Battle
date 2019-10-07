import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <span>Welcome, {props.user.name} </span>
        <Link to ='' onClick={props.handleLogout}>LOG OUT</Link><br></br>
        <Link to='/createteam'>Create Pokemon Team</Link> 
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