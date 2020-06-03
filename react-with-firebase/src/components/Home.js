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
                    <button className="btn btn-danger" onClick={this.logout}>Logout</button>
                </div>
            </div>
        )
    }
}

export default Home;