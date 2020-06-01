import React, { useState } from 'react';

const ContactForm = (props) => {

    return (
        <form autoComplete="off">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile" />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" />
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address" />
            </div>
            <div className="form-group">
                <input type="submit" value="Save" className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default ContactForm;