// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    var paraOne = React.createElement('p', {}, 'Two grannies having the time of their life!');
    var paraTwo = React.createElement('p', {}, 'Passangers:');
    var ul = React.createElement('ul', {},
      [
        React.createElement('li', {}, 'Anges'),
        React.createElement('li', {}, 'Muriel')
      ]
    );
    var older = React.createElement('div', {className: 'oldercoaster'}, [paraOne, paraTwo, ul]);
  }
};

export class InFrontOfYou extends React.Component {
  render() {
    React.createElement();
  }
};
export class ButcherShop extends React.Component {
  render() {
    React.createElement();
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
