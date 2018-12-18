import React, { Component } from 'react';
import './app.css';

export default class InputRadio extends React.Component {
  
  
  render() {
    return (
      <div className="form-check">
        <input  className="form-check-input" 
                type="radio" 
                value={this.props.value}
                checked={this.props.checked === this.props.value}
                onChange={(e) => this.props.handleChange(e, this.props.var)} 
                id={this.props.var+this.props.iter} />
        <label className="form-check-label" htmlFor={this.props.var+this.props.iter} >
          {this.props.value}
        </label>
      </div>
    );
  }
}
