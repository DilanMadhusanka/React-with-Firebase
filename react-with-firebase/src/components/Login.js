import React from 'react';
import fire from '../config/fire';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(u => {
            console.log(u);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="enter email address"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <input
                        name="password"
                        type="password"
                        id="password"
                        placeholder="enter password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>SignUp</button>
                </form>
            </div>
        )
    }
}

export default Login;