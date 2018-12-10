import React, { Component } from 'react';
import './app.css';

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            uid: 5,
            name: 'Niko Dunk',
            age: '18-34 years'
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
          Patient ID 
          <select>
            <option value={this.state.uid}>{this.state.uid}</option>
          </select>
        </div>

        <div>
          Patient Name 
          <input 
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

        <div style={{paddingTop: 20}}>
          <form id="myForm" method="post" action="/api/pdf" >
            <input type="hidden" value={this.state.uid} name="uid" />
            <input type="hidden" value={this.state.name} name="name" />
            <input type="hidden" value={this.state.age} name="age" />
            <input type="submit" value="Generate PDF Form" />
          </form>
        </div>
        
      </div>
    );
  }
}
