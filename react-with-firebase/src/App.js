import React from 'react';
import './App.css';
import fire from './config/fire';

import Login from './components/Login'
import Home from './components/Home'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? <Home/> : <Login/>}
      </div>
    )
  }
}

export default App;
