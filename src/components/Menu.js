import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import {
  Form,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import Model from './Model';
import Threshold from './Threshold';

class Menu extends Component {
  render() {
    return (
      <Form>
        <Model names={this.props.models}/>
        
        <br />

        <Threshold />
      </Form>
    );
  }
}

export default Menu;
