import React, { Component } from 'react';

import './Help.css';

import { Tooltip, TooltipContent } from 'reactstrap';

class Help extends Component {
  render() {
    return (
      <Tooltip target="TooltipExample">
        foo
      </Tooltip>
    );
  }
}

export default Help;
