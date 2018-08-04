import React, { Component } from "react";
import styled from "styled-components";

export default class SectionHeading extends Component {
    render() {
        return <SectionHeadingText>{this.props.children}</SectionHeadingText>;
    }
}

const SectionHeadingText = styled.h2.attrs({})`
    font-family: Gilroy;
    font-size: 4rem;
    line-height: 1;
    letter-spacing: 0.3rem;
    color: #ffffff;

    margin-top: 1.6rem;

    @media (min-width: 769px) {
        font-size: 6rem;
    }

    @media (min-width: 1088px) {
        font-size: 8rem;
    }
`;
