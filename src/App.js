import React, { Component } from 'react';
import Clients from './Clients/Clients'; 
import Dash from './Dash';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    const auth = true;
    return (
      <Router>
        <div>
        <Route exact path='/' component={Dash} />
        <Route path='/clients' render={() => auth === true ? <Clients /> : <Redirect to="/" />} />
        </div>
      </Router>
    );
  }
}

export default App;
