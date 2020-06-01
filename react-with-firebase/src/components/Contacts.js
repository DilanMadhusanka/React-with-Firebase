import React from 'react';
import ContactForm from "./ContactForm"
import firebase from '../config/fire'

const firebaseDb = firebase.database().ref();

const Contacts = () => {

    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(
            obj,
            err => {
                console.log(err)
            }
        )
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>
                <div className="col-md-7">
                    <div>list of contacts</div>
                </div>
            </div>
        </>
    );
}

export default Contacts