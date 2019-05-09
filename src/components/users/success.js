import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./bootstrap.min.css";
import "./app.css";
const Success = (props) => {
  return <div className="container"> <div className="row">
      <div className="col">
      <h1>Thanks for signing up!</h1>
        <p>You were registered successfully and can now 
            <Link to="/users/login">login!</Link>
            </p>
      </div>
    </div>
    </div>
}

export default Success;