import React, { Component } from 'react';
import './app.css';

import InputRadio from './InputRadio'
import InputRadioWithText from './InputRadioWithText'


export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
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
        
        <p style={{color: 'dodgerblue'}}>Welcome! </p>
        <p style={{color: 'dodgerblue'}}>This demo pre-selects the most common answers on a <i>Prenatal A/R IPC</i> Form and exports an official, completed PDF.</p>
        <p style={{color: 'dodgerblue'}}>Edit the pre-selections as necessary and hit <b>Export Completed PDF</b>.</p>
        
        <div>
          <label className="label">Form</label>
          <p style={{color: 'grey'}}>Prenatal Assessment/Reassessment and Individualized Care Plan</p>
          
        </div>

        <hr />


        <div className="form-group">
          <label className="label">Patient ID</label>
          <input 
                className="form-control" 
                onChange={(e) => this.handleChange(e, 'uid')}
                value={this.state.uid} 
                placeholder={'Y-9147d'} />
        </div>


        <div className="form-group">
          <label className="label">Patient Name</label>
          <input 
                className="form-control" 
                onChange={(e) => this.handleChange(e, 'name')}
                value={this.state.name} 
                placeholder={'Jane Doe'} />
        </div>


        <hr />



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

      

        <hr />
        
        <form  className="w-100" id="myForm" method="post" action="/api/pdf" >
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

          <input className='btn btn-primary w-100' type="submit" value="Export Completed PDF" />
        </form>

        <p>Note: For demonstration purposes only page 1 is pre-filled here</p>
        
      </div>
    );
  }
}
