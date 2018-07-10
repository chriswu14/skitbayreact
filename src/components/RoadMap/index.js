import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../RectangleGradient";
import HeartImgClean from "../../images/heart-img-clean.svg";
import SectionHeading from "../SectionHeading";
import Box from "./box";

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
                        <RoadMapBody>
                            <LogoComponent />
                            <div class="level level-right">
                                <Box>
                                    <MainHeading>Q2 2018</MainHeading>
                                    <SubHeading>
                                        Whitepaper published
                                    </SubHeading>
                                    <BoxContent>
                                        It rewards users with digital Karma
                                        which are tradable tokens. doGood
                                        rewards its community of passionate and
                                        committed volunteers who make a
                                        difference in their communities.
                                    </BoxContent>
                                </Box>
                            </div>
                            <div class="level level-left">
                                <Box>
                                    <MainHeading>Q3 2018</MainHeading>
                                    <SubHeading>
                                        Closed Alpha testing
                                    </SubHeading>
                                    <BoxContent>
                                        It rewards users with digital Karma
                                        which are tradable tokens. doGood
                                        rewards its community of passionate and
                                        committed volunteers who make a
                                        difference in their communities.
                                    </BoxContent>
                                </Box>
                            </div>
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

const RoadMapBody = styled.div.attrs({})`
    margin-top: 10rem;
`;

const LogoComponent = styled.div.attrs({})`
    height: 5.5rem;
    background: url(${HeartImgClean});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 28%;
    margin-bottom: 2rem;
`;

const MainHeading = styled.div.attrs({})`
    opacity: 0.6;
    font-family: Gilroy;
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 0.3px;
    color: #ffffff;
    margin-bottom: 1rem;
`;

const SubHeading = styled.div.attrs({})`
    opacity: 0.8;
    font-family: Gilroy;
    font-size: 24px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: 0.3px;
    color: #ffffff;
    margin-bottom: 0.6rem;
`;

const BoxContent = styled.div.attrs({})`
    opacity: 0.6;
    font-family: SFProText, Gilroy;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: 0.3px;
    color: #ffffff;
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
