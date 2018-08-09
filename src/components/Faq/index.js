import React, { Component } from 'react';
import styled from 'styled-components';

import RectangleGradient from "../sharedComponents/RectangleGradient";
import SectionHeading from "../sharedComponents/SectionHeading";
import DescriptionText from "../sharedComponents/DescriptionText";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      faqs: [
        {
          question: 'What is Skitbay?',
          anwser: 'Skitbay is the first marketplace that lets you shop through hundreds of products and settle the transaction using cryptocurrencies on a smartphone application. We call Skitbay a reward-based social marketplace because beyond simply shopping, Skitbay rewards users financially for contributing to the life and dynamism of the platform with actions like rating purchased products or recommending them to their friends.'
        },
        {
          question: 'What is Skitpay?',
          anwser: 'Skitpay is designed to be a user-friendly cryptocurrency mobile payment gateway which allows users to send cryptocurrencies to an email address or a phone number. In due course, Skitpay will function as standalone app working similarly to WeChat pay or Alipay.'
        },
        {
          question: 'What problems is Skitbay solving?',
          anwser: 'Skitbay is totally anonymous and open to everybody without restraints. The only thing you need to access Skitbay is a mobile phone, hence the platform has a huge potential to spread worldwide, especially in areas with unbanked populations which had previously little to no access to traditional online marketplaces.'
        },
        {
          question: 'What stage is Skitbay currently at? When can I try it?',
          anwser: 'Skitbay is currently in development stage. The public beta testing is planned for release on Q4 2018. In the meantime, please refer to our twitter for the latest updates.'
        },
        {
          question: 'What makes Skitbay unique?',
          anwser: 'Skitbay is an innovative solution that has the potential to empower millions of individuals anywhere in the world to sell their products and services on the global market as well as a remarkable chance for shop owners to start accepting cryptocurrency payments in a safe and user-friendly way. Our relentless goal to release the application fully functional without doing an ICO is a living proof that Skitbay is not another hyped blockchain project. We are here to add value to our users and the crypto-community.'
        }
      ],
    };
  }
  render() {
    return (
      <Hero>
        <HeroBody>
          <div className="container">
            <div className="columns is-gapless is-desktop">
              <div className="column">
                <SectionHeading>FAQ</SectionHeading>
                {/* <DescriptionText>
                  General questions and answers about Skitbay
                </DescriptionText> */}
                <RectangleGradient />
              </div>
              <div className="column" />
            </div>
            <div>
              {
                this.state.faqs.map((value, index) => {
                  return (
                    <FaqItem key={index} {...value}/>
                  );
                })
              }
            </div>
          </div>
        </HeroBody>
      </Hero>
    );
  }
}

const Hero = styled.section.attrs({
  className: 'hero',
  id: 'faq' 
})`  
    background: -webkit-linear-gradient(332deg, #29e0ba, #2387ac 34%, #133c6d);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(332deg, #29e0ba, #2387ac 34%, #133c6d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    * {
    color: white;
    }
`;

const HeroBody = styled.div.attrs({
  className: 'hero-body'
})`
  @media (min-width: 769px) {
    padding-top: 4rem;
  }
`;

const FaqItem = props => {
  return (
    <FaqItemContainer>
      <FaqItemTextContainer bold>
        <div>Q</div>
        <div>{props.question}</div>
      </FaqItemTextContainer>
      <FaqItemTextContainer>
        <div>A</div>
        <div>{props.anwser}</div>
      </FaqItemTextContainer>
    </FaqItemContainer>
  );
};

const FaqItemContainer = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  &:first-child {
    padding-top: 1rem;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const FaqItemTextContainer = styled.div.attrs({
  className: 'is-flex'
})`
  padding: 0.5rem 0 0.5rem 0;
  font-weight: ${props => props.bold ? '900': '300'}; 
  div:first-child {
    min-width: 3.5rem;
  }
`;

const TeamCardPosition = styled.div.attrs({
  className: 'is-capitalized'
})`
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  color: #238fad;  
  font-size: 1rem;
  letter-spacing: 0.06rem;
`;


