import React, { Component } from 'react';
import styled from 'styled-components';


const BulmaHero = ({className, children}) => (
  <section className={className}>
    {children}
  </section>
);
const GradientSection = styled(BulmaHero)`
  background: #7b4397;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #7b4397, #dc2430);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #7b4397, #dc2430); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  * {
    color: white;
  }
`;

export default class Landing extends Component {
  render() {
    return (
      <GradientSection className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <div className=" columns is-gapless">
                <div className="column">
                  <h2 className="subtitle is-2">
                    Connect, organise teams and raise funds transparently
                  </h2>
                  <h1 className="title is-1">
                    do<b>Good.</b>
                  </h1>
                  <p>
                    doGood is a Charity Social Network built on top of STEEM blockchain which pays doGooders for organizing, volunteering and voting for charitable actions
                  </p>
                </div>
                <div className="column">

                </div>
              </div>
          </div>
        </div>
      </GradientSection>
    );
  }
}