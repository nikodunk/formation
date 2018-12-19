import React, { Component } from 'react';
import './app.css';

import PrenatalPage from './pages/PrenatalPage'
import PostpartumPage from './pages/PostpartumPage'
import ReportingDashboard from './Reporting'


export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            form: 'prenatal',
            uid: 'Example-9147d',
            name: 'Georgia Examplo',
            dob: '01/20/1988',
            dashboard: false
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
          <nav class="navbar navbar-light  navbar-expand-md" >
            <a class="navbar-brand" href="/app">
              paperwork labs
            </a>
            <span class="navbar-text" style={{marginRight: "auto"}}>
              Healthcare Form Automation
            </span>

            <div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link dodgerblue" onClick={() => this.setState({dashboard: false})}>Generate<span class="sr-only">(current)</span></a>
                    <span class="nav-item nav-link"> | </span>
                  <a class="nav-item nav-link dodgerblue" onClick={() => this.setState({dashboard: true})}>Report</a>
                    <span class="nav-item nav-link"> | </span>
                  <a class="nav-item nav-link" href="/">Logout</a>
                </div>
              </div> 
            </div>

          </nav>

          <br /><br />

          {this.state.dashboard ?
            <ReportingDashboard />
            :
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
                      { this.state.form === 'prenatal' ? <PrenatalPage uid={this.state.uid} name={this.state.name} /> : <PostpartumPage uid={this.state.uid} name={this.state.name} /> }
                    </div>
                  </div>

                </div>
              </div>
            


          </div>
          }



      </div>
    );
  }
}
