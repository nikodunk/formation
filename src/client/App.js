import React, { Component } from 'react';
import './app.css';

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
            fatherage: '31'
          }
  }

  componentDidMount() {
    
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }


  render() {
    return (
      <div>
        
        <p style={{color: 'dodgerblue'}}>Welcome! </p>
        <p style={{color: 'dodgerblue'}}>This app pre-selects the most common options on a "Prenatal Assessment/Re-assessment IPC" form, and then exports to the required official PDF format. (Only page 1 here, for demonstration purposes).</p>
        <p style={{color: 'dodgerblue'}}>Select <b>Export to PDF</b> at the bottom to see the complete form.</p>
        
        <div>
          Form<br/>
          <select class="form-control">
            <option value={'Prenatal Assessment/Reassessment and Individualized Care Plan'}>Prenatal Assessment/Reassessment and Individualized Care Plan</option>
          </select><br />
        </div>

        <hr />


        <div class="form-group">
          <label >Patient ID</label>
          <input 
                class="form-control" 
                onChange={(e) => this.handleChange(e, 'uid')}
                value={this.state.uid} 
                placeholder={'Y-9147d'} />
        </div>


        <div class="form-group">
          <label >Patient Name</label>
          <input 
                class="form-control" 
                onChange={(e) => this.handleChange(e, 'name')}
                value={this.state.name} 
                placeholder={'Jane Doe'} />
        </div>


        <hr />

        {/*1. client age*/}
        <div class="box">
            1. Client Age<br/>
            <select class="form-control" onChange={(e) => this.handleChange(e, 'age')}>
              <option value={'Less than 12 years'}>Less than 12 years</option>
              <option value={'12-17 years'}>12-17 years</option>
              <option value={'18-34 years'} selected="selected">18-34 years</option>
              <option value={'35 years or older'}>35 years or older</option>
            </select>
        </div>

      {/* 2. are you married etc */}
        <div class="box">
            2. Are you:<br/>
            <select class="form-control" onChange={(e) => this.handleChange(e, 'areyoumarried')}>
              <option value={''} ></option>
              <option value={'Married'} >Married</option>
              <option value={'Living with partner'} selected="selected">Living with partner</option>
              <option value={'In a relationship'} >In a relationship</option>
              <option value={'Single'} >Single</option>
              <option value={'Divorced/Separated'} >Divorced/Separated</option>
              <option value={'Widowed'} >Widowed</option>
              <option value={'Other'} >Other</option>
            </select>
        </div>

      {/* 3. how long have you lived in your */}
        <div class="box">
            3. How long have you lived at your current home?<br/>
            <select class="form-control" onChange={(e) => this.handleChange(e, 'howlongcurrenthome')}>
              <option value={'Over one year'} selected="selected" >Over one year</option>
              <option value={'Under one year, previously lived:'}>Under one year, previously lived:</option>
            </select>
        </div>

      {/* 4. do you plan to stay */}
        <div class="box">
            4. Do you plan to stay in this area for the rest of your pregnancy?<br/>
            <select class="form-control" onChange={(e) => this.handleChange(e, 'stayinthisarea')}>
              <option value={'Yes'} selected="selected" >Yes</option>
              <option value={'No'}>No</option>
              <option value={'Unsure'} >Unsure</option>
            </select>
        </div>

      {/* 5. How many years of school have you completed? */}
        <div class="box">
            5. How many years of school have you completed?<br/>
            <select class="form-control" onChange={(e) => this.handleChange(e, 'howmanyyearsschool')}>
              <option value={'0-8 years'}  >0-8 years</option>
              <option value={'9-11 years'}>9-11 years</option>
              <option value={'12-16 years'} selected="selected" >12-16 years</option>
              <option value={'16+ years'}>16+ years</option>
            </select>
        </div>

      {/* 6. What language do you prefer to speak? */}
        <div class="box">
            6. What language do you prefer to speak?<br/>
            <select class="form-control" onChange={(e) => this.handleChange(e, 'preferredlanguagespeak')}>
              <option value={''} ></option>
              <option value={'English'} selected="selected">English</option>
              <option value={'Spanish'}>Spanish</option>
              <option value={'Other'} >Other</option>
            </select>
        </div>

      {/* 7. Which of the following bests describes how you read */}
        <div class="box">
            7. Which of the following bests describes how you read:<br/>
            <select class="form-control" onChange={(e) => this.handleChange(e, 'howyouread')}>
              <option value={'Like to read and read often'} selected="selected" >Like to read and read often</option>
              <option value={'Can read, but don’t read very often'}>Can read, but don’t read very often</option>
              <option value={'Can’t read'} >Can’t read</option>
            </select>
        </div>

      {/* 8. Father of baby */}
        <div class="box">
          8. Father of baby:<br/>
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
        
        <form style={{width: '100%'}} id="myForm" method="post" action="/api/pdf" >
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

          <input className={'btn btn-primary'} type="submit" value="Export to PDF" />
        </form>
        

        
      </div>
    );
  }
}
