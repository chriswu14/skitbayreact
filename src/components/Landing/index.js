import React, { Component } from 'react';
import styled from 'styled-components';

import LogoText from '../LogoText'
import BodyHeartImg from '../../images/heart-img.svg'

export default class Landing extends Component {
  render() {
    return (
      <Hero>
        <HeroBody>
          <div className="container">
            <div className=" columns is-gapless">
                <div className="column">
                  <TopSectionH2>
                    Connect, organise teams and raise funds transparently
                  </TopSectionH2>
                  <TopSectionH1>
                    <LogoText/>
                  </TopSectionH1>
                  <p>
                    doGood is a Charity Social Network built on top of STEEM blockchain which pays doGooders for organizing, volunteering and voting for charitable actions
                  </p>
                </div>
                <div className="column" >

                </div>
              </div>
          </div>
        </HeroBody>
      </Hero>
    );
  }
}

const Hero = styled.section.attrs({
  className: 'hero'
})`
  background: #d91839;  /* fallback for old browsers */
  background: -webkit-linear-gradient(301deg, #d91839, #4f136d);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(301deg, #d91839, #4f136d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  * {
    color: white;
  }

  @media(min-width: 769px) {
    .hero-body {
      padding-top: 14rem;
      padding-bottom: 14rem;
    }
  }
`;

const HeroBody = styled.div.attrs({
  className: 'hero-body'
})`
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media(min-width: 769px) {
    background: url(${BodyHeartImg});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 50%;
  }
`;

const TopSectionH1 = styled.h1.attrs({
  className: 'title is-1'
})`
  &&& {
    margin-bottom: 2.5rem;
    font-size: 5rem;
  }
`;

const TopSectionH2 = styled.h2.attrs({
  className: 'subtitle is-2'
})`
  &&& {
    margin-bottom: 3rem;
    font-weight: normal;
  }
`;
