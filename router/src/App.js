import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import { NavLink } from "react-router-dom";

const style = {
    display: "flex",
    justifyContent: "space-around"
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <header style={style} className={"App-header"}>
                    <NavLink to="/Route1">Route 1</NavLink>
                    <NavLink to="/Route2">Route 2</NavLink>
                    <NavLink to="/Route3">Route 3</NavLink>
                </header>
                {routes}
            </div>
        );
    }
}

export default App;
