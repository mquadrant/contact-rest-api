import React from "react";
import styled from "styled-components";
import {
    Route,
    Switch,
    Link,
    NavLink,
    withRouter,
    BrowserRouter as Router,
} from "react-router-dom";
import Home from "../Pages/Home";
import Add from "../Pages/Add";
import SideTray from "./SideTray";
import Block from "../Pages/Block";

const MainBody = styled.div`
    width: 100%;
    height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

function Main(props) {
    return (
        <MainBody>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add-contact" component={Add} />
                <Route exact path="/blocked" component={Block} />
            </Switch>
            <SideTray {...props}></SideTray>
        </MainBody>
    );
}

export default withRouter(Main);
