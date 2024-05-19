import React from 'react';

class Signin extends React.Component {

    constructor() {
        super()
    }

    render() {
        return(
            <main className="pa4 black-80">
                <article className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={ () => this.props.onChangeRoute('home') } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <a 
                            onClick={() => this.props.onChangeRoute('register')}
                            href="#0" 
                            className="f6 link dim black db">Register
                        </a>
                    </div>
                </article>
            </main>

        );
    }
}

export default Signin;