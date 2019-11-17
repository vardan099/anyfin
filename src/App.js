import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AppNavBar from "./components/AppNavBar"
import Dashboard from "./components/Dashboard"
import { Provider } from 'react-redux';
import store from './store';

import "./App.css"

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                <AppNavBar/>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
