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

          postpartumcheckup: 'Yes, date:',
          problemssincedelivery: 'No',
          ownhealthinsurance: 'Yes',

          currentweightcategory: 'Normal',
          

          //page2
          prenatalvitamins: 'Yes'

            
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
        <hr />
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
        <hr />
        <h5>Clinical-Maternal</h5>

      {/* 8. Have you had a postpartum check-up? */}
        <div className="box">
            <span className="label">8. Have you had a postpartum check-up?</span>
            { this.makeRadios(['Yes, date:', 'No, when scheduled?'], 'postpartumcheckup') }
        </div>


      {/* 9. Any health problems since delivery? */}
        <div className="box">
            <span className="label">9. Any health problems since delivery?</span>
            { this.makeRadios(['No'], 'problemssincedelivery') }
            <InputRadioWithText not={['No']} value={'Yes: please explain:'} iter={"2"} var={'problemssincedelivery'} checked={this.state.problemssincedelivery}  handleChange={this.handleChange} />
        </div>

      {/* 10. Doyouhavehealthinsurancesoyoucanreceiveyourown health care in the future? */}
        <div className="box">
            <span className="label">10. Do you have health insurance so you can receive your own health care in the future?</span>
            { this.makeRadios(['Yes', 'No'], 'ownhealthinsurance') }
        </div>

      {/* -----------------------   */}
        <hr />
        <h5>Nutrition: Anthropometric</h5>

      {/* 11. Totalpregnancyweightgain */}
        <div className="box">
            <span className="label">11. Total pregnancy weight gain</span>
            <input 
                  className="form-control" 
                  onChange={(e) => this.handleChange(e, 'totalpregnancyweightgain')}
                  value={this.state.totalpregnancyweightgain} 
                  placeholder={'eg. 10 lbs'} />
        </div>

      {/* 12. Current weight */}
        <div className="box">
            <span className="label">12. Current weight:</span>
            <input 
                  className="form-control" 
                  onChange={(e) => this.handleChange(e, 'currentweight')}
                  value={this.state.currentweight} 
                  placeholder={'eg. 143 lbs'} />
        </div>


      {/* 13. Current weight category: */}
        <div className="box">
            <span className="label">13. Current weight category:</span>
            { this.makeRadios(['Underweight', 'Normal', 'Overweight', 'Obese'], 'currentweightcategory') }
        </div>

      {/* 14. Postpartum weight goal: */}
        <div className="box">
            <span className="label">14. Postpartum weight goal:</span>
            <input onChange={(e) => this.handleChange(e, 'postpartumweightgoal')} value={this.state.postpartumweightgoal} placeholder={'eg. 143 lbs'} className="form-control" />
        </div>

        

      {/* -----------------------   */}
        <hr />
        <h5>Nutrition: Biochemical (Postpartum)</h5>

      {/* 15. Blood – date collected: */}
        <div className="box">
            <span className="label">15. Blood – date collected:</span>
            <input onChange={(e) => this.handleChange(e, 'blooddatecollected')} value={this.state.blooddatecollected} placeholder={'eg. 143 lbs'} className="form-control" />

            <span className="label">Hgb:</span>
            <input onChange={(e) => this.handleChange(e, 'bloodhgb')} value={this.state.bloodhgb} placeholder={'eg. 143 lbs'} className="form-control" />

            <span className="label">Hct</span>
            <input onChange={(e) => this.handleChange(e, 'bloodhct')} value={this.state.bloodhct} placeholder={'eg. 143 lbs'} className="form-control" />
        </div>

      {/* 16. OGTT – date: */}
        <div className="box">
            <span className="label">16. OGTT – date:</span>
            <input onChange={(e) => this.handleChange(e, 'ogttdate')} value={this.state.ogttdate} placeholder={'Date Collected'} className="form-control" />
            <input onChange={(e) => this.handleChange(e, 'ogttfasting')} value={this.state.ogttfasting} placeholder={'Fasting'} className="form-control" />
            <input onChange={(e) => this.handleChange(e, 'ogtt2hr')} value={this.state.ogtt2hr} placeholder={'2 Hr'} className="form-control" />
            {/*{ this.makeRadios(['N/A'], 'ogttna') }*/}
        </div>

      {/* 17. Are you currently taking prenatal vitamins? */}
        <div className="box">
            <span className="label">17. Are you currently taking prenatal vitamins?</span>
            { this.makeRadios(['Yes', 'No'], 'prenatalvitamins') }
        </div>


      {/* -----------------------   */}
      <hr />
        
        <form  className="w-100" id="myForm" method="post" action="/api/postpartum" >
          <input type="hidden" value={this.props.uid} name="uid" />
          <input type="hidden" value={this.props.name} name="name" />
          
          <input type="hidden" value={this.state.filedinchart} name="filedinchart" />
          <input type="hidden" value={this.state.gestationalageexact} name="gestationalageexact" />
          <input type="hidden" value={this.state.gestationalage} name="gestationalage" />


          <input className='btn btn-primary w-100' type="submit" value="Export Completed PDF" onClick={mixpanel.track("Export PDF Pressed")} />
        </form>
        
      </div>
    );
  }
}
