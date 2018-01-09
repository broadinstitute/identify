import React, { Component } from 'react';

import image from "../images/1.png";

class Image extends Component {
  render() {
    return (
      <image href={this.props.src} x="0" y="0" style={{width: "100%"}} />
    );
  }
}

export default Image;
