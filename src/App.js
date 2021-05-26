import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";

const App = () => {
    return (
        <Router>
            <Home></Home>

            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
