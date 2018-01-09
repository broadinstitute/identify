import React, { Component } from 'react';

import './App.css';

import Figure from 'components/Figure';
import Menu from 'components/Menu';
import image from "../images/1.png";

class App extends Component {
  render() {
    const models = {
      "Cell nucleus": {
        "classes": [
          "Cell nucleus"
        ]
      },
      "Plasmodium vivax": {
        "classes": [
          "Gametocyte",
          "Leukocyte",
          "Red blood cell",
          "Ring",
          "Schizont",
          "Trophozoite"
        ]
      }
    };
    
    return (
      <div className="container">
        <br />
        
        <div className="row">
          <div className="col-9">
            <Figure src={image} />
          </div>
          
          <div className="col-3">
            <Menu models={models} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
