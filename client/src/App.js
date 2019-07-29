import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Add from "./components/Add/";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/add-contact" component={Add} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
