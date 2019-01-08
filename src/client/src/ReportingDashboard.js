import React, { Component } from 'react';

import {Bar, Doughnut} from 'react-chartjs-2';

import api from './api'

// import './app.css';



export default class ReportingDashboard extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            data: {
                          labels: [ "May", "June", "July", "August", "September", "October", "November", "December", "January"],
                          datasets: [{
                            label: "All forms (combined)",
                            backgroundColor: 'dodgerblue',
                            data: [12, 5, 10, 5, 2, 20, 30, 45, 4]
                          }]
                  },
            gestationalage: {
                          labels: ['> 37 weeks', '< 37 weeks'],
                          datasets: [{
                            backgroundColor: ['blue', 'dodgerblue'],
                            data: [25, 32]
                          }]
            },
            deliverycomplications: {
                          labels: ['No', 'Yes: C-Section', 'Yes: Labor too long'],
                          datasets: [{
                            backgroundColor: ['green', 'seagreen', 'aqua'],
                            data: [47, 12, 2]
                          }]
            },
            healthinsurance: {
                          labels: ['Yes', 'No'],
                          datasets: [{
                            backgroundColor: ['pink', 'orange'],
                            data: [47, 12]
                          }]
            },
          }
  }

  componentDidMount() {
    // fetch state
  }


  render() {
    return (
      <div>
          <div class="container-fluid">
            <div class="row">
              <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">
                        <span data-feather="home"></span>
                        Overview <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">
                        <span data-feather="file"></span>
                        CPSP Postpartum
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">
                        <span data-feather="shopping-cart"></span>
                        CPSP Prenatal
                      </a>
                    </li>
                  </ul>

                  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                      <span data-feather="plus-circle"></span>
                    </a>
                  </h6>
                  <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">
                        <span data-feather="file-text"></span>
                        Current month
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">
                        <span data-feather="file-text"></span>
                        Last quarter
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

              {/* SIDEBAR */}
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 class="h2">Report Dashboard</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                      <button class="btn btn-sm btn-outline-secondary">Share</button>
                      <button class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                      <span data-feather="calendar"></span>
                      This year
                    </button>
                  </div>
                </div>


              {/* TOTAL FORMS BAR */}
                <div className="container">
                  <h2>Total Forms (by month)</h2>
                  <Bar data={this.state.data} />
                </div>

                <br />
                <br />
                <hr />
                <br />
                <br />

              {/* FORM TYPE TABLE */}
                <div className="container">
                  <h2>Form Types</h2>
                  <div class="table-responsive">
                    <table class="table table-striped table-sm">
                      <thead>
                        <tr>
                          <th>Month</th>
                          <th>Forms #</th>
                          <th>Patients</th>
                          <th>Prenatal</th>
                          <th>Postpartum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.state.data.labels[0]}</td>
                          <td>{this.state.data.datasets[0].data[0]}</td>
                          <td>{this.state.data.datasets[0].data[0]}</td>
                          <td>{this.state.data.datasets[0].data[0] / 2}</td>
                          <td>{this.state.data.datasets[0].data[0] / 2}</td>
                        </tr>
                        <tr>
                          <td>{this.state.data.labels[1]}</td>
                          <td>{this.state.data.datasets[0].data[1]}</td>
                          <td>{this.state.data.datasets[0].data[1]}</td>
                          <td>{this.state.data.datasets[0].data[1] / 2}</td>
                          <td>{this.state.data.datasets[0].data[1] / 2}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <br />
                <br />
                <hr />
                <br />
                <br />

                <div className="container">

                  <div className="row">
                    <h2>CPSP Postpartum Responses</h2>
                  </div>

                  <br />

                  <div className="row">
                    <div className="col-6">
                      <h4 className="text-center">Reponses: Gestational age</h4>
                      <Doughnut data={this.state.gestationalage} />
                    </div>
                    <div className="col-6">
                      <h4 className="text-center">Reponses: Delivery Complications</h4>
                      <Doughnut data={this.state.deliverycomplications} />
                    </div>
                  </div>
                
                  <br /><br /><br />

                  <div className="row">
                    <div className="col-6">
                      <h4 className="text-center">Reponses: Health Insurance?</h4>
                      <Doughnut data={this.state.healthinsurance} />
                    </div>
                  </div>

                </div>

              
                <br />
                <br />
                <hr />
                <br />
                <br />

              </main>
            </div>
          </div>


          

      </div>
    );
  }
}
