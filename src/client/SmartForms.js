import React, { Component } from 'react';
import './app.css';

import PrenatalPage from './forms/PrenatalPage'
import PostpartumPage from './forms/PostpartumPage'


export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            form: 'prenatal',
            uid: 'Example-9147d',
            name: 'Georgia Examplo',
            dob: '01/20/1988'
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

      <div id="main">
              <div class="alert alert-info">
                <p >
                  Welcome! <br />
                  This demo pre-selects the most common answers on a <i>Prenatal A/R IPC</i> Form and exports an official, completed PDF.<br />
                  Edit the pre-selections as necessary and hit <b>Export Completed PDF</b>.
                </p>
              </div>

              <div class="card" >
                <div class="card-body">
                    <p>Casey Coordination | Paperwork Demo Hospital</p>
                    
                    {/* PATIENT ID NUMBER */}
                      <div className="form-group">
                        <label className="label">Patient ID Number</label>
                        <select class="form-control" value={this.state.uid} onChange={(e) => this.handleChange(e, 'uid')}>
                            <option value="Y-9147d">Y-9147d</option>
                        </select>
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

                    {/* DOB */}
                      <div className="form-group">
                        <label className="label">Date of Birth</label>
                        <input 
                              className="form-control" 
                              onChange={(e) => this.handleChange(e, 'dob')}
                              value={this.state.dob} 
                              placeholder={'01/20/1988'} />
                      </div>

                    {/* PATIENT INFO BOX */}
                    <p>
                      Paperwork Health Plan | Paperwork Health
                    </p>
                </div>
              </div>

              <br />

              <div class="card">
                <div class="card-body">

                  {/* FORM SELECTOR */}
                    <div>
                      <label className="label">Form</label>
                      <select class="form-control" value={this.state.form} onChange={(e) => this.handleChange(e, 'form')}>
                          <option value="prenatal">LAC CPSP 2017 Prenatal Assessment/Reassessment and Individualized Care Plan</option>
                          <option value="postpartum">LAC CPSP 2017 Postpartum Assessment & ICP tool</option>
                      </select>
                    </div>

                  <br />

                  

                  <div class="card" style={{backgroundColor: '#fcfcfc'}}>
                    <div class="card-body">
                      { this.state.form === 'prenatal' ? 
                          <PrenatalPage uid={this.state.uid} name={this.state.name} /> : 
                          <PostpartumPage uid={this.state.uid} name={this.state.name} /> }
                    </div>
                  </div>

              </div>
        </div>
      </div>
            

    );
  }
}
