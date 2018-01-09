import React, { Component } from 'react';

import BoundingBox from './BoundingBox';

class BoundingBoxes extends Component {
  render() {
    const boundingBoxes = this.props.objects.boxes.map((object, index) =>
    	<BoundingBox key={index} x1={object.x1} y1={object.y1} x2={object.x2} y2={object.y2} />
    );

    return boundingBoxes;
  }
}

export default BoundingBoxes;
