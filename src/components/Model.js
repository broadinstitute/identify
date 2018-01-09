import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

import { 
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import './Model.css';

import Classes from './Classes';

class Model extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    
    this.state = {
      "classes": props.names["Cell nucleus"].classes,
      "name": props.names["Cell nucleus"]
    }
  }

  onChange(event) {
    this.setState({
      classes: this.props.names[event.target.value].classes,
      name: event.target.value
    });
  }

  render() {
    const options = Object.keys(this.props.names).map((name, index) =>
      <option key={index} value={name}>{name}</option>
    );

    return (
      <div className="card card-profile">
        <div className="card-body">
          <label htmlFor="classifier">Classifier</label>
          
          <span className="icon icon-help-with-circle float-right"></span>

          <Input id="model" name="select" type="select" value={this.value} onChange={this.onChange}>
            {options}
          </Input>
        </div>

        <Classes names={this.state.classes} />
      </div>
    );
  }
}

export default Model;
