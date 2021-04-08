import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import NoMatch from './Components/NoMatch/NoMatch';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/contact-me">
            <ContactMe></ContactMe>
          </Route>

          <Route path="/sign-in">
            <SignIn></SignIn>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
