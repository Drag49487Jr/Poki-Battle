import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
    }

    handleChange = (e) => {
            this.props.updateMessage('');
            this.setState({
                [e.target.name]: e.target.value
            });
    }

    handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await userService.signup(this.state);
                this.props.handleSignupOrLogin();
                this.props.history.push('/');
            } catch (err) {
                this.props.updateMessage(err.message);
            }
    }

    isFormInvalid() {
            return !(this.state.name && 
                this.state.email && 
                this.state.password === this.state.passwordConfirm);
    }
        
    render() {
        return(
            <div>
                <header>Sign Up</header>
                <form onSubmit={this.handleSubmit}>
                    <div className='name'>
                        <div>
                            <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='email'>
                        <div>
                            <input type='email' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='password'>
                        <div>
                            <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="password" placeholder="Confirm Password" value={this.state.passwordConfirm} name="passwordConfirm" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;