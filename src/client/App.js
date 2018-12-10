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

        <div>
          Client Age
          <select onChange={(e) => this.handleChange(e, 'age')}>
            <option value={'Less than 12 years'}>Less than 12 years</option>
            <option value={'12-17 years'}>12-17 years</option>
            <option value={'18-34 years'} selected="selected">18-34 years</option>
            <option value={'35 years or older'}>35 years or older</option>
          </select>
        </div>

        <div>
          Do you plan to stay in this area for the rest of your pregnancy?
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
          <input type="hidden" value={this.state.stayinthisarea} name="stayinthisarea" />
          <input className={'primary'} type="submit" value="Generate PDF Form" />
        </form>
        
        
      </div>
    );
  }
}
