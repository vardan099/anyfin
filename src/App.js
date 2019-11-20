import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AppNavBar from "./components/AppNavBar"
import Dashboard from "./components/Dashboard"
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import "./App.css"

function App() {

    useEffect(() => {
        store.dispatch(loadUser());
    },[]);

    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                <AppNavBar/>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
