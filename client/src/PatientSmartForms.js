import React from 'react';

import PrenatalPage from './forms/PrenatalPage'
import PostpartumPage from './forms/PostpartumPage'

import { createNewPatient, getAllPatientsForUsergroup, updatePatient } from './api'

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = {
            currentForm: 'prenatal',
            currentpatient: 0,
            loading: false,
            redraw: false,

            hospital: null,
            
            patients: null
          }
  }

  componentDidMount() {
    // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken) => {
    //   // Send token to your backend via HTTPS
      
    console.log(this.props.usergroup)
    // fetch PATIENTS, hospital etc for from usergroup this.props.user.uid
    getAllPatientsForUsergroup(this.props.usergroup).then((res) => {
            console.log(res)
            this.setState({patients: res})
          })


    // }).catch(function(error) {
    //   // Handle error
    // });

    
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }

  handlePatientChange(e) {
    this.setState({loading: true})
    console.log(typeof e.target.value)
    this.setState({currentpatient: e.target.value})
    setTimeout(() => {this.setState({loading: false})} , 100);
  }

  handlePatientInfoChange(e, fieldname) {
    let newState = this.state
    newState['patients'][this.state.currentpatient][fieldname] = e.target.value;
    this.setState(newState);
  }

  updatePatient(){
    updatePatient(this.props.patientuid, this.state.patients[this.state.currentpatient])
  }

  makePatients(){
    let results = []
      for (var patient in this.state.patients) {
          results.push( <option value={patient}>{this.state.patients[patient].patientmedicalrecordno}</option>)
        }
    return results
  }

  createPatient(){

    createNewPatient(this.props.usergroup).then((res) => {
      console.log(res)
      getAllPatientsForUsergroup(this.props.usergroup).then((result) => {
              // console.log(res)
              let newCurrent = result.length-1
              newCurrent = newCurrent.toString()
              this.setState({patients: result, redraw: true, currentpatient: newCurrent})
              setTimeout(() => {this.setState({redraw: false})} , 100);
            })
    })

  }

  render() {
    return (
          <div>
              { this.state.patients ? 
              <div id="main">

                      <div className="form-group">
                        <label className="label">Patient</label>

                        <div className="form-inline">
                          {!this.state.redraw ?
                                          <select class="form-control col-7" 
                                              selected={this.state.currentpatient}
                                              value={this.state.currentpatient} 
                                              onChange={(e) => this.handlePatientChange(e)}>
                                          {this.makePatients()}
                                        </select>
                                        : null }
                          <p>&nbsp;&nbsp;&nbsp;</p>
                          <button type="button" 
                                  onClick={() => this.createPatient()} 
                                  className="btn btn-info col-4">Add Patient</button>
                        </div>
                        
                      </div>


                      

                      <div class="card" >
                        <div class="card-body">
                            
                            

                            {/* PATIENT ID NUMBER */}
                              <div className="form-group">
                                <label className="label">Patient Medical Record Number</label>

                                <input 
                                      className="form-control" 
                                      onChange={(e) => this.handlePatientInfoChange(e, 'patientmedicalrecordno')}
                                      value={this.state.patients[this.state.currentpatient].patientmedicalrecordno} 
                                      placeholder={'Unique-Identification-Number-123'} />

                                
                              </div>
                            
                              <div className="form-group">
                                
                                {/* PATIENT NAME */}
                                  <label className="label">Patient Name</label>
                                 
                                  <input 
                                        className="form-control" 
                                        onChange={(e) => this.handlePatientInfoChange(e, 'name')}
                                        value={this.state.patients[this.state.currentpatient].name} 
                                        placeholder={'Jane Doe'} />


                                {/* DOB */}
                                  <label className="label">Date of Birth</label>
                                  <input 
                                        className="form-control" 
                                        onChange={(e) => this.handlePatientInfoChange(e, 'dob')}
                                        value={this.state.patients[this.state.currentpatient].dob} 
                                        placeholder={'01/20/1988'} />
                                
                              </div>


                            {/* PATIENT INFO BOX */}
                              <div className="">
                                <label className="label">Plan & Provider</label>
                                <div className="form-inline">
                                  <input 
                                          className="form-control" 
                                          onChange={(e) => this.handlePatientInfoChange(e, 'healthplan')}
                                          value={this.state.patients[this.state.currentpatient].healthplan} 
                                          placeholder={'Paperwork Labs Healthplan'} />
                                  <p>&nbsp;&nbsp;&nbsp;</p>
                                  <input 
                                          className="form-control" 
                                          onChange={(e) => this.handlePatientInfoChange(e, 'provider')}
                                          value={this.state.patients[this.state.currentpatient].provider}
                                          placeholder={'Paperwork Labs Provider'} />
                                  </div>
                              </div>
                              <button type="button" onClick={() => this.updatePatient()} className="btn btn-info">Save Patient Info</button>
                        </div>
                      </div>

                      <br />

                      <div class="card">
                        <div class="card-body">

                          {/* FORM SELECTOR */}
                            <div>
                              <label className="label">Form</label>
                              <select class="form-control" value={this.state.currentForm} onChange={(e) => this.handleChange(e, 'currentForm')}>
                                  <option value="prenatal">LAC CPSP 2017 Prenatal Assessment/Reassessment and Individualized Care Plan (17-pages)</option>
                                  <option value="postpartum">LAC CPSP 2017 Postpartum Assessment & ICP tool (6-pages)</option>
                              </select>
                            </div>

                          <br />

                        { !this.state.loading ?
                          <div>
                            { this.state.currentForm === 'prenatal' ? 
                                <PrenatalPage
                                    patient={this.state.patients[this.state.currentpatient]} 
                                    form={this.state.currentForm} /> 
                                : 
                                <PostpartumPage 
                                    patient={this.state.patients[this.state.currentpatient]} 
                                    form={this.state.currentForm} /> 
                            } 
                          </div>
                          : null }
                    
                    

                      </div>
                </div>
              </div>
              : null }
            </div> 

    );
  }
}
