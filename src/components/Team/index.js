import React, { Component } from 'react';
import styled from 'styled-components';

import RectangleGradient from "../sharedComponents/RectangleGradient";
import SectionHeading from "../sharedComponents/SectionHeading";
import DescriptionText from "../sharedComponents/DescriptionText";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
        teamMembers: [
          {
            imgUrl: 'https://bulma.io/images/placeholders/128x128.png',
            fullName: 'Chris Wu',
            teamPosition: 'CTO'
          },
          {
            imgUrl: 'https://bulma.io/images/placeholders/128x128.png',
            fullName: 'Chris Wu',
            teamPosition: 'CTO'
          },
          {
            imgUrl: 'https://bulma.io/images/placeholders/128x128.png',
            fullName: 'Chris Wu',
            teamPosition: 'CTO'
          },
          {
            imgUrl: 'https://bulma.io/images/placeholders/128x128.png',
            fullName: 'Chris Wu',
            teamPosition: 'CTO'
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
                <SectionHeading>team</SectionHeading>
                <DescriptionText>
                  With decades of experience our team is comprised of people from around the world. All focused on one goal, building good Karma.
                </DescriptionText>
                <RectangleGradient />
              </div>
              <div className="column" />
            </div>
            <div className="columns is-multiline is-mobile is-gapless">
              {
                this.state.teamMembers.map((value, index) => {                           
                  return (
                    <div key={index} className="column is-half-mobile is-one-quarter-desktop">  
                      <TeamCard {...value}/>        
                    </div>
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
  id: 'team'
})`    
`;

const HeroBody = styled.div.attrs({
  className: 'hero-body'
})`
  @media (min-width: 769px) {
    padding-top: 4rem;
  }
`;

const TeamCard = props => {
  return (
    <TeamCardContainer>              
      <figure className="image is-inline-block is-128x128">
        <img className="is-rounded" src={props.imgUrl}/>
      </figure>                
      <TeamCardName>{props.fullName}</TeamCardName>
      <TeamCardPosition>{props.teamPosition}</TeamCardPosition>  
    </TeamCardContainer>  
  );
};

const TeamCardContainer = styled.div.attrs({
  className: 'has-text-centered'
})`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const TeamCardName = styled.div.attrs({
  className: 'is-uppercase'
})`
  font-size: 1.25rem;
  color: #154574;
  font-weight: bold;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
  letter-spacing: 0.05rem;
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


