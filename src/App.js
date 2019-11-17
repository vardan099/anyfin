import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
