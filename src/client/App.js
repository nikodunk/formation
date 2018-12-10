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
        <p>Patient ID: {this.state.uid}</p>
        <span>
          Patient Name: 
          <input 
              value={this.state.name}
              onChange={this.handleChange}
              />
        </span>
        <div style={{paddingTop: 20}}>
          <form id="myForm" action={"/api/pdf/"+this.state.uid+"/"+this.state.name}>
            <input type="submit" value="Generate PDF Form" />
          </form>
        </div>
        
      </div>
    );
  }
}
