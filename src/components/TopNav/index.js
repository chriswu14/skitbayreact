import React, { Component } from 'react';
import styled from 'styled-components';

import LogoText from '../LogoText'

const BulmaNavbar = ({className, children}) => (
  <nav className={className}>
    {children}
  </nav>
);
const TransparentNav = styled(BulmaNavbar)`
  background-color: transparent;
  background-image: none;
  * {
    color: white;
  }
`;

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
      <TransparentNav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <LogoText/>
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
        </div>
      </TransparentNav>
    );
  }
}