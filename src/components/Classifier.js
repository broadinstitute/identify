import React, { Component } from 'react';

class Classifier extends Component {
  render() {
    return (
      <div className="card card-profile">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="classifier">Classifier</label>
            
            <span className="icon icon-help-with-circle float-right"></span>

            <select className="form-control" id="classifier">
              <option>Cell nucleus</option>
              <option>Plasmodium vivax</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Classifier;
