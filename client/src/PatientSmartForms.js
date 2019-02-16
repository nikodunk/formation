import React from 'react';

import { createNewPatient, getAllPatientsForUsergroup, updatePatient } from './api'

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = {
            workflow: 0,
            loading: false,
            redraw: false,

            hospital: null,
            
            workflows: null
          }
  }

  componentDidMount() {
    console.log(this.props.usergroup)
    getAllPatientsForUsergroup(this.props.usergroup).then((res) => {
            console.log(res)
            this.setState({workflows: res})
          })
  }



  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }

  handlePatientChange(e) {
    this.setState({loading: true})
    console.log(typeof e.target.value)
    this.setState({workflow: e.target.value})
    setTimeout(() => {this.setState({loading: false})} , 100);
  }

  handlePatientInfoChange(e, fieldname) {
    let newState = this.state
    newState['workflows'][this.state.workflow][fieldname] = e.target.value;
    this.setState(newState);
  }

  updatePatient(){
    updatePatient(this.props.patientuid, this.state.workflows[this.state.workflow])
  }

  makeworkflows(){
    let results = []
      for (var patient in this.state.workflows) {
          results.push( <option value={patient}>{this.state.workflows[patient].patientmedicalrecordno}</option>)
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
              this.setState({workflows: result, redraw: true, workflow: newCurrent})
              setTimeout(() => {this.setState({redraw: false})} , 100);
            })
    })

  }

  render() {
    return (
          <div>
              {/* WORKFLOW PICKER */}
              { this.state.workflows ? 
              <div id="main">

                      <div className="form-group">
                        <label className="label">Pick Workflow</label>

                        <div className="form-inline">
                          {!this.state.redraw ?
                                          <select class="form-control col-7" 
                                              selected={this.state.workflow}
                                              value={this.state.workflow} 
                                              onChange={(e) => this.handlePatientChange(e)}>
                                          {this.makeworkflows()}
                                        </select>
                                        : null }
                          <p>&nbsp;&nbsp;&nbsp;</p>
                          <button type="button" 
                                  onClick={() => this.createPatient()} 
                                  className="btn btn-info col-4">Add Workflow</button>
                        </div>
                      </div>


                      
                    {/* WORKFLOW EDITOR */}
                      <div class="card" >
                        <div class="card-body">

                              <div className="form-group">
                                <label className="label">Edit Workflow Name</label>

                                <input 
                                      className="form-control" 
                                      onChange={(e) => this.handlePatientInfoChange(e, 'patientmedicalrecordno')}
                                      value={this.state.workflows[this.state.workflow].patientmedicalrecordno} 
                                      placeholder={'Unique-Identification-Number-123'} />

                                
                              </div>
                            
                              <button type="button" onClick={() => this.updatePatient()} className="btn btn-info">Save Workflow Name</button>
                        </div>
                      </div>

                      <br />


                    {/* WORKFLOW DISPLAY AREA */}
                      <div class="card">
                        <div class="card-body">

                        <p>{this.state.workflows[this.state.workflow].name}</p>
                    
                      </div>
                </div>
              </div>
              : null }
            </div> 

    );
  }
}
