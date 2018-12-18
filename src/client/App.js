import React, { Component } from 'react';
import './app.css';

import PrenatalPage from './pages/PrenatalPage'

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            form: 'Prenatal Assessment/Reassessment and Individualized Care Plan',
            uid: 'Example-9147d',
            name: 'Georgia Examplette',
          }
  }

  componentDidMount() {
    
  }



  render() {
    return (
      <div>
        <div class="alert alert-info">
          <p >
            Welcome! <br />
            This demo pre-selects the most common answers on a <i>Prenatal A/R IPC</i> Form and exports an official, completed PDF.<br />
            Edit the pre-selections as necessary and hit <b>Export Completed PDF</b>.
          </p>
        </div>
        

      {/* FORM NUMBER */}
        <div>
          <label className="label">Form</label>
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">LAC CPSP 2017 Prenatal Assessment/Reassessment and Individualized Care Plan</option>
              <option value="lime">LAC CPSP 2017 Postpartum Assessment & ICP tool</option>
          </select>
        </div>

        <hr />

      {/* PATIENT ID */}
        <div className="form-group">
          <label className="label">Patient ID</label>
          <input 
                className="form-control" 
                onChange={(e) => this.handleChange(e, 'uid')}
                value={this.state.uid} 
                placeholder={'Y-9147d'} />
        </div>

      {/* PATIENT NAME */}
        <div className="form-group">
          <label className="label">Patient Name</label>
          <input 
                className="form-control" 
                onChange={(e) => this.handleChange(e, 'name')}
                value={this.state.name} 
                placeholder={'Jane Doe'} />
        </div>


        <hr />

        { this.state.form === 'Prenatal Assessment/Reassessment and Individualized Care Plan' ? <PrenatalPage uid={this.state.uid} name={this.state.name} /> : null }

      </div>
    );
  }
}
