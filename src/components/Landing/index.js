import React, { Component } from 'react';
import styled from 'styled-components';

import LogoText from '../sharedComponents/LogoText'
import BodyImage from '../../images/skitbay_intro.png'

export default class Landing extends Component {
  render() {
    return (
      <Hero>
        <HeroBody>
          <div className="container">
            <div className="columns is-gapless">
                <div className="column">
                  <TopSectionH2>
                    Shop thousands of products with cryptocurrencies
                  </TopSectionH2>
                  <TopSectionH1>
                    <LogoText/>
                  </TopSectionH1>
                  <p>
                    Skitbay is an online-marketplace built on top of STEEM blockchain with zero fees, guranteed quality, and rewards for both sellers and buyers.
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
  background: -webkit-linear-gradient(306deg, #29e0ba, #2387ac 34%, #133c6d);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(306deg, #29e0ba, #2387ac 34%, #133c6d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  * {
    color: white;
  }
`;

const HeroBody = styled.div.attrs({
  className: 'hero-body'
})`
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media(min-width: 769px) {
    background: url(${BodyImage});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: auto 85%;
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
