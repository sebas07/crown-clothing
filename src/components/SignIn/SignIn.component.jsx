import React from 'react';

import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import './SignIn.styles.scss';

class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        handleChange={ this.handleChange } 
                        label='Email' 
                        name='email'
                        type='email'
                        value={ this.state.email }
                    />
                    <FormInput
                        handleChange={ this.handleChange }
                        label='Password' 
                        name='password'
                        type='password'
                        value={ this.state.password }
                        required
                     />

                     <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignIn;
