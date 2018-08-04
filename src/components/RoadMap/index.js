import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../sharedComponents/RectangleGradient";
import SectionHeading from "../sharedComponents/SectionHeading";
import DescriptionText from "../sharedComponents/DescriptionText";
import Logo from "../../images/logo.svg";

export default class RoadMap extends Component {
    constructor(props) {
        super(props);
        this.roadmap = [
            {
                heading: "September 2018",
                subheading: "Whitepaper published",
                description: `Detailed paper about Skitbay goals, technology, market strategy and more released.`,
                className: "active"
            },
            {
                heading: "Q3 2018",
                subheading: "Closed Alpha Testing",
                description: `Core product development over. Polishing of the functionalities and UI, token economics and bug testing.`,
                className: ""
            },
            {
                heading: "Q4 2018",
                subheading: "Open beta testing",
                description: `Fully functional application released to the public. Only a limited of shops available and not all cryptocurrencies supported for transactions.`,
                className: ""
            },
            {
                heading: "Q1 2019",
                subheading: "Development and expansion",
                description: `Skitpay payment gateway now supports most cryptocurrencies and more than 300 shops available on the marketplace.`,
                className: ""
            },
            {
                heading: "Q3/Q4 2019",
                subheading: "Mass adoption and Skitpay standalone",
                description: `The Skitbay social marketplace is fully functional and accessible worldwide, Skitpay becomes a standalone app for crypto-payments.`,
                className: ""
            }
        ];
    }

    renderRoadmap() {
        return this.roadmap.map((item, index) => (
            <Box key={index} className={item.className + " timeline-item"}>
                <div className="protrusion" />
                <div className="box">
                    <div
                        className={
                            item.className + " timeline-marker is-hidden-mobile"
                        }
                    />
                    <div className="timeline-content">
                        <div className="heading">{item.heading}</div>
                        <div className="subheading">{item.subheading}</div>
                        <div className="description">{item.description}</div>
                    </div>
                </div>
            </Box>
        ));
    }

    render() {
        return (
            <ContainerSection>
                <ContainerBody>
                    <div className="container">                                                                     
                        <div className="columns is-gapless is-desktop">
                            <div className="column">
                                <SectionHeading color="white">roadmap</SectionHeading> 
                                <DescriptionText color="white">
                                    Stage one of planning and development is
                                    currently underway. Expected timeline for
                                    beta testing is in the last quarter of 2018.
                                    Subscribe to our newsletter for further
                                    updates.
                                </DescriptionText>
                                <RectangleGradient />
                            </div>
                            <div className="column" />
                        </div>
                        <RoadMapBody>
                            <LogoComponent />
                            <div className="timeline-item active is-hidden-mobile" />
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
    width: 100%;
    transform: rotate(-360deg);
    background-image: linear-gradient(332deg, #29e0ba, #2387ac 34%, #133c6d);

    @media (min-width: 769px) {
        padding-top: 4rem;
    }
    @media (min-width: 1088px) {
    }
`;

const ContainerSection = styled.section.attrs({
    className: "hero",
    id: 'roadMap'
})`
    background: #ffffff;
`;

const RoadMapBody = styled.div.attrs({
    className: "timeline is-centered"
})`
    margin-top: 4rem;

    /* Override bulma styles for is-centered to make it work on mobile */
    &.timeline.is-centered .timeline-item:nth-of-type(2n)::before {
        right: auto;
    }
    &.timeline.is-centered .timeline-item {
        width: auto;
        margin-left: auto;
    }
    &.timeline.is-centered .timeline-item:nth-of-type(2n) {
        margin-right: auto;
    }
    &.timeline.is-centered .timeline-item:nth-of-type(2n) .timeline-content {
        padding: 1em 0 0 2em;
        text-align: left;
        align-items: flex-start;
    }

    @media (min-width: 769px) {
        /* Default bulma styles for is-centered */
        &.timeline.is-centered .timeline-item:nth-of-type(2n)::before {
            right: 0.1em;
        }
        &.timeline.is-centered .timeline-item {
            width: 50%;
            margin-left: 2em;
        }
        &.timeline.is-centered .timeline-item:nth-of-type(2n) {
            margin-right: 2em;
            margin-left: 0;
        }

        /* Custom styles */

        &.timeline.is-centered .timeline-item {
            padding-bottom: 0rem;
        }

        &.timeline.is-centered .timeline-item::before {
            width: 0.25rem;
            right: 0.25rem;
        }

        &.timeline.is-centered .timeline-item::before {
            background-color: rgb(255, 255, 255, 0.2);
        }

        &.timeline.is-centered .timeline-item:last-of-type::before {
            background-color: rgba(0, 0, 0, 0);
            background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0)
            );
        }

        &.timeline.is-centered .timeline-item.active::before {
            background-color: rgba(0, 0, 0, 0);
            background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0),
                #ffffff
            );
        }

        &.timeline.is-centered .timeline-item:nth-of-type(2n)::before {
            right: -0.25rem;
        }

        &.timeline.is-centered
            .timeline-item:nth-of-type(2n + 1)
            .timeline-marker {
            left: -0.78rem;
        }

        &.timeline.is-centered .timeline-item:nth-of-type(2n) .timeline-marker {
            right: -1.2rem;
        }

        &.timeline.is-centered .timeline-item:nth-of-type(2n) {
            display: flex;
            flex-direction: row-reverse;
        }

        &.timeline.is-centered .timeline-item .timeline-marker {
            top: calc(50% - 1rem);
            width: 2rem;
            height: 2rem;
            background-color: rgba(65, 134, 168, 1);
            border: solid 3px #ffffff;
        }

        &.timeline.is-centered .timeline-item .timeline-marker.active {
            background-color: #ffbb62;
            border: solid 3px #ffffff;
        }
    }
`;

const LogoComponent = styled.div.attrs({
    className: "timeline-header"
})`
    height: 5.5rem;
    background-repeat: no-repeat;
    background-image: url(${Logo});
    background-position: 50% 50%;
    margin-bottom: 2rem;
    background-size: 60%;

    @media (min-width: 769px) {
        background-size: auto;
    }
`;

const Box = styled.div.attrs({})`
    .box {
        min-height: 16rem;
        overflow: hidden;
        background-color: rgba(39, 98, 126, 0.1);
        background-blend-mode: overlay;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.2)
        );
        border-radius: 0rem;
        letter-spacing: 0.3px;
        font-family: Gilroy;
        font-style: normal;
        font-stretch: normal;
        color: #ffffff;
        box-shadow: none;
    }

    @media (min-width: 769px) {
        .box {
            max-width: 36rem;
        }
    }

    &.active .protrusion {
        background-color: #ffffff;
    }

    .protrusion {
        align-self: center;
        height: 0.15rem;
        width: 6rem;
        background-color: rgba(39, 98, 126, 0.1);
        background-blend-mode: overlay;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2)
        );
    }

    &.active .box {
        background-color: #ffffff;
        box-shadow: none;
        color: #154574;
    }

    .heading {
        opacity: 0.6;
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1;
        margin-bottom: 1rem;
    }

    &.active .heading {
        opacity: 1;
        color: #ffbb62;
    }

    .subheading {
        opacity: 0.8;
        font-size: 1.5rem;
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
        font-size: 1.125rem;
        font-weight: 300;
        line-height: 1.67;
    }

    &.active .description {
        opacity: 1;
        color: #544c63;
    }
`;
