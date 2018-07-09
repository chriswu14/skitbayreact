import React, { Component } from "react";

import TopNav from "../TopNav";
import Landing from "../Landing";
import About from "../About";
import RoadMap from "../RoadMap";

export default class App extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <Landing />
                <About />
                <RoadMap />
            </div>
        );
    }
}
