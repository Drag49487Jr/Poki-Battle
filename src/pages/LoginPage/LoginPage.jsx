import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

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
            [e. target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            alert('Invalid Creds')
        }
    }

    render() {
        return(
            <div className='LoginPage'>
                <header>Login In</header>
                <form onSubmit={this.handleSubmit}>
                    <input type="email"  placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                    <input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                    <button>Log In</button>
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        );
    }
}

export default LoginPage;