import React from 'react';

import InputRadio from '../inputComponents/InputRadio'
import InputRadioWithText from '../inputComponents/InputRadioWithText'

import { getForm, updateForm } from '../api'

export default class PrenatalPage extends React.Component {


  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            age: '18-34 years',
            areyoumarried: 'Living with partner',
            howlongcurrenthome: 'Over one year',
            stayinthisarea: 'Yes',
            howmanyyearsschool: '12-16 years',
            preferredlanguagespeak: 'English',
            howyouread: 'Like to read and read often',
            fathername: 'John Doe',
            fatherlanguage: 'English',
            fathereducation: 'High School',
            fatherage: '31'
          }
  }

  componentDidMount() {
    // mixpanel.track("Prenatal Loaded");
    getForm(this.props.patientuid, this.props.form).then((res) => { console.log(res); this.setState(res) })
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }


  updateForm(){

    updateForm(this.props.patientuid, this.props.form, this.state)
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

                <form  className="w-100" id="myForm" method="post" action="http://localhost:8080/api/prenatal" >
                  <input type="hidden" value={this.props.patientuid} name="patientuid" />
                  <input type="hidden" value={this.props.name} name="name" />
                  <input type="hidden" value={this.props.dob} name="dob" />
                  <input type="hidden" value={this.props.healthplan} name="healthplan" />
                  <input type="hidden" value={this.props.provider} name="provider" />
                  <input type="hidden" value={this.props.coordinator} name="coordinator" />
                  <input type="hidden" value={this.props.hospital} name="hospital" />
         
                  
                  <input type="hidden" value={this.state.age} name="age" />
                  <input type="hidden" value={this.state.areyoumarried} name="areyoumarried" />
                  <input type="hidden" value={this.state.howlongcurrenthome} name="howlongcurrenthome" />
                  <input type="hidden" value={this.state.stayinthisarea} name="stayinthisarea" />
                  <input type="hidden" value={this.state.howmanyyearsschool} name="howmanyyearsschool" />
                  <input type="hidden" value={this.state.preferredlanguagespeak} name="preferredlanguagespeak" />
                  <input type="hidden" value={this.state.howyouread} name="howyouread" />

                  <input type="hidden" value={this.state.fathername} name="fathername" />
                  <input type="hidden" value={this.state.fatherlanguage} name="fatherlanguage" />
                  <input type="hidden" value={this.state.fathereducation} name="fathereducation" />
                  <input type="hidden" value={this.state.fatherage} name="fatherage" />

                  <input className='btn btn-success' value="Save Form" onClick={() => { this.updateForm() }} />
                  {'  '}
                  <input className='btn btn-primary' type="submit" value="Export Completed PDF"  />
                </form>

      <br /><br />
        
      {/* PAGE NAVS*/}
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="1-tab" data-toggle="tab" href="#p1" role="tab" >
              Page 1</a>
          </li>
          
        </ul>
        <div class="tab-content" id="myTabContent">



        {/* PAGE 1 */}
        <div class="tab-pane fade show active" id="p1" role="tabpanel" >


            {/*1. client age*/}
            <div className="box">
                <span className="label">1. Client Age</span>
                { this.makeRadios(['Less than 12 years', '12-17 years', '18-34 years', '35 years or older'], 'age') }
            </div>




          {/* 2. are you married etc */}
            <div className="box">
                <span className="label">2. Are you:</span>
                { this.makeRadios(['Married', 'Living with partner', 'In a relationship', 'Single', 'Divorced/Separated', 'Widowed'], 'areyoumarried') }
                <InputRadioWithText not={['Married', 'Living with partner', 'In a relationship', 'Single', 'Divorced/Separated', 'Widowed']}
                            value={'Other:'} iter={"7"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
            </div>



          {/* 3. how long have you lived in your */}
            <div className="box">
                <span className="label">3. How long have you lived at your current home?</span>
                { this.makeRadios(['Over one year'], 'howlongcurrenthome') }
                <InputRadioWithText not={['Over one year']}
                     value={'Under one year, previously lived:'} iter={"2"} var={'howlongcurrenthome'} checked={this.state.howlongcurrenthome}  handleChange={this.handleChange} />            
            </div>



          {/* 4. do you plan to stay */}
            <div className="box">
                <span className="label">4. Do you plan to stay in this area for the rest of your pregnancy?</span>
                { this.makeRadios(['Yes', 'No', 'Unsure'], 'stayinthisarea') }
            </div>
            



          {/* 5. How many years of school have you completed? */}
            <div className="box">
                <span className="label">5. How many years of school have you completed?</span>
                { this.makeRadios(['0-8 years', '9-11 years', '12-16 years', '16+ years'], 'howmanyyearsschool') }
            </div>




          {/* 6. What language do you prefer to speak? */}
            <div className="box">
                <span className="label">6. What language do you prefer to speak?</span>
                { this.makeRadios(['English', 'Spanish'], 'preferredlanguagespeak') }
                <InputRadioWithText not={['English', 'Spanish']}
                             value={'Other'} iter={"3"} var={'preferredlanguagespeak'} checked={this.state.preferredlanguagespeak}  handleChange={this.handleChange} />
            </div>




          {/* 7. Which of the following bests describes how you read */}
            <div className="box">
                <span className="label">7. Which of the following bests describes how you read:</span>
                { this.makeRadios(['Like to read and read often', 'Can read, but don’t read very often', 'Can’t read'], 'howyouread') }
            </div>

          
          

          {/* 8. Father of baby */}
            <div className="box">
              <span className="label">8. Father of baby:</span>
              <div className="form-group">
                <label >Name</label>
                <input
                    placeholder={'John Doe'}
                    value={this.state.fathername}
                    onChange={(e) => this.handleChange(e, 'fathername')} 
                    className="form-control" />
              </div>
              <div>
                <label >Language</label>
                <input
                    placeholder={'English'}
                    value={this.state.fatherlanguage}
                    onChange={(e) => this.handleChange(e, 'fatherlanguage')}
                    className="form-control" />
              </div>
              <div>
                <label >Education</label>
                <input
                    placeholder={'High School'}
                    value={this.state.fathereducation}
                    onChange={(e) => this.handleChange(e, 'fathereducation')}
                    className="form-control" />

              </div>
              <div>
                <label >Age</label>
                <input
                    placeholder={'31'}
                    value={this.state.fatherage}
                    onChange={(e) => this.handleChange(e, 'fatherage')}
                    className="form-control" />
              </div>
          
            </div>



        </div>





        {/* PAGE 2 */}
        {/*<div class="tab-pane fade show active" id="p2" role="tabpanel" >
           PAGE 2
        </div>*/}

      </div>
      

        
        
        <form  className="w-100" id="myForm" method="post" action="http://localhost:8080/api/prenatal" >
          <input type="hidden" value={this.props.patientuid} name="patientuid" />
          <input type="hidden" value={this.props.name} name="name" />
          <input type="hidden" value={this.props.dob} name="dob" />
          <input type="hidden" value={this.props.healthplan} name="healthplan" />
          <input type="hidden" value={this.props.provider} name="provider" />
          <input type="hidden" value={this.props.coordinator} name="coordinator" />
          <input type="hidden" value={this.props.hospital} name="hospital" />
 
          
          <input type="hidden" value={this.state.age} name="age" />
          <input type="hidden" value={this.state.areyoumarried} name="areyoumarried" />
          <input type="hidden" value={this.state.howlongcurrenthome} name="howlongcurrenthome" />
          <input type="hidden" value={this.state.stayinthisarea} name="stayinthisarea" />
          <input type="hidden" value={this.state.howmanyyearsschool} name="howmanyyearsschool" />
          <input type="hidden" value={this.state.preferredlanguagespeak} name="preferredlanguagespeak" />
          <input type="hidden" value={this.state.howyouread} name="howyouread" />

          <input type="hidden" value={this.state.fathername} name="fathername" />
          <input type="hidden" value={this.state.fatherlanguage} name="fatherlanguage" />
          <input type="hidden" value={this.state.fathereducation} name="fathereducation" />
          <input type="hidden" value={this.state.fatherage} name="fatherage" />

          <input className='btn btn-success' value="Save Form" onClick={() => { this.updateForm(); }} />
          {'  '}
          <input className='btn btn-primary' type="submit" value="Export Completed PDF" onClick={() => {}} />
        </form>



        <p>Note: For demonstration purposes only page 1 is pre-filled here</p>
        
      </div>
    );
  }
}
