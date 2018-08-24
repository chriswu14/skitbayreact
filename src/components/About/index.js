import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../sharedComponents/RectangleGradient";
import BodyImage from "../../images/skitbay_about.png";
import SectionHeading from "../sharedComponents/SectionHeading";
import DescriptionText from "../sharedComponents/DescriptionText";
import BuySellClean from "../../images/buysell_clean.png";

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
                                    Discover the first marketplace without
                                    barriers of entry or limits of borders. On
                                    Skitbay, everyone speaks the same language,
                                    cryptocurrencies.
                                </DescriptionText>
                                <RectangleGradient />
                                <div className="columns is-desktop">
                                    <div className="column is-10">
                                        <DescriptionSubText>
                                            <p>
                                                With Skitbay, if you are a
                                                cryptocurrency holder there is
                                                no need to exchange your coins
                                                for fiat money in order to make
                                                a purchase. Our web and
                                                smartphone application gives
                                                users all the tools necessary to
                                                buy, sell and exchange within
                                                the new economy. Flawlessly
                                                integrated and user-friendly the
                                                Skitbay app fuses marketplace,
                                                web wallet and cryptocurrency
                                                payment gateway all in one
                                                platform.
                                            </p>
                                            <BuySellImage />
                                            <p>
                                                Skitbay integrates a social
                                                reward technology which
                                                introduces real financial
                                                incentives to every interactions
                                                in the community. Users get
                                                rewarded with the $SKT token for
                                                rating products that they
                                                bought, which they can then
                                                spend to buy products or
                                                services on the platform.
                                            </p>
                                            <p>
                                                The native Skitpay payment
                                                gateway will allow transactions
                                                to be settled using all verified
                                                cryptocurrencies in a totally
                                                safe and easy to use
                                                environment. At term, Skitpay
                                                will function as a standalone
                                                app and aims to become the go-to
                                                cryptocurrency mobile payment
                                                platform worldwide.
                                            </p>
                                        </DescriptionSubText>

                                        <WhitePaperSection>
                                            <DescriptionText>
                                                Want to know more about Skitbay?
                                            </DescriptionText>
                                            <DescriptionSubText>
                                                Our whitepaper has all the
                                                information you need to know.
                                            </DescriptionSubText>
                                            <WhitePaperButton link="https://s3.amazonaws.com/skitbay-app/Skitbay_whitepaper_beta_1.0.pdf">
                                                WHITEPAPER
                                            </WhitePaperButton>
                                        </WhitePaperSection>
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
    className: "hero",
    id: "about"
})`
    background: #ffffff;
    position: relative;
`;

const Background = styled.div.attrs({})`
    width: 100%;
    height: 700px;
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
        z-index: 0;
    }
`;

const DescriptionSubText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.5rem;
    color: #544c63;

    p {
        margin-top: 1rem;
    }
`;

const WhitePaperSection = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

const WhitePaperButton = styled.a.attrs({
    className: "button is-rounded is-info",
    target: props => (props.link ? "_blank" : undefined),
    href: props => (props.link ? props.link : undefined)
})`
    margin-top: 1rem;
    background-image: linear-gradient(322deg, #29e0ba, #2387ac 5%, #133c6d);
    font-size: 0.9rem;
    font-weight: bold;
    &&& {
        padding: 1.5rem 2rem;
        letter-spacing: 0.08rem;
    }
`;

const BuySellImage = styled.div.attrs({})`
    height: 8rem;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${BuySellClean});
    background-size: contain;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 769px) {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
`;
