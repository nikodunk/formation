import React, { Component } from 'react';
import './app.css';

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            uid: '',
            name: '',
            age: '18-34 years',
            areyoumarried: '',
            howlongcurrenthome: 'Over one year',
            stayinthisarea: 'Yes'
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
        
        <div>
          Form
          <select>
            <option value={'Prenatal Assessment/Reassessment and Individualized Care Plan'}>Prenatal Assessment/Reassessment and Individualized Care Plan</option>
          </select>

        </div>

        <hr />

        <div>
          Patient ID 
          <input
              placeholder={'Y-9147d'}
              value={this.state.uid}
              onChange={(e) => this.handleChange(e, 'uid')}
              />
        </div>

        <div>
          Patient Name 
          <input
              placeholder={'Jane Doe'}
              value={this.state.name}
              onChange={(e) => this.handleChange(e, 'name')}
              />
        </div>

        <hr />

        {/*1. client age*/}
        <div>
          1. Client Age
          <select onChange={(e) => this.handleChange(e, 'age')}>
            <option value={'Less than 12 years'}>Less than 12 years</option>
            <option value={'12-17 years'}>12-17 years</option>
            <option value={'18-34 years'} selected="selected">18-34 years</option>
            <option value={'35 years or older'}>35 years or older</option>
          </select>
        </div>

      {/* 2. are you married etc */}
        <div>
          2. Are you:
          <select onChange={(e) => this.handleChange(e, 'areyoumarried')}>
            <option value={''} ></option>
            <option value={'Married'} >Married</option>
            <option value={'Living with partner'}>Living with partner</option>
            <option value={'In a relationship'} >In a relationship</option>
            <option value={'Single'} >Single</option>
            <option value={'Divorced/Separated'} >Divorced/Separated</option>
            <option value={'Widowed'} >Widowed</option>
            <option value={'Other'} >Other</option>
          </select>
        </div>

      {/* 3. how long have you lived in your */}
        <div>
          3. How long have you lived at your current home?
          <select onChange={(e) => this.handleChange(e, 'howlongcurrenthome')}>
            <option value={'Over one year'} selected="selected" >Over one year</option>
            <option value={'Under one year, previously lived:'}>Under one year, previously lived:</option>
          </select>
        </div>

      {/* 4. do you plan to stay */}
        <div>
          4. Do you plan to stay in this area for the rest of your pregnancy?
          <select onChange={(e) => this.handleChange(e, 'stayinthisarea')}>
            <option value={'Yes'}selected="selected" >Yes</option>
            <option value={'No'}>No</option>
            <option value={'Unsure'} >Unsure</option>
          </select>
        </div>

        
        <form style={{width: '100%'}} id="myForm" method="post" action="/api/pdf" >
          <input type="hidden" value={this.state.uid} name="uid" />
          <input type="hidden" value={this.state.name} name="name" />
          <input type="hidden" value={this.state.age} name="age" />
          <input type="hidden" value={this.state.areyoumarried} name="areyoumarried" />
          <input type="hidden" value={this.state.howlongcurrenthome} name="howlongcurrenthome" />
          <input type="hidden" value={this.state.stayinthisarea} name="stayinthisarea" />
          <input className={'primary'} type="submit" value="Generate PDF Form" />
        </form>
        
        
      </div>
    );
  }
}
