import React from 'react';
import fire from '../config/fire';
import Contacts from './Contacts';

class Home extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="row">

                <div className="col-md-8 offset-md-2">
                    <Contacts/>
                </div>

                {/* <h1>You are logged in !!!</h1>
                <button onClick={this.logout}>Logout</button> */}
            </div>
        )
    }
}

export default Home;