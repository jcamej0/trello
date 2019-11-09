import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './scenes/login';
import Signup from './scenes/signup';

function App() {
  return (
<div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
