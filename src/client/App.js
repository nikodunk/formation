import React, { Component } from 'react';
import './app.css';

import InputRadio from './InputRadio'
import InputRadioWithText from './InputRadioWithText'


export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleOtherChange = this.handleOtherChange.bind(this);
      this.state = { 
            uid: 'Y-9147d',
            name: 'Example Rogers',
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
            fatherage: '31',
            input: {areyoumarried: ''}
          }
  }

  componentDidMount() {
    
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }

  handleOtherChange(e, fieldname) {
    let newInput = {}
    newInput[fieldname] = e.target.value;
    this.setState({input: newInput});
  }


  render() {
    return (
      <div>
        
        <p style={{color: 'dodgerblue'}}>Welcome! </p>
        <p style={{color: 'dodgerblue'}}>This demo pre-selects the most common answers on a <i>Prenatal A/R IPC</i> Form and exports an official, completed PDF.</p>
        <p style={{color: 'dodgerblue'}}>Edit the pre-selections as necessary and hit <b>Export Completed PDF</b>.</p>
        
        <div>
          <label class="label">Form</label>
          <p style={{color: 'grey'}}>Prenatal Assessment/Reassessment and Individualized Care Plan</p>
          
        </div>

        <hr />


        <div class="form-group">
          <label class="label">Patient ID</label>
          <input 
                class="form-control" 
                onChange={(e) => this.handleChange(e, 'uid')}
                value={this.state.uid} 
                placeholder={'Y-9147d'} />
        </div>


        <div class="form-group">
          <label class="label">Patient Name</label>
          <input 
                class="form-control" 
                onChange={(e) => this.handleChange(e, 'name')}
                value={this.state.name} 
                placeholder={'Jane Doe'} />
        </div>


        <hr />



        {/*1. client age*/}
        <div class="box">
            <span class="label">1. Client Age</span>
            <InputRadio value={'Less than 12 years'} iter={"1"} var={'age'} checked={this.state.age}  handleChange={this.handleChange} />
            <InputRadio value={'12-17 years'} iter={"2"} var={'age'} checked={this.state.age}  handleChange={this.handleChange} />
            <InputRadio value={'18-34 years'} iter={"3"} var={'age'} checked={this.state.age}  handleChange={this.handleChange} />
            <InputRadio value={'35 years or older'} iter={"4"} var={'age'} checked={this.state.age}  handleChange={this.handleChange} />
        </div>




      {/* 2. are you married etc */}
        <div class="box">
            <span class="label">2. Are you:</span>
            <InputRadio value={'Married'} iter={"1"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
            <InputRadio value={'Living with partner'} iter={"2"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
            <InputRadio value={'In a relationship'} iter={"3"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
            <InputRadio value={'Single'} iter={"4"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
            <InputRadio value={'Divorced/Separated'} iter={"5"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
            <InputRadio value={'Widowed'} iter={"6"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
            <InputRadio value={'Other:'} iter={"7"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
        </div>



      {/* 3. how long have you lived in your */}
        <div class="box">
            <span class="label">3. How long have you lived at your current home?</span>
            <InputRadio value={'Over one year'} iter={"1"} var={'howlongcurrenthome'} checked={this.state.howlongcurrenthome}  handleChange={this.handleChange} />
            <InputRadio value={'Under one year, previously lived:'} iter={"2"} var={'howlongcurrenthome'} checked={this.state.howlongcurrenthome}  handleChange={this.handleChange} />            
        </div>



      {/* 4. do you plan to stay */}
        <div class="box">
            <span class="label">4. Do you plan to stay in this area for the rest of your pregnancy?</span>
            <InputRadio value={'Yes'} iter={"1"} var={'stayinthisarea'} checked={this.state.stayinthisarea}  handleChange={this.handleChange} />
            <InputRadio value={'No'} iter={"2"} var={'stayinthisarea'} checked={this.state.stayinthisarea}  handleChange={this.handleChange} />
            <InputRadio value={'Unsure'} iter={"3"} var={'stayinthisarea'} checked={this.state.stayinthisarea}  handleChange={this.handleChange} />
        </div>
        



      {/* 5. How many years of school have you completed? */}
        <div class="box">
            <span class="label">5. How many years of school have you completed?</span>
            <InputRadio value={'0-8 years'} iter={"1"} var={'howmanyyearsschool'} checked={this.state.howmanyyearsschool}  handleChange={this.handleChange} />
            <InputRadio value={'9-11 years'} iter={"2"} var={'howmanyyearsschool'} checked={this.state.howmanyyearsschool}  handleChange={this.handleChange} />
            <InputRadio value={'12-16 years'} iter={"3"} var={'howmanyyearsschool'} checked={this.state.howmanyyearsschool}  handleChange={this.handleChange} />
            <InputRadio value={'16+ years'} iter={"4"} var={'howmanyyearsschool'} checked={this.state.howmanyyearsschool}  handleChange={this.handleChange} />
        </div>




      {/* 6. What language do you prefer to speak? */}
        <div class="box">
            <span class="label">6. What language do you prefer to speak?</span>
            <InputRadio value={'English'} iter={"1"} var={'preferredlanguagespeak'} checked={this.state.preferredlanguagespeak}  handleChange={this.handleChange} />
            <InputRadio value={'Spanish'} iter={"2"} var={'preferredlanguagespeak'} checked={this.state.preferredlanguagespeak}  handleChange={this.handleChange} />
            <InputRadio value={'Other'} iter={"3"} var={'preferredlanguagespeak'} checked={this.state.preferredlanguagespeak}  handleChange={this.handleChange} />
        </div>




      {/* 7. Which of the following bests describes how you read */}
        <div class="box">
            <span class="label">7. Which of the following bests describes how you read:</span>
            <InputRadio value={'Like to read and read often'} iter={"1"} var={'howyouread'} checked={this.state.howyouread}  handleChange={this.handleChange} />
            <InputRadio value={'Can read, but don’t read very often'} iter={"2"} var={'howyouread'} checked={this.state.howyouread}  handleChange={this.handleChange} />
            <InputRadio value={'Can’t read'} iter={"3"} var={'howyouread'} checked={this.state.howyouread}  handleChange={this.handleChange} />
        </div>

      
      

      {/* 8. Father of baby */}
        <div class="box">
          <span class="label">8. Father of baby:</span>
          <div class="form-group">
            <label >Name</label>
            <input
                placeholder={'John Doe'}
                value={this.state.fathername}
                onChange={(e) => this.handleChange(e, 'fathername')} 
                class="form-control" />
          </div>
          <div>
            <label >Language</label>
            <input
                placeholder={'English'}
                value={this.state.fatherlanguage}
                onChange={(e) => this.handleChange(e, 'fatherlanguage')}
                class="form-control" />
          </div>
          <div>
            <label >Education</label>
            <input
                placeholder={'High School'}
                value={this.state.fathereducation}
                onChange={(e) => this.handleChange(e, 'fathereducation')}
                class="form-control" />

          </div>
          <div>
            <label >Age</label>
            <input
                placeholder={'31'}
                value={this.state.fatherage}
                onChange={(e) => this.handleChange(e, 'fatherage')}
                class="form-control" />
          </div>
      
        </div>

      

        <hr />
        
        <form  class="w-100" id="myForm" method="post" action="/api/pdf" >
          <input type="hidden" value={this.state.uid} name="uid" />
          <input type="hidden" value={this.state.name} name="name" />
          
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

          <input class='btn btn-primary w-100' type="submit" value="Export Completed PDF" />
        </form>

        <p>Note: For demonstration purposes only page 1 is pre-filled here</p>
        
      </div>
    );
  }
}
