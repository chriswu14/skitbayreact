import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../RectangleGradient";
import HeartImgClean from "../../images/heart-img-clean.svg";
import SectionHeading from "../SectionHeading";

export default class RoadMap extends Component {
    constructor(props) {
        super(props);
        this.roadmap = [
            {
                heading: "Q2 2018",
                subheading: "Whitepaper published",
                description: `It rewards users with digital Karma which are tradable tokens. 
                    doGood rewards its community of passionate and committed volunteers who make a difference in their communities. `,
                className: "active level level-right"
            },
            {
                heading: "Q3 2018",
                subheading: "Closed Alpha Testing",
                description: `It rewards users with digital Karma which are tradable tokens. 
                    doGood rewards its community of passionate and committed volunteers who make a difference in their communities. `,
                className: "level level-left"
            },
            {
                heading: "Q4 2018",
                subheading: "Public Beta testing",
                description: `It rewards users with digital Karma which are tradable tokens. 
                    doGood rewards its community of passionate and committed volunteers who make a difference in their communities. `,
                className: "level level-right"
            },
            {
                heading: "Q1 2019",
                subheading: "Testnet active",
                description: `It rewards users with digital Karma which are tradable tokens. 
                    doGood rewards its community of passionate and committed volunteers who make a difference in their communities. `,
                className: "level level-left"
            },
            {
                heading: "Q2 2019",
                subheading: "Main net live",
                description: `It rewards users with digital Karma which are tradable tokens. 
                    doGood rewards its community of passionate and committed volunteers who make a difference in their communities. `,
                className: "level level-right"
            }
        ];
    }

    renderRoadmap() {
        return this.roadmap.map(item => (
            <Box className={item.className}>
                <div className="box">
                    <div className="heading">{item.heading}</div>
                    <div className="subheading">{item.subheading}</div>
                    <div className="description">{item.description}</div>
                </div>
            </Box>
        ));
    }

    render() {
        return (
            <ContainerSection>
                <div className="level level-right">
                    <SectionHeading>roadmap</SectionHeading>
                </div>

                <ContainerBody>
                    <div className="container">
                        <div className="columns is-gapless is-desktop">
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
                        <RoadMapBody>
                            <LogoComponent />
                            {this.renderRoadmap()}
                        </RoadMapBody>

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
        background-color: white;
        max-height: 20rem;
    }

    @media (min-width: 769px) {
        padding-top: 4rem;
        &:after {
            max-height: 20rem;
        }
    }
    @media (min-width: 1088px) {
        &:after {
            max-height: 100%;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 35rem, 0 0);
            clip-path: polygon(0 0, 100% 0, 100% 35rem, 0 0);
        }
    }
`;

const ContainerSection = styled.section.attrs({
    className: "hero"
})`
    background: #ffffff;
`;

const RoadMapBody = styled.div.attrs({})`
    margin-top: 7rem;
`;

const LogoComponent = styled.div.attrs({})`
    @media (min-width: 769px) {
        height: 5.5rem;
        background: url(${HeartImgClean});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 28%;
        margin-bottom: 2rem;
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

const Box = styled.div.attrs({})`
    .box {
        min-height: 19rem;
        padding: 2.5rem;
        background-color: rgba(200, 52, 120, 0.3);
        box-shadow: 0 2px 183px 0 rgba(147, 147, 147, 0.15);
        border-radius: 0rem;
        letter-spacing: 0.3px;
        font-family: Gilroy;
        font-style: normal;
        font-stretch: normal;
        color: #ffffff;
    }

    @media (min-width: 769px) {
        .box {
            max-width: 36rem;
        }
    }

    &.active .box {
        background-color: #ffffff;
        box-shadow: 0 2px 183px 0 rgba(147, 147, 147, 0.2);
        color: #544c63;
    }

    .heading {
        opacity: 0.6;
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
        margin-bottom: 1rem;
    }

    &.active .heading {
        opacity: 1;
        color: #c31741;
    }

    .subheading {
        opacity: 0.8;
        font-size: 24px;
        font-weight: 900;
        line-height: 1.67;
        margin-bottom: 0.6rem;
    }

    &.active .subheading {
        opacity: 1;
    }

    .description {
        opacity: 0.6;
        font-family: SFProText, Gilroy;
        font-size: 18px;
        font-weight: 300;
        line-height: 1.67;
    }

    &.active .description {
        opacity: 1;
    }
`;
