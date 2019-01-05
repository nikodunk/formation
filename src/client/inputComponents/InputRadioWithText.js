import React, { Component } from 'react';
import '../app.css';

export default class InputRadioWithText extends React.Component {
  
  render() {
    return (
      <div className="form-inline">
        <input  className="form-check-input" 
                type="radio"
                checked={ !this.props.not.includes(this.props.checked) }
                onChange={(e) => this.props.handleChange(e, this.props.var)} />
        <label className="form-check-label" >
          {this.props.value}
          &nbsp;
        </label>
        <input
              className="form-control"
              value={ !['on', 'No', 'Yes'].includes(this.props.checked) ? this.props.checked : '' }
              onFocus={(e) => this.props.handleChange(e, this.props.var)}
              onChange={(e) => this.props.handleChange(e, this.props.var)} />
      </div>
    );
  }
}