import React, { Component } from 'react';
import styled from 'styled-components';

import LogoText from '../LogoText'
import BodyHeartImg from '../../images/heart-img.svg'

export default class Landing extends Component {
  render() {
    return (
      <GradientSection className={`hero is-large ${this.props.className}`}>
        <HeartBackgroundDiv className={`hero-body ${this.props.className}`}>
          <div className="container">
            <div className=" columns is-gapless">
                <div className="column">
                  <h2 className="subtitle is-2" style={{marginBottom: '3rem', fontWeight: 'normal'}}>
                    Connect, organise teams and raise funds transparently
                  </h2>
                  <h1 className="title is-1" style={{marginBottom: '3rem', fontSize: '5rem'}}>
                    <LogoText/>
                  </h1>
                  <p>
                    doGood is a Charity Social Network built on top of STEEM blockchain which pays doGooders for organizing, volunteering and voting for charitable actions
                  </p>
                </div>
                <div className="column" >

                </div>
              </div>
          </div>
        </HeartBackgroundDiv>
      </GradientSection>
    );
  }
}

const GradientSection = styled.section`
  background: #d91839;  /* fallback for old browsers */
  background: -webkit-linear-gradient(301deg, #d91839, #4f136d);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(301deg, #d91839, #4f136d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  * {
    color: white;
  }
`;

const HeartBackgroundDiv = styled.div`
  @media(min-width: 769px) {
    background: url(${BodyHeartImg});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 50%;
  }
`;
