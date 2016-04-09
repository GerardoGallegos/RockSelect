import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';

// Components
import RockSelect from './components/RockSelect'
import { DATA, DATA2, DATA3 } from './components/optionsData'

// Test function
function foo() {
  alert('foo!')
}

ReactDOM.render(
  <div>
    <RockSelect options={DATA} defaultValue='Frutas' generalClick={foo} iconClass="icon-css" />
    <RockSelect options={DATA2} defaultValue='Speed' iconClass="icon-instructions" />
    <RockSelect options={DATA3} iconClass="icon-sound" />
    <RockSelect options={['Uno', 'Dos', 'Tres']} iconClass="icon-code" />
  </div>, document.getElementById('app')
)
