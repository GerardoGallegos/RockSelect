# RockSelect
Fancy and simple Select option component in react.js

![alt tag](https://cloud.githubusercontent.com/assets/9009074/14406640/ebc09c40-fe72-11e5-8779-6367af2a5d68.png)

## Usage
### Basic use

You can pass a simple list of string and specify the function that will trigger in every click on the options

```javascript
// Import dependencies 
import React from 'react'
import { render } from 'react-dom';

// Import RockSelect
import RockSelect from './components/RockSelect'

let foo = ()=>{
  alert('FOO')
}

render(
  <div>
    <RockSelect options={['One', 'Two', 'three']} generalClick={foo} iconClass="icon-code" />
  </div>, document.getElementById('app')
)
```

### Object List items

Or you can pass a list of Objects with the configuration
```
const OPTIONS = [
  {
    value : 'Option 1',
    click : theAction
  }
]

```

### Full Example

```javascript
// Import dependencies 
import React from 'react'
import { render } from 'react-dom';

// Import RockSelect
import RockSelect from './components/RockSelect'

let foo = ()=>{
  alert('FOO')
}

let bar = ()=>{
  alert('BAR')
}

let baz = ()=>{
  alert('BAZ')
}

const OPTIONS = [
     { 
        value : 'Option 1',
        click : foo
     },
     { 
        value : 'Option 2',
        click : bar
     },
     { 
        value : 'Option3',
        click : baz
     }
]

render(
  <div>
    <RockSelect options={OPTIONS} iconClass="icon-code" />
  </div>, document.getElementById('app')
)
```


## API
### Select props

name | description | type | default 
------------ | ---- | ------------- | --------------
options | List of options items | Array | [ ] 
defaultValue | Default Select option | String | first Option in the list 
generalClick | This method is triggered, each onClick in any options | Function(value) | -
iconClass | Class applied to icon via font icon or background image | String| ' '

## Development

```
npm install
npm start
```
http://localhost:8080/webpack-dev-server/
