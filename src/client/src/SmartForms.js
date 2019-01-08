import React, { Component } from 'react';


import PrenatalPage from './forms/PrenatalPage'
import PostpartumPage from './forms/PostpartumPage'


export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = {
            form: 'postpartum',

            coordinator: 'Casey Coordination',
            hospital: 'Paperwork Demo Hospital',

            currentpatient: 'Example-9147d',
            patients: { 
                  'Example-9147d': {
                            patientuid: 'Example-9147d', 
                            name: 'Georgia Examplo', 
                            dob: '09/18/1972',
                            healthplan: 'Paperwork Health Plan',
                            provider: 'Paperwork Health'
                          },
                  'Example-2353c': {
                            patientuid: 'Example-2353c', 
                            name: 'George Example', 
                            dob: '10/14/1983',
                            healthplan: 'Kaiser HMO/HPO',
                            provider: 'Kaiser Permanente'
                          }
                } ,

            loading: false
          }
  }

  componentDidMount() {
    // fetch ( this.props.user ).then((res) => this.setState({this.state: res}))
    // fetch patients, coordinator, hospital etc for current user
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }

  handlePatientChange(e) {
    this.setState({loading: true})
    let newState = {}
    newState['currentpatient'] = e.target.value;
    this.setState(newState)
    setTimeout(() => {this.setState({loading: false})} , 100);
  }

  handlePatientInfoChange(e, fieldname) {
    let newState = this.state
    newState['patients'][this.state.currentpatient][fieldname] = e.target.value;
    this.setState(newState);
  }

  makePatients(){
    let results = []
      for (var patient in this.state.patients) {
          results.push( <option value={this.state.patients[patient].patientuid}>{this.state.patients[patient].patientuid}</option>)
        }
    return results
  }

  addPatient(){
    let newPatients = this.state.patients
    newPatients['Another-Patient'] = 
                          {
                            patientuid: 'Another-Patient', 
                            name: '', 
                            dob: '',
                            healthplan: '',
                            provider: ''
                          }
    this.setState({patients: newPatients})
    this.setState({currentpatient: 'Another-Patient'})
  }

  render() {
    return (

      <div id="main">
              <div class="alert alert-info">
                <p >
                  Welcome! <br />
                  This demo pre-selects the most common answers on common medical forms and exports an official, completed PDF.<br />
                  Edit the pre-selections as necessary and hit <b>Export Completed PDF</b>.
                </p>
              </div>

              <div class="card" >
                <div class="card-body">
                    <p>{this.state.coordinator} | {this.state.hospital}</p>
                    
                    {/* PATIENT ID NUMBER */}
                      <div className="form-group">
                        <label className="label">Patient ID Number</label>
                        <select class="form-control" value={this.state.patients[this.state.currentpatient].patientuid} onChange={(e) => this.handlePatientChange(e)}>
                            {this.makePatients()}
                        </select>
                        {/*<input type="button" onClick={() => this.addPatient()} className="btn btn-primary" value="Add Patient" />*/}
                      </div>
                    
                      <div className="form-group">
                        
                        {/* PATIENT NAME */}
                          <label className="label">Patient Name</label>
                          <p>{this.state.patients[this.state.currentpatient].name} </p>
                          {/*<input 
                                className="form-control" 
                                onChange={(e) => this.handlePatientInfoChange(e, 'name')}
                                value={this.state.patients[this.state.currentpatient].name} 
                                placeholder={'Jane Doe'} />*/}


                        {/* DOB */}
                          <label className="label">Date of Birth</label>
                          <p>{this.state.patients[this.state.currentpatient].dob} </p>
                          {/*<input 
                                className="form-control" 
                                onChange={(e) => this.handlePatientInfoChange(e, 'dob')}
                                value={this.state.patients[this.state.currentpatient].dob} 
                                placeholder={'01/20/1988'} />*/}
                        
                      </div>


                    {/* PATIENT INFO BOX */}
                      <p>
                        {this.state.patients[this.state.currentpatient].healthplan}
                        {/*<input 
                                className="" 
                                onChange={(e) => this.handlePatientInfoChange(e, 'healthplan')}
                                value={this.state.patients[this.state.currentpatient].healthplan} 
                                placeholder={'Paperwork Labs Healthplan'} />*/}
                        <span> | </span>
                        {this.state.patients[this.state.currentpatient].provider}
                        {/*<input 
                                className="" 
                                onChange={(e) => this.handlePatientInfoChange(e, 'provider')}
                                value={this.state.patients[this.state.currentpatient].provider}
                                placeholder={'Paperwork Labs Provider'} />*/}
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

                { !this.state.loading ?
                  <div>
                    { this.state.form === 'prenatal' ? 
                        <PrenatalPage
                            patientuid={this.state.patients[this.state.currentpatient].patientuid} 
                            form={this.state.form}
                            name={this.state.patients[this.state.currentpatient].name}
                            dob={this.state.patients[this.state.currentpatient].dob}
                            healthplan={this.state.patients[this.state.currentpatient].healthplan}
                            provider={this.state.patients[this.state.currentpatient].provider}
                            coordinator={this.state.coordinator}
                            hospital={this.state.hospital} /> 
                        : 
                        <PostpartumPage 
                            patientuid={this.state.patients[this.state.currentpatient].patientuid}
                            form={this.state.form}
                            name={this.state.patients[this.state.currentpatient].name}
                            dob={this.state.patients[this.state.currentpatient].dob}
                            healthplan={this.state.patients[this.state.currentpatient].healthplan}
                            provider={this.state.patients[this.state.currentpatient].provider}
                            coordinator={this.state.coordinator}
                            hospital={this.state.hospital} /> 
                    } 
                  </div>
                  : null
                }
            
            

              </div>
        </div>
      </div>
            

    );
  }
}
