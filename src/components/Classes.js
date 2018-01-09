import React, { Component } from 'react';

import './Classes.css';

import Class from './Class';

class Classes extends Component {
  render() {
    const classes = this.props.names.map((name) =>
      <Class name={name} />
    );

    return (
      <div className="classes">
        <ul className="list-group list-group-flush">
          {classes}
        </ul>
      </div>   
    );
  }
}

export default Classes;
