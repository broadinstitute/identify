import React, { Component } from 'react';

class Caption extends Component {
  render() {
    return (
      <figcaption className="figure-caption">{this.props.text}</figcaption>
    );
  }
}

export default Caption;
