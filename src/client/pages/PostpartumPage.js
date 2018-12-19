import React, { Component } from 'react';
import '../app.css';

import InputRadio from '../inputComponents/InputRadio'
import InputRadioWithText from '../inputComponents/InputRadioWithText'


export default class PrenatalPage extends React.Component {


  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
          filedinchart: 'Yes',
          gestationalage: '> 37 weeks',
          deliverycomplications: 'No',
          multiplebirths: 'No',
          infantpediatricprovider: ' ',
          infantcheckup: 'Yes, with no problems',
          postpartumcheckup: 'Yes, date:'

            
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
        {/*<h5>Baby</h5>*/}



        <h5>Clinical-Delivery</h5>

        

        {/*1. delivery record filed in chart */}
        <div className="box">
            <span className="label">1. Delivery Record Filed in Chart?</span>
            { this.makeRadios(['Yes', 'No'], 'filedinchart') }
        </div>

        

        {/* 2. gestational age */}
        <div className="box">
            <span className="label">2. Gestational age:</span>
            <input 
                  className="form-control" 
                  onChange={(e) => this.handleChange(e, 'gestationalageexact')}
                  value={this.state.gestationalageexact} 
                  placeholder={'eg. 40 weeks'} />
            { this.makeRadios(['> 37 weeks', '< 37 weeks'], 'gestationalage') }
        </div>

      {/* 3. pregnancy/delivery complications */}
        <div className="box">
            <span className="label">3. Pregnancy/Delivery complications?</span>
            { this.makeRadios(['No'], 'deliverycomplications') }
            <InputRadioWithText not={['No']} value={'Yes:'} iter={"2"} var={'deliverycomplications'} checked={this.state.deliverycomplications}  handleChange={this.handleChange} />
        </div>

      {/* 4. Client had multiple births? */}
        <div className="box">
            <span className="label">4. Client had multiple births?</span>
            { this.makeRadios(['No', 'Yes'], 'multiplebirths') }
        </div>

      {/* -----------------------   */}
        <h5>Clinical-Infant</h5>

      {/* 5. Infant has a pediatric provider? */}
        <div className="box">
            <span className="label">5. Infant has a pediatric provider?</span>
            { this.makeRadios(['No'], 'infantpediatricprovider') }
            <InputRadioWithText not={['No']} value={'Yes, provider:'} iter={"2"} var={'infantpediatricprovider'} checked={this.state.infantpediatricprovider}  handleChange={this.handleChange} />
        </div>

      {/* 6. Has infant had a newborn check-up? */}
        <div className="box">
            <span className="label">6. Has infant had a newborn check-up?</span>
            { this.makeRadios(['Yes', 'Yes, with no problems'], 'infantcheckup') }
            <InputRadioWithText not={['Yes', 'Yes, with no problems']} value={'Yes, with problems. Describe:'} iter={"3"} var={'infantcheckup'} checked={this.state.infantcheckup}  handleChange={this.handleChange} />
        </div>

      {/* 7. Infant prenatal exposure to: (Check all that apply) */}
        <div className="box">
            <span className="label">7. Infant prenatal exposure to: (Check all that apply)</span>
            { this.makeRadios(['Tobacco', 'Alcohol', 'Drugs', 'Non-prescribed Medicine'], 'prenatalexposureto') }
        </div>


      {/* -----------------------   */}
        <h5>Clinical-Maternal</h5>

      {/* 8. Have you had your postpartum check-up */}
        <div className="box">
            <span className="label">8. Have you had your postpartum check-up</span>
            { this.makeRadios(['Yes, date:', 'No, when scheduled?'], 'postpartumcheckup') }
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
