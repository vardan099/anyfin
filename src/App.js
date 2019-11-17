import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AppNavBar from "./components/AppNavBar"
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavBar/>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
