import React, { Component } from 'react';
import { Redirect , Link} from 'react-router-dom';
import { loginRequest } from '../helpers/network';
import { saveUser } from '../helpers/authentication';
import "./bootstrap.min.css";
import "./app.css";
class Login extends Component {
  state = {
    error: null,
    loggedin: null
  }
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitForm = async(e) => {
    e.preventDefault();
    this.setState({
      error: null
    })
    try {
      let response = await loginRequest({email: this.state.email, password: this.state.password});
      saveUser(response);
      this.setState({
        loggedin: true
      })
    }catch (e){
      this.setState({
        error: e.email
      })
    }
  }
  render(){
    return (<div className="container">
      {this.state.loggedin ? <Redirect to="/"/> : null}
      <div className="row">
        <div className="col">
          <h1 className="heading">Please Login</h1>
        </div>
      </div>

      {this.state.error ?
        <div className="alert alert-danger" role="alert">
          {this.state.error}
        </div>
      : null }
      <form onSubmit={this.submitForm}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="email" type="email" onChange={this.updateVal} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name="password" onChange={this.updateVal} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <p>
      <button type="submit" className="btn btn-primary">Login</button>
       <Link to="/users/register">New User?</Link></p>
    </form>
    </div>)
  }
}
export default Login;