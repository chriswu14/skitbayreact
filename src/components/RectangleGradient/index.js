import React, { Component } from "react";
import styled from "styled-components";

export default class RectangleGradient extends Component {
    render() {
        return <RectangleGradientSpan />;
    }
}

const RectangleGradientSpan = styled.div`
    &&& {
        width: 16.25rem;
        height: 0.25rem;
        background-color: #ffbb62;
    }
`;
