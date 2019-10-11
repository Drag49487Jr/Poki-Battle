import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css';

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    };
    

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
            this.props.history.push('/pokemonboard');
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
        <body className='BODY'>
            <div>
                <div className='row'>
                    <div className='col-mid-10 offset=md-1'>
                        <div className='row'>
                            <div className='col-md-5 register-left'>
                                <h3></h3>
                                <p></p>
                            </div>
                            <div className='col-md-7 register-right'>
                                <h2>Register</h2>
                                <form onSubmit={this.handleSubmit}>
                                <div className='register-form'>
                                    <div className='form-group'>
                                        <input type='text' class='form-control' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/>
                                    </div>
                                    <div className='form-group'>
                                        <input type='email' class='form-control' placeholder='Email'  value={this.state.email} name='email' onChange={this.handleChange} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='password' class='form-control' placeholder='Password' value={this.state.password} name='password' onChange={this.handleChange} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='password' class='form-control' placeholder='Confirm Password' value={this.state.passwordConfirm} name='passwordConfirm' onChange={this.handleChange}/>
                                    </div>
                                    <button disabled={this.isFormInvalid} className='btn btn-primary'>Sign Up!</button>
                                    <Link className='btn btn-primary' to='/'>Cancel</Link>
                                </div>
                        </form>
                            </div>
                         </div>
                {/* <form onSubmit={this.handleSubmit}>
                </form> */}
                </div> 
                </div>
            </div>
        </body>
        );
    }
}

export default SignupForm;