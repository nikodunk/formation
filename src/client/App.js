import React, { Component } from 'react';
import './app.css';

import ReportingDashboard from './ReportingDashboard'
import SmartForms from './SmartForms'

import imageUrl from '../../public/icon.png';

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = { 
            dashboard: false,

            userid: 'paperworklabs'
          }
  }

  componentDidMount() {
     // check that userid is logged in and fetch state
  }



  render() {
    return (
      <div>

          {/* NAVIGATION */}
          <nav className="navbar navbar-light  navbar-expand-md" >
            <img src={imageUrl} width="30" height="30" className="d-inline-block align-top" alt="" />
            <a className="navbar-brand" href="/app.html">
              paperwork labs
            </a>
            <span className="navbar-text" style={{marginRight: "auto"}}>
              Healthcare Form Automation
            </span>

            <div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link dodgerblue" onClick={() => this.setState({dashboard: false})}>
                    Smart Forms
                  </a>
                  
                  <a className="nav-item nav-link dodgerblue" onClick={() => this.setState({dashboard: true})}>
                    Report Dashboard
                  </a>
                  
                  <a className="nav-item nav-link" href="/">
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
