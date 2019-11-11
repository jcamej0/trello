import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './scenes/login';
import Signup from './scenes/signup';
import Dashboard from './scenes/dashboard';

function App() {
  return (
<div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
