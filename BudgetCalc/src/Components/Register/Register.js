import React from 'react';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitRegister = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user) {
                    this.props.onChangeRoute('home');
                }
            })
    }

    render() {
        return(
            <article className="pa4 black-80">
                <form action="sign-up_submit" method="get" accept-charset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email addressss</label>
                            <input 
                                onChange={this.onEmailChange}
                                className="pa2 input-reset ba bg-transparent w-100 measure" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                onChange={this.onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent" 
                                type="password" 
                                name="password" 
                                id="password" 
                            />
                        </div>
                    </fieldset>
                    <div className="mt3"><input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Register" /></div>
                </form>
            </article>

        );
    }
}

export default Register;