import React from 'react'
import ReactDOM from 'react-dom';

// Components
import RockSelect from './components/RockSelect'
import { DATA, DATA2, DATA3 } from './components/optionsData'

// Test function
function foo(info) {
  alert('foo!')
  console.log(info)
}

ReactDOM.render(
  <div>
    <RockSelect options={DATA} defaultValue='Fruts' generalClick={foo} iconClass="icon-css" />
    <RockSelect options={DATA2} defaultValue='Speed' iconClass="icon-instructions" />
    <RockSelect options={DATA3} iconClass="icon-sound" />
    <RockSelect options={['One', 'Two', 'Three']} defaultValue='Default>' generalClick={foo} iconClass="icon-code" />
  </div>, document.getElementById('app')
)
