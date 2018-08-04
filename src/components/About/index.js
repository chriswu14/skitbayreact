import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../sharedComponents/RectangleGradient";
import BodyImage from "../../images/skitbay_about.png";
import SectionHeading from "../sharedComponents/SectionHeading";
import DescriptionText from "../sharedComponents/DescriptionText";

export default class About extends Component {
    render() {
        return (
            <ContainerSection>
                <Background />
                <Foreground />
                <ContainerBody>
                    <div className="container">
                        <div className="columns is-gapless is-desktop">
                            <div className="column" />
                            <div className="column">
                                <SectionHeading>about</SectionHeading>
                                <DescriptionText>
                                    Skitbay is a Charity Social Network built on
                                    top of STEEM blockchain which pays
                                    Skitbayers for organizing, volunteering and
                                    voting for charitable actions.
                                </DescriptionText>
                                <RectangleGradient />
                                <div className="columns is-desktop">
                                    <div className="column is-10">
                                        <DescriptionSubText>
                                            <p>
                                                It rewards users with digital
                                                Karma which are tradable tokens.
                                                Skitbay rewards its community of
                                                passionate and committed
                                                volunteers who make a difference
                                                in their communities. By
                                                rewarding volunteers and
                                                charity, Skitbay recognize their
                                                commitment and effort to aid a
                                                cause.
                                            </p>
                                            <p>
                                                Using blockchain technology
                                                could also change the way people
                                                contribute to charities. Since
                                                blockchain technology eliminates
                                                the need for third parties and
                                                makes transactions fully
                                                transparent, it could deliver
                                                significant benefits in
                                                improving trust.
                                            </p>
                                            <p>
                                                Being a Social Network, Skitbay
                                                is designed to be a place where
                                                people can share, discuss about
                                                charities and social issues they
                                                care about, connect with
                                                like-minded people and
                                                non-profits, and take actions by
                                                voting, commenting, creating
                                                events, signing petitions,
                                                raising money or making
                                                donations in a fully transparent
                                                platform.
                                            </p>
                                        </DescriptionSubText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerBody>
            </ContainerSection>
        );
    }
}

const ContainerBody = styled.div.attrs({ className: "hero-body" })``;

const ContainerSection = styled.section.attrs({
    className: "hero"
})`
    background: #ffffff;
    position: relative;
`;

const Background = styled.div.attrs({})`
    width: 100%;
    height: 700px
    opacity: 0.29;
    margin-top: 11.1rem;
    position: absolute;
    background-color: #deecff;
    transform: skewY(16.5deg);
    transform-origin: top left;
`;

const Foreground = styled.div.attrs({})`
    @media (min-width: 1088px) {
        width: 100%;
        height: 100%;
        margin-top: 11.1rem;
        position: absolute;
        background: url(${BodyImage});
        background-repeat: no-repeat;
        background-position: -30% 0;
        background-size: 58%;
        z-index: 1;
    }
`;

const DescriptionSubText = styled.div.attrs({})`
    &&& {
        font-family: SFProText-Light, Gilroy;
        font-size: 18px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0.3px;
        color: #544c63;
    }

    p {
        margin-top: 20px;
    }
`;