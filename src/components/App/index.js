import React, { Component } from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import bannerImg from '../../images/banner.jpg';

const ContentWrapper = styled.div`
  background: url(${bannerImg});
  height: 500px;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <i>doGood</i>
            </Typography>
          </Toolbar>
        </AppBar>
        <ContentWrapper>
        </ContentWrapper>
      </div>
    );
  }
}