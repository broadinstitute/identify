import React, { Component } from 'react';

import $ from 'jquery';

import 'application/dist/toolkit';

class Gallery extends Component {
  render() {
    $('.myGrid').imageGrid()

    return (
      <div data-grid="images">
        <img data-width="350" data-height="300" src="https://placehold.it/350x300/EEE04A/ffffff" />
        <img data-width="420" data-height="320" src="https://placehold.it/420x320/5cb85c/ffffff" />
        <img data-width="320" data-height="380" src="https://placehold.it/320x380/5bc0de/ffffff" />
        <img data-width="472" data-height="500" src="https://placehold.it/472x500/f0ad4e/ffffff" />
        <img data-width="540" data-height="360" src="https://placehold.it/540x360/FF3167/ffffff" />
      </div>
    );
  }
}

export default Gallery;
