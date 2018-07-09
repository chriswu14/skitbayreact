import React, { Component } from "react";
import styled from "styled-components";

export default class SectionHeading extends Component {
    render() {
        return <SectionHeadingText>{this.props.children}</SectionHeadingText>;
    }
}

const SectionHeadingText = styled.h2.attrs({})`
    font-family: Gilroy;
    font-size: 82px;
    font-weight: 900;
    font-style: normal;
    line-height: 1;
    letter-spacing: 10.6px;
    color: #f1f1f1;
    z-index: 2;
    margin-left: 30px;

    margin-top: 28px;

    @media (min-width: 769px) {
        font-size: 160px;
        margin-left: 30px;
    }

    @media (min-width: 1088px) {
        font-size: 282px;
        margin-left: 70px;
    }
`;
