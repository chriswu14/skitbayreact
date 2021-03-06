import React, { Component } from "react";
import LogoText from "../sharedComponents/LogoText";

export default class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { showBurgerMenu: false };
        this.toggleBurger = this.toggleBurger.bind(this);
    }

    toggleBurger() {
        this.setState({ showBurgerMenu: !this.state.showBurgerMenu });
    }

    render() {
        let toggleClass = this.state.showBurgerMenu ? "is-active" : "";
        return (
            <nav className="navbar is-fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <LogoText badge="Beta" />
                        </a>
                        <div
                            className={"navbar-burger burger " + toggleClass}
                            onClick={this.toggleBurger}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div className={"navbar-menu " + toggleClass}>
                        <div className="navbar-end">
                            <a
                                className="navbar-item"
                                href="#about"
                                onClick={this.toggleBurger}
                            >
                                ABOUT
                            </a>
                            <a
                                className="navbar-item"
                                href="#roadMap"
                                onClick={this.toggleBurger}
                            >
                                ROADMAP
                            </a>
                            <a
                                className="navbar-item"
                                href="#team"
                                onClick={this.toggleBurger}
                            >
                                TEAM
                            </a>
                            <a
                                className="navbar-item"
                                href="#faq"
                                onClick={this.toggleBurger}
                            >
                                FAQ
                            </a>
                            <a
                                className="navbar-item"
                                href="https://s3.amazonaws.com/skitbay-app/Skitbay_whitepaper_beta_1.0.pdf"
                                target="_blank"
                                onClick={this.toggleBurger}
                            >
                                WHITEPAPER
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
