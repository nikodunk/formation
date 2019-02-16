import React from 'react';
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

    // fetch PATIENTS, hospital etc for from usergroup this.props.user.uid
    getAllPatientsForUsergroup(this.props.usergroup).then((res) => {
            console.log(res)
            this.setState({patients: res})
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
              <p> hello </p>
            </div> 

    );
  }
}
