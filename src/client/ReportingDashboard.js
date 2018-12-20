import React, { Component } from 'react';

import {Bar} from 'react-chartjs-2';




export default class ReportingDashboard extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            data: {
                          labels: ["June", "July", "August", "September", "October", "November", "December"],
                          datasets: [{
                            label: "Reports on all forms",
                            backgroundColor: 'dodgerblue',
                            data: [12, 5, 10, 5, 2, 20, 30, 45],
                          }]
                  }
          }
  }

  componentDidMount() {
    
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
                        Report Dashboard <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file"></span>
                        Orders
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="shopping-cart"></span>
                        Products
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="users"></span>
                        Customers
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        Reports
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Integrations
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
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Current month
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Last quarter
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Social engagement
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Year-end sale
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 class="h2">Reports Dashboard</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                      <button class="btn btn-sm btn-outline-secondary">Share</button>
                      <button class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                      <span data-feather="calendar"></span>
                      This week
                    </button>
                  </div>
                </div>

                {/*<canvas class="my-4" id="myChart" width="900" height="380"></canvas>*/}
                < Bar data={this.state.data} />

                <h2>Form Feedback</h2>
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
              </main>
            </div>
          </div>


          

      </div>
    );
  }
}
