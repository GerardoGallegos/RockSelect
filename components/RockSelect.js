import React, { Component, PropTypes } from 'react'

const CLASS_ALIAS = 'RockMenu'

export default class RockSelect extends Component {
  constructor(props) {
    super(props)

    const METHODS = [
      'toggleOptions',
      'onClickOption',
      'initOption'
    ]

    METHODS.forEach(method => {
      this[method] = this[method].bind(this);
    })

  }

  toggleOptions(){
    if(this.optionsVisible.display === 'none') {
      this.optionsVisible = {
        display : 'block'
      }
      this.classes.option = `${CLASS_ALIAS}__option ${CLASS_ALIAS}__option-animaIn`
      this.classes.selected = `${CLASS_ALIAS}__selected-active`
    }
    else {
      this.optionsVisible = {
        display : 'none'
      }
      this.classes.selected = `${CLASS_ALIAS}__selected`
    }
    this.forceUpdate()
  }

  hideOptions() {
    this.optionsVisible = {
      display: 'none'
    }
    this.classes.selected = `${CLASS_ALIAS}__selected`
    this.forceUpdate()
  }


  componentWillMount() {
    this.initOption()
    this.classes = {
      selected : `${CLASS_ALIAS}__selected`,
      option : `${CLASS_ALIAS}__option ${CLASS_ALIAS}__option-animaIn`
    }
    this.optionsVisible = {
      display : 'none'
    }
  }

  initOption(){
    if(this.props.defaultValue) {
      this.optionSelected = this.props.defaultValue
    }
    else if(typeof this.props.options[0] === 'string') {
      this.optionSelected = this.props.options[0]
    }
    else if(typeof this.props.options[0] === 'object') {
      this.optionSelected = this.props.options[0].value
    }
  }

  onClickOption(event) {
    this.optionSelected = event.target.textContent
    this.classes.option = `${CLASS_ALIAS}__option`
    this.classes.selected = `${CLASS_ALIAS}__selected`

    if(typeof this.props.options[0] === 'string') {
      if(this.props.generalClick) {
        this.props.generalClick(event.target.textContent)
      }
    }
    else if(typeof this.props.options[0] === 'object') {
      this.props.options.map((option) => {
        if (option.value === event.target.textContent) {
          option.click(event.target.textContent)
        }
      })
    }

    this.hideOptions()
    this.forceUpdate()
  }

  renderOptions(){
    if(typeof this.props.options[0] === 'string') {
      return (
        this.props.options.map((option)=>{
          return (
            <div key={option} className={this.classes.option} >
              <div  onClick={this.onClickOption} className={`${CLASS_ALIAS}__option__name`}>{option}</div>
            </div>
          )
        })
      )
    }

    else if(typeof this.props.options[0] === 'object') {
      return (
        this.props.options.map((option)=>{
          return (
            <div key={option.value} className={this.classes.option} >
              <div  onClick={this.onClickOption} className={`${CLASS_ALIAS}__option__name`}>{option.value}</div>
            </div>
          )
        })
      )
    }
  }


  render(){
    const ICON = this.props.iconClass ? `${CLASS_ALIAS}__selected__ico ${this.props.iconClass}` : `${CLASS_ALIAS}__selected__ico`
    return(
      <div className={`${CLASS_ALIAS}`}>
       <div className={`${CLASS_ALIAS}__line`}></div>
        <div className={this.classes.selected} onClick={this.toggleOptions}>
          <div className={ ICON }></div>
          <div className={`${CLASS_ALIAS}__selected__name`}>{this.optionSelected}</div>
        </div>
        <div  style={this.optionsVisible} >
          {
            this.renderOptions()
          }
        </div>
      </div>
    )
  }
}
