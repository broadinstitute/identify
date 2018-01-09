import React, { Component } from 'react';

import './Class.css';

class Class extends Component {
  render() {
    return (
      <li className="class list-group-item">
        <div className="form-row">
          <div class="col-sm-1">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value="" />
            </label>
          </div>

          <div className="col">
            {this.props.name}
          </div>

          <div className="col-sm-2">
            &nbsp;
          </div>

          <div className="col-sm-2">
            &nbsp;
          </div>
        </div>
      </li>
    );
  }
}

export default Class;
