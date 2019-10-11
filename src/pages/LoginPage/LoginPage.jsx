import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginPage.css'

class LoginPage extends Component {
    constructor() {
        super();
        this.state={
            email: '',
            pw: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/pokemonboard');
        } catch (err) {
            alert('Invalid Creds')
        }
    }

    render() {
        return(
            <div className='login-box'>
                    <h1>Login</h1>
                  <form onSubmit={this.handleSubmit}>
                <div className='textbox'>
                    <input type="email"  placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
                <div className='textbox'>
                    <input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                </div>
                <button>Log In</button>
                    <button><Link to='/'>Cancel</Link></button>
             </form>
            </div>
        );
    }
}

export default LoginPage;