import React, { Component } from 'react';
import './app.css';

export default class InputRadioWithText extends React.Component {

  constructor(props) {
      super(props);
      this.state = {}
  }
  
  
  render() {
    return (
      <div class="form-inline">
        <input  class="form-check-input" 
                type="radio"
                checked={this.state.checked}
                onChange={(e) => this.props.handleChange(e, this.props.var)} />
        <label class="form-check-label" >
          {this.props.value}
          &nbsp;
        </label>
        <input
              class="form-control"
              value={this.state.input}
              onFocus={(e) => {this.setState({checked: true}); this.props.handleChange(e, this.props.var)}}
              onChange={(e) => this.props.handleChange(e, this.props.var)}
              onBlur={(e) => this.setState({checked: false}) } />
      </div>
    );
  }
}
