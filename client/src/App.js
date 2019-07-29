import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Main></Main>
            </Router>
        </div>
    );
}

export default App;
