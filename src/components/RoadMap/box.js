import React, { Component } from "react";
import styled from "styled-components";

export default class Box extends Component {
    render() {
        return <StyledBox>{this.props.children}</StyledBox>;
    }
}

const StyledBox = styled.div.attrs({
    className: `box`
})`
    max-width: 36rem;
    min-height: 19rem;
    padding: 2.5rem;
    background-color: rgba(200,52,120,0.3);
    box-shadow: 0 2px 183px 0 rgba(147, 147, 147, 0.15)
    box-shadow: 0 2px 183px 0 rgba(147, 147, 147, 0.15);
    border-radius: 0rem;
`;
