import React, { Component } from "react";
import styled from "styled-components";

import RectangleGradient from "../RectangleGradient";

export default class About extends Component {
    render() {
        return (
            <ContainerSection className="hero is-large">
                <div className="bg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon fill="#deecff" points="0,100 100,0 100,100" />
                    </svg>
                </div>
                <div className="level">
                    <AboutHeading>about</AboutHeading>
                </div>

                <div className="hero-body">
                    <div className="container">
                        <div className=" columns is-gapless">
                            <div className="column">
                                <DescriptionText>
                                    doGood is a Charity Social Network built on
                                    top of STEEM blockchain which pays doGooders
                                    for organizing, volunteering and voting for
                                    charitable actions.
                                </DescriptionText>
                                <RectangleGradient />
                                <DescriptionSubText>
                                    <p>
                                        It rewards users with digital Karma
                                        which are tradable tokens. doGood
                                        rewards its community of passionate and
                                        committed volunteers who make a
                                        difference in their communities. By
                                        rewarding volunteers and charity, doGood
                                        recognize their commitment and effort to
                                        aid a cause.
                                    </p>
                                    <p>
                                        Using blockchain technology could also
                                        change the way people contribute to
                                        charities. Since blockchain technology
                                        eliminates the need for third parties
                                        and makes transactions fully
                                        transparent, it could deliver
                                        significant benefits in improving trust.
                                    </p>
                                    <p>
                                        Being a Social Network, doGood is
                                        designed to be a place where people can
                                        share, discuss about charities and
                                        social issues they care about, connect
                                        with like-minded people and non-profits,
                                        and take actions by voting, commenting,
                                        creating events, signing petitions,
                                        raising money or making donations in a
                                        fully transparent platform.
                                    </p>
                                </DescriptionSubText>
                            </div>
                            <div className="column" />
                        </div>
                    </div>
                </div>
            </ContainerSection>
        );
    }
}

const BulmaHero = ({ className, children }) => (
    <section className={className}>{children}</section>
);
const ContainerSection = styled(BulmaHero)`
    background: #ffffff;

    * {
        color: #544c63;
    }

    .bg {
        width: 100%;
        opacity: 0.29;
        margin-top: 158px;
        position: absolute;
        background-color: #deecff;
        transform: skewY(16.5deg);
        transform-origin: top left;
    }

    .bg svg {
        width: 100%;
        height: 1000px;
    }
`;

const AboutHeading = styled.h2.attrs({
    className: "title is-2"
})`
    &&& {
        font-family: Gilroy;
        font-size: 282px;
        font-weight: 900;
        font-style: normal;
        line-height: 1;
        letter-spacing: 10.6px;
        color: #f1f1f1;
        z-index: 2;
        margin-left: 70px;
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
        line-height: 1.67;
        letter-spacing: 0.3px;
        color: #544c63;
    }
`;

const DescriptionSubText = styled.div.attrs({})`
    &&& {
        font-size: 18px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: 0.3px;
        color: #544c63;
    }

    p {
        margin-top: 20px;
    }
`;
