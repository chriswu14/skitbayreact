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
                                <SectionHeading>About</SectionHeading>
                                <DescriptionText>
                                    Discover the first marketplace without barriers of entry or limits of borders. On Skitbay, everyone speaks the same language, cryptocurrencies.
                                </DescriptionText>
                                <RectangleGradient />
                                <div className="columns is-desktop">
                                    <div className="column is-10">
                                        <DescriptionSubText>
                                            <p>
                                                With Skitbay, if you are a cryptocurrency holder there is no need to exchange your coins for fiat money to make a purchase. Our smartphone application gives users all the tools necessary to buy, sell and exchange within the new economy. Flawlessly integrated and user-friendly the Skitbay app fuses marketplace, web wallet and cryptocurrency payment gateway all in one platform.
                                            </p>
                                            <p>
                                                Skitbay integrates a social reward technology which introduces real financial incentives to every interactions in the community. Users get rewarded with the $SKT token for rating products that they bought, which they can then spend to buy products or services on the platform.
                                            </p>
                                            <p>
                                                The native Skitpay payment gateway will allow transactions to be settled using all verified cryptocurrencies in a totally safe and easy to use environment. At term, Skitpay will function as a standalone app and aims to become the go-to cryptocurrency mobile payment platform worldwide.
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
        background-position: -25% 0;
        background-size: 58%;
        z-index: 1;
    }
`;

const DescriptionSubText = styled.div`
    {       
        font-size: 18px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 40px;    
        color: #544c63;
    }

    p {
        margin-top: 20px;
    }
`;