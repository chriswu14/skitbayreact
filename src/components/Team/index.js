import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../sharedComponents/RectangleGradient";
import SectionHeading from "../sharedComponents/SectionHeading";
import DescriptionText from "../sharedComponents/DescriptionText";

import AndrasHajgatoImg from "../../images/team/AndrasHajgato.jpg";
import CalebJiuImg from "../../images/team/CalebJiu.jpg";
import CecileDingImg from "../../images/team/CecileDing.jpg";
import ChrisWuImg from "../../images/team/ChrisWu.jpg";
import DanniLiuImg from "../../images/team/DanniLiu.jpg";
import EkitchoKeoImg from "../../images/team/EkitchoKeo.jpg";
import TianHaoLiuImg from "../../images/team/TianHaoLiu.jpg";
import VictorDoanImg from "../../images/team/VictorDoan.jpg";
import TonyXuImg from "../../images/team/TonyXu.jpg";
import ChristopherKhimImg from "../../images/team/ChristopherKhim.jpg";
import CaseyCarterImg from "../../images/team/CaseyCarter.jpg";
import SosoZouImg from "../../images/team/SosoZou.jpg";

export default class Landing extends Component {
    constructor() {
        super();
        this.state = {
            teamMembers: [
                {
                    imgUrl: EkitchoKeoImg,
                    fullName: "Ekitcho Keo",
                    teamPosition: "Advisor"
                },
                {
                    imgUrl: TianHaoLiuImg, 
                    fullName: "Tian Hao Liu",
                    teamPosition: "Advisor"
                },
                {
                    imgUrl: VictorDoanImg,
                    fullName: "Victor Doan",
                    teamPosition: "Founder and CEO"
                },
                {
                    imgUrl: DanniLiuImg,
                    fullName: "Danni Liu",
                    teamPosition: "Co-founder and COO"
                },
                {
                    imgUrl: ChrisWuImg,
                    fullName: "Chris Wu",
                    teamPosition: "Co-founder and CTO"
                },
                {
                    imgUrl: AndrasHajgatoImg,
                    fullName: "Andras Hajgato",
                    teamPosition: "Co-founder and Designer"
                },
                {
                    imgUrl: TonyXuImg,
                    fullName: "Tony Xu",
                    teamPosition: "Co-founder and Developer"
                },
                {
                    imgUrl: CalebJiuImg,
                    fullName: "Caleb Jiu",
                    teamPosition: "Assistant Director"
                },
                {
                    imgUrl: CecileDingImg,
                    fullName: "Cecile Ding",
                    teamPosition: "Marketplace Analyst"
                },
                {
                  imgUrl: SosoZouImg,
                  fullName: "Soso Zou",
                  teamPosition: "Marketplace Analyst"
                },
                {
                  imgUrl: CaseyCarterImg,
                  fullName: "Casey Carter",
                  teamPosition: "Developer and Technical Writer"
                },
                {
                  imgUrl: ChristopherKhimImg,
                  fullName: "Christopher Khim",
                  teamPosition: "Content Editor"
                }              
            ]
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
                                    With decades of experience our team is
                                    comprised of people from around the world.
                                    All focused on one goal, never settle.
                                </DescriptionText>
                                <RectangleGradient />
                            </div>
                            <div className="column" />
                        </div>
                        <div className="columns is-multiline is-mobile is-gapless">
                            {this.state.teamMembers.map((value, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
                                    >
                                        <TeamCard {...value} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </HeroBody>
            </Hero>
        );
    }
}

const Hero = styled.section.attrs({
    className: "hero",
    id: "team"
})``;

const HeroBody = styled.div.attrs({
    className: "hero-body"
})`
    @media (min-width: 769px) {
        padding-top: 4rem;
    }
`;

const TeamCard = props => {
    return (
        <TeamCardContainer>
            <figure className="image is-inline-block is-128x128">
                <img className="is-rounded" src={props.imgUrl} />
            </figure>
            <TeamCardName>{props.fullName}</TeamCardName>
            <TeamCardPosition>{props.teamPosition}</TeamCardPosition>
        </TeamCardContainer>
    );
};

const TeamCardContainer = styled.div.attrs({
    className: "has-text-centered"
})`
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

const TeamCardName = styled.div.attrs({
    className: "is-uppercase"
})`
    font-size: 1.25rem;
    color: #154574;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 0.3rem;
    letter-spacing: 0.05rem;
`;

const TeamCardPosition = styled.div`
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    color: #238fad;
    font-size: 1rem;
    letter-spacing: 0.06rem;
`;
