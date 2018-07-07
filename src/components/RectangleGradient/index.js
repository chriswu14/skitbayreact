import React, { Component } from "react";
import styled from "styled-components";

export default class RectangleGradient extends Component {
    render() {
        return <RectangleGradientSpan />;
    }
}

const RectangleGradientSpan = styled.div`
    &&& {
        width: 260px;
        height: 4px;
        background: #d91839; /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #d91839, #4f136d);
        background-image: linear-gradient(to left, #d91839, #4f136d);
    }
`;
