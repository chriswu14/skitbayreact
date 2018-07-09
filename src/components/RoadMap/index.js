import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../RectangleGradient";
import BodyHeartImg from "../../images/heart-img.svg";
import SectionHeading from "../SectionHeading";

export default class RoadMap extends Component {
    render() {
        return (
            <ContainerSection>
                <div className="level level-right">
                    <SectionHeading>roadmap</SectionHeading>
                </div>

                <ContainerBody>
                    <div className="container">
                        <div className="columns is-gapless">
                            <div className="column" />
                            <div className="column">
                                <DescriptionText>
                                    Stage one of planning and development is
                                    currently underway. Expected timeline for
                                    beta testing is in the last quarter of 2018.
                                    Subscribe to our newsletter for further
                                    updates.
                                </DescriptionText>
                                <div className="level level-right">
                                    <RectangleGradient />
                                </div>

                                <DescriptionSubText>
                                    PRELIMINARY ROADMAP
                                </DescriptionSubText>
                            </div>
                        </div>
                        <div className="columns is-gapless is-desktop" />
                    </div>
                </ContainerBody>
            </ContainerSection>
        );
    }
}

const ContainerBody = styled.div.attrs({ className: "hero-body" })`
    padding-top: 0px;
    width: 100%;
    transform: rotate(-360deg);
    background-image: linear-gradient(327deg, #d91839, #4f136d);

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: -1;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 33rem, 0 0);
        clip-path: polygon(0 0, 100% 0, 100% 33rem, 0 0);
        background-color: white;
    }

    @media (min-width: 769px) {
        padding-top: 4rem;
    }
`;

const ContainerSection = styled.section.attrs({
    className: "hero"
})`
    background: #ffffff;
`;

const Background = styled.div.attrs({})`
    width: 100%;
    height: 700px
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
        height: 962px;
        margin-top: 158px;
        position: absolute;
        background: url(${BodyHeartImg});
        background-repeat: no-repeat;
        background-position: 100% 50%;
        background-size: 50%;
    }
`;

const DescriptionText = styled.div.attrs({
    className: ""
})`
    font-family: Gilroy;
    font-size: 24px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: 0.3px;
    text-align: right;
    color: #544c63;
    padding-bottom: 2.5rem;
`;

const DescriptionSubText = styled.div.attrs({})`
    font-family: SFProText, Gilroy;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 4.5px;
    color: #544c63;
    text-align: right;
    padding-top: 1rem;
`;
