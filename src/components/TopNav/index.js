import React, { Component } from 'react';

export default class TopNav extends Component {
  constructor(props){
      super(props);
      this.state = { showBurgerMenu: false }
      this.toggleBurger = this.toggleBurger.bind(this);
  }

  toggleBurger() {
    this.setState({ showBurgerMenu: !this.state.showBurgerMenu });
  }

  render() {
    let toggleClass = this.state.showBurgerMenu ? "is-active" : "";
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
             do<b>Good</b>
          </a>
          <div className={"navbar-burger burger " + toggleClass} onClick={this.toggleBurger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={"navbar-menu " + toggleClass}>
          <div className="navbar-end">
            <a className="navbar-item" href="#">
              ABOUT
            </a>
            <a className="navbar-item" href="#">
              ROADMAP
            </a>
            <a className="navbar-item" href="#">
              SOCIAL MEDIA
            </a>
            <a className="navbar-item" href="#">
              TEAM
            </a>
            <a className="navbar-item" href="#">
              PRESS
            </a>
            <a className="navbar-item" href="#">
              FAQ
            </a>
          </div>
        </div>
      </nav>
    );
  }
}