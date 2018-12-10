import React, { Component } from 'react';
import './app.css';

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            uid: 5,
            name: 'Niko Dunk'
          }
  }

  componentDidMount() {
    
  }

  handleChange(e) {
    this.setState({name: e.target.value});
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
              onChange={this.handleChange}
              />
        </div>

        <div style={{paddingTop: 20}}>
          <form id="myForm" method="post" action="/api/pdf" >
            <input type="hidden" value={this.state.uid} name="uid" />
            <input type="hidden" value={this.state.name} name="name" />
            <input type="submit" value="Generate PDF Form" />
          </form>
        </div>
        
      </div>
    );
  }
}
