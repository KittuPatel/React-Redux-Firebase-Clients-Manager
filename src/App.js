import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard'
import './App.css';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientInfo from './components/clients/ClientInfo';
import Login from './components/auth/Login';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth'
import Settings from './components/settings/Settings'
import Register from './components/auth/Register'

function App() {
  return (
        <Router>
          <div className="App">
              <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component= {UserIsAuthenticated(Dashboard)} />
                  <Route exact path="/login" component= {UserIsNotAuthenticated(Login)} />
                  <Route exact path="/register" component= {UserIsNotAuthenticated(Register)} />
                  <Route exact path="/client/add" component= {UserIsAuthenticated(AddClient)} />
                  <Route exact path="/client/edit/:id" component= {UserIsAuthenticated(EditClient)} />
                  <Route exact path="/client/:id" component= {UserIsAuthenticated(ClientInfo)} />
                  <Route exact path="/settings" component= {UserIsAuthenticated(Settings)} />
                </Switch>
              </div>
          </div> 
        </Router>
  );
}

export default App;
