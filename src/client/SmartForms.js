import React, { Component } from 'react';
import './app.css';

import PrenatalPage from './forms/PrenatalPage'
import PostpartumPage from './forms/PostpartumPage'


export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            form: 'postpartum',
            uid: 'Example-9147d',
            name: 'Georgia Examplo',
            dob: '01/20/1988',
            healthplan: 'Paperwork Health Plan',
            provider: 'Paperwork Health',
            coordinator: 'Casey Coordination',
            hospital: 'Paperwork Demo Hospital'
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
                    <p>{this.state.coordinator} | {this.state.hospital}</p>
                    
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
                      {this.state.healthplan} | {this.state.provider}
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
                          <option value="prenatal">LAC CPSP 2017 Prenatal Assessment/Reassessment and Individualized Care Plan (17-pages)</option>
                          <option value="postpartum">LAC CPSP 2017 Postpartum Assessment & ICP tool (6-pages)</option>
                      </select>
                    </div>

                  <br />

                
                  
                  { this.state.form === 'prenatal' ? 
                      <PrenatalPage 
                          uid={this.state.uid} 
                          name={this.state.name}
                          dob={this.state.dob}
                          healthplan={this.state.healthplan}
                          provider={this.state.provider}
                          coordinator={this.state.coordinator}
                          hospital={this.state.hospital} /> 
                      : 
                      <PostpartumPage 
                          uid={this.state.uid} 
                          name={this.state.name}
                          dob={this.state.dob}
                          healthplan={this.state.healthplan}
                          provider={this.state.provider}
                          coordinator={this.state.coordinator}
                          hospital={this.state.hospital} /> 
                      }
          

        
            
            
            
            

              </div>
        </div>
      </div>
            

    );
  }
}
