// App.js

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import DashboardPage from "./components/DashboardPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
