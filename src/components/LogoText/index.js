import React, { Component } from 'react';
import styled from 'styled-components';


const LogoTextSpan = styled.span`
  &&& {
    font-size: ${props => props.fontSize};
    font-weight: 200;
    strong {
      font-weight: 900;
    }
  }
`;

export default class LogoText extends Component {
  render() {
    return (
      <LogoTextSpan fontSize={this.props.fontSize}>
      skit<strong>bay</strong>
      </LogoTextSpan>
    );
  }
}