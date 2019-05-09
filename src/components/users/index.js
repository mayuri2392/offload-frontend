import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './register';
import { isLoggedIn } from '../../helpers/authentication';
import App from '../App/index';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="" render={
          (props) => {
            if (isLoggedIn()){
              return <App />
            }
            return <Login />
          }
        }/>
      </Switch>
    );
  }
}

export default App;
