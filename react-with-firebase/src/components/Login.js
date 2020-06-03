import React from 'react';
import fire from '../config/fire';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);

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

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(u => {
            console.log(u);
        }).catch(err => {
            console.log(err);
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="enter email address"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="enter password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </div>
                    <button className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                    <br />
                    <div className="text-center">
                        <button className="btn btn-secondary" onClick={this.signup}>SignUp</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Login;