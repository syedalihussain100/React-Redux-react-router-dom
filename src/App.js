import React from 'react';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Blog from "./Component/Blog";
import Location from "./Component/Location";
import Admin from './Component/Admin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Services from './Component/Services';
import { AuthContextProvider } from "./Component/Autentication/AuthContext";
import PrivateRoute from './Component/PrivateRoute';
import Game from './Component/Game';
import Winner from "./Component/Winner";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/winner">
              <Winner />
            </Route>
            <Route path="/*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  )
}

export default App




function ErrorPage() {
  return (
    <div>
      <h1>Sorry Page Is Not Found!</h1>
    </div>
  )
}