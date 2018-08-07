import React, { Component } from 'react';
import styled from 'styled-components';


const LogoTextSpan = styled.span.attrs({
  className: props => props.badge ? 'badge is-badge-danger is-badge-small' : '',
  'data-badge': props => props.badge ? props.badge : ''
})
`
  &&& {
    font-size: ${props => props.fontSize};
    font-weight: 200;
    strong {
      font-weight: 900;
    }

    &.badge {
      padding-right: 6px;
      &:after {
        font-weight: 800;
      }
    }
  }
`;

export default class LogoText extends Component {
  render() {
    return (
      <LogoTextSpan fontSize={this.props.fontSize} badge={this.props.badge}>
      skit<strong>bay</strong>
      </LogoTextSpan>
    );
  }
}