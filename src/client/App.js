import React, { Component } from 'react';
import './app.css';

import ReportingDashboard from './ReportingDashboard'
import SmartForms from './SmartForms'

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            dashboard: false
          }
  }

  componentDidMount() {
    
  }



  render() {
    return (
      <div>

          {/* NAVIGATION */}
          <nav class="navbar navbar-light  navbar-expand-md" >
            <img src={'../../public/icon.png'} width="30" height="30" class="d-inline-block align-top" alt="" />
            <a class="navbar-brand" href="/app.html">
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
                  <a class="nav-item nav-link dodgerblue" onClick={() => this.setState({dashboard: false})}>
                    Smart Forms
                  </a>
                  <span class="nav-item nav-link"> | </span>
                  <a class="nav-item nav-link dodgerblue" onClick={() => this.setState({dashboard: true})}>
                    Report Dashboard
                  </a>
                  <span class="nav-item nav-link"> | </span>
                  <a class="nav-item nav-link" href="/">
                    Logout
                  </a>
                </div>
              </div> 
            </div>

          </nav>

          
          {/* APP  */}
          <div style={{paddingTop: 55}}>

              {this.state.dashboard ? 
                  <ReportingDashboard /> : 
                  <SmartForms /> }
          </div>



      </div>
    );
  }
}
