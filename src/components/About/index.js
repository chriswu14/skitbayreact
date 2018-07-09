import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../RectangleGradient";
import PhoneMockImg from "../../images/phone-mock.png";
import SectionHeading from "../SectionHeading";

export default class About extends Component {
    render() {
        return (
            <ContainerSection>
                <Background />
                <Foreground />
                <div className="level">
                    <SectionHeading>about</SectionHeading>
                </div>

                <ContainerBody>
                    <div className="container">
                        <div className="columns is-gapless is-desktop">
                            <div className="column">
                                <DescriptionText>
                                    doGood is a Charity Social Network built on
                                    top of STEEM blockchain which pays doGooders
                                    for organizing, volunteering and voting for
                                    charitable actions.
                                </DescriptionText>
                                <RectangleGradient />
                                <div className="columns is-desktop">
                                    <div className="column is-10">
                                        <DescriptionSubText>
                                            <p>
                                                It rewards users with digital
                                                Karma which are tradable tokens.
                                                doGood rewards its community of
                                                passionate and committed
                                                volunteers who make a difference
                                                in their communities. By
                                                rewarding volunteers and
                                                charity, doGood recognize their
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
                                                Being a Social Network, doGood
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
                            <div className="column" />
                        </div>
                    </div>
                </ContainerBody>
            </ContainerSection>
        );
    }
}

const BulmaHero = ({ className, children }) => (
    <section className={className}>{children}</section>
);

const ContainerBody = styled.div.attrs({ className: "hero-body" })`
    padding-top: 0px;
    @media (min-width: 769px) {
        padding-top: 88px;
    }
`;

const ContainerSection = styled.section.attrs({
    className: "hero"
})`
    background: #ffffff;
`;

const Background = styled.div.attrs({})`
    width: 100%;
    height: 700px;
    opacity: 0.29;
    margin-top: 158px;
    position: absolute;
    background-color: #deecff;
    transform: skewY(16.5deg);
    transform-origin: top left;
`;

const Foreground = styled.div.attrs({})`
    @media (min-width: 1088px) {
        width: 100%;
        height: 84rem;
        margin-top: 10rem;
        position: absolute;
        background: url(${PhoneMockImg});
        background-repeat: no-repeat;
        background-position: 105% 50%;
        background-size: 55%;
    }
`;

const DescriptionText = styled.div.attrs({
    className: "subtitle is-2"
})`
    &&& {
        font-family: Gilroy;
        font-size: 24px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0.3px;
        color: #544c63;
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
