import React, { Component } from 'react';

class BoundingBox extends Component {
    render() {
        return (
            <g>
                <rect 
                    fillOpacity="0.0" 
                    height={this.props.y2 - this.props.y1} 
                    stroke="#3097D1" 
                    strokeOpacity="1.0" 
                    width={this.props.x2 - this.props.x1} 
                    x={this.props.x1} 
                    y={this.props.y1} 
                />
            </g>
        );
    }
}

export default BoundingBox;
