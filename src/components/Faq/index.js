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
          anwser: 'Skitbay is a reward based social marketplace smartphone application that lets you shop online hundreds of products and settle the transaction using cryptocurrencies. We call Skitbay a reward based social marketplace because beyond simply shopping, the Skitbay app lets you share pictures of your purchases, recommend products to your friends, share your wishlists and be rewarded financially for your contribution to the life and dynamism of the platform.'
        },
        {
          question: 'What problems is Skitbay solving?',
          anwser: 'Skitbay is breaking up the old business model of social medias and advertisement companies by building an ecosystem in which revenues are more fairly distributed across all stakeholders. On Skitbay, every user has the occasion to earn money from it’s network. Skitbay could help build a special relationship between sellers and consumers where instead of being bombarded by unwanted advertisement, users promote products they like a get rewarded for it.'
        },
        {
          question: 'What stage is Skitbay currently at? When can I try it?',
          anwser: 'Skitbay is currently in development stage. The public beta testing is planned for release on Q4 2018. In the meantime please refer to our twitter for the latest updates.'
        },
        {
          question: 'What makes Skitbay unique?',
          anwser: 'Skitbay is an innovative solution that has the potential to empower thousands of people to generate a new source of income from their network and following as well as a remarkable chance for shop owner around the world to start accepting cryptocurrency payments in a safe and easy to use environment. The fact that we are committed to releasing the product fully functional without doing an ICO proves that Skitbay is not another hollow blockchain project, but really here to add value to it’s users and the cryptocurrencies community in general.'
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
                <SectionHeading>faq</SectionHeading>
                <DescriptionText>
                  General questions and answers about Skitbay
                </DescriptionText>
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


