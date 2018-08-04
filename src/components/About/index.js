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
                                    Tired of giving up your content, data and time on social medias and seeing little to no returns for your contribution ? The solution is here.
                                </DescriptionText>
                                <RectangleGradient />
                                <div className="columns is-desktop">
                                    <div className="column is-10">
                                        <DescriptionSubText>
                                            <p>
                                                Skitbay uses blockchain technology to create a marketplace that better integrates the social experience of offline shopping to online shopping. The social marketplace connects crypto- currencies users directly to sellers, eliminating intermediaries as well as empowering individuals to act as free agents and capture profit that is rightfully their own.
                                            </p>
                                            <p>
                                                The revolutionary Steem SMT technology on top of which Skitbay is built turns « likes » into currency. By rewarding users for their contribution Skitbay aims to become a self serving ecosystem where individuals promote the brands and products they like and get automatically, and transparently rewarded for it while brands and shop owners profit from increased exposition and low cost advertisement.
                                            </p>
                                            <p>
                                                The native Skitpay payment gateway will allow transactions to be settled using all verified cryptocurrencies in a totally safe and easy to use way. At term, Skitpay will function as a standalone app and aims to become the go-to cryptocurrency mobile payment platform worldwide.
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
    className: 'hero',
    id: 'about'
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