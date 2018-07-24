import React, { Component } from "react";

import TopNav from "../TopNav";
import Landing from "../Landing";
import About from "../About";

export default class App extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Landing />
                <About />
            </div>
        );
    }
}
