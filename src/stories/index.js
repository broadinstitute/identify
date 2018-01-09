import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'bootstrap/dist/css/bootstrap.css';

import 'application/dist/toolkit.css';
import image from "../images/1.png";

import App from '../containers/App';
import Class from '../components/Class';
import Classes from '../components/Classes';
import Classifier from '../components/Classifier';
import Figure from '../components/Figure';
import Menu from '../components/Menu';
import Model from '../components/Model';
import Threshold from '../components/Threshold';

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

const classes = [
  "Gametocyte",
  "Leukocyte",
  "Red blood cell",
  "Ring",
  "Schizont",
  "Trophozoite"
];

storiesOf('App', module)
  .add('default', () =>
    <App />
);

storiesOf('Class', module)
  .add('default', () =>
    <div className="container">
      <br />

      <div className="row">
        <div className="col-4">
          <Class name={"Gametocyte"} />
        </div>
      </div>
    </div>
);

storiesOf('Classes', module)
  .add('default', () =>
    <div className="container">
      <br />

      <div className="row">
        <div className="col-4">
          <Classes names={classes} />
        </div>
      </div>
    </div>
);

storiesOf('Classifier', module)
  .add('default', () =>
    <div className="container">
      <br />

      <div className="row">
        <div className="col-4">
          <Classifier />
        </div>
      </div>
    </div>
);

storiesOf('Figure', module)
  .add('default', () =>
    <div className="container">
      <br />

      <div className="row">
        <div className="col-8">
          <Figure src={image} />
        </div>
      </div>
    </div>
);

storiesOf('Menu', module)
  .add('default', () =>
    <div className="container">
      <br />

      <div className="row">
        <div className="col-4">
          <Menu models={models} />
        </div>
      </div>
    </div>
);

storiesOf('Model', module)
  .add('default', () =>
    <div className="container">
      <br />

      <div className="row">
        <div className="col-4">
          <Model names={models} />
        </div>
      </div>
    </div>
);

storiesOf('Threshold', module)
  .add('default', () =>
    <div className="container">
      <br />

      <div className="row">
        <div className="col-4">
          <Threshold />
        </div>
      </div>
    </div>
);
