import React, { Component } from 'react';
import NavContainer from "./components/Nav/NavContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import PoliciesContainer from './components/Policies/PoliciesContainer';
import AccountContainer from './components/Account/Account';
import FooterContainer from './components/Footer/FooterContainer';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavContainer />
      < Router >
        <Switch>
            < Route exact path="/" component={HomepageContainer} />
            < Route exact path="/account" component={AccountContainer} />
            < Route exact path="/policies" component={PoliciesContainer} />
        </Switch>
        </Router>
        <FooterContainer />
        
        </div>
        
    );
  }
}

export default App;
