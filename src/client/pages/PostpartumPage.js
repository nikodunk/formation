import React, { Component } from 'react';
import '../app.css';

import InputRadio from '../inputComponents/InputRadio'
import InputRadioWithText from '../inputComponents/InputRadioWithText'


export default class PrenatalPage extends React.Component {


  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
          filedinchart: 'Yes'
            
          }
  }

  componentDidMount() {
    mixpanel.track("Prenatal Loaded");
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }



  makeRadios(inputs, variableName){
    let results = []
    for (var i in inputs) {
        results.push(
          <InputRadio value={inputs[i]} iter={i} var={variableName} checked={this.state[variableName]}  handleChange={this.handleChange} />
          );
    }
    return results
  }


  render() {
    return (
      <div>
        


        {/*1. client age*/}
        <div className="box">
            <span className="label">1. Delivery Record Filed in Chart?</span>
            { this.makeRadios(['Yes', 'No'], 'filedinchart') }
        </div>

      

        <hr />
        
        <form  className="w-100" id="myForm" method="post" action="/api/postpartum" >
          <input type="hidden" value={this.props.uid} name="uid" />
          <input type="hidden" value={this.props.name} name="name" />
          
          <input type="hidden" value={this.state.filedinchart} name="filedinchart" />

          <input className='btn btn-primary w-100' type="submit" value="Export Completed PDF" onClick={mixpanel.track("Export PDF Pressed")} />
        </form>
        
      </div>
    );
  }
}
