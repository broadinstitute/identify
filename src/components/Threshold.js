import React, { Component } from 'react';

import Help from './Help';

import { Tooltip, TooltipContent } from 'reactstrap';

class Threshold extends Component {
  render() {
    return (
      <div className="card card-profile">
        <div className="card-body">
          <label htmlFor="threshold">Threshold</label>

          <button
            className="btn btn-secondary icon icon-help-with-circle float-right" 
            data-placement="top" 
            title="Tooltip on top"
            id="TooltipExample"
            type="button">

          </button>

          <Tooltip target="TooltipExample">
            foo
          </Tooltip>

          <input className="form-control" id="threshold" type="range" list="tickmarks" step="10" />

          <datalist id="tickmarks">
            <option value="0" />
            <option value="10" />
            <option value="20" />
            <option value="30" />
            <option value="40" />
            <option value="50" />
            <option value="60" />
            <option value="70" />
            <option value="80" />
            <option value="90" />
            <option value="100" />
          </datalist>
          
          <small className="form-text text-muted">A threshold for deciding whether bounding boxes <em>or</em> masks overlap too much with respect to <a href="https://en.wikipedia.org/wiki/Jaccard_index">intersection-over-union</a> (IOU).</small>
        </div>
      </div>
    );
  }
}

export default Threshold;
