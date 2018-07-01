import React, { Component } from 'react';

import TopNav from '../TopNav'
import Landing from '../Landing'

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <Landing/>
      </div>
    );
  }
}