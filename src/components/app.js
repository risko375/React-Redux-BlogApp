import React, { Component } from 'react';

// App component purpose is to render child components dependent on route 
export default class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
