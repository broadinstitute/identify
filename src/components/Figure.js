import React, { Component } from 'react';

import response from "../data/response.json";

import Dropzone from 'react-dropzone'

import Caption from './Caption';
import Image from './Image';
import BoundingBoxes from './BoundingBoxes';

class Figure extends Component {
  constructor() {
    super()
    
    this.state = { 
      files: [

      ] 
    }
  }

  onDrop(files) {
    this.setState({
      files
    });

    // create JSON request
    // submit JSON request to Google Cloud ML
    // render the bounding boxes
  }

  render() {
    return (
      <figure className="figure" style={{width: "100%"}}>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)} style={{width: "100%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200">
              <Image src={(this.state.files.length > 0) ? this.state.files[0].preview : ""} />

              <BoundingBoxes objects={response} />
            </svg>
          </Dropzone>

          <Caption text="A caption for the above image." />
        </div>
      </figure>
    );
  }
}

export default Figure;
