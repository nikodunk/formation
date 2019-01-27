import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from './auth/firebase';

import './App.css';

import ReportingDashboard from './ReportingDashboard'
import SmartForms from './SmartForms'

import imageUrl from './icon.png';

export default class App extends React.Component {
  
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };


  constructor(props) {
      super(props);
      
      this.state = { 
            dashboard: false,
            isSignedIn: false,
            user: null
          }
  }

  componentDidMount() {
     // check that userid is logged in and fetch state
     this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      this.setState({isSignedIn: !!user})
      this.setState({ user: firebase.auth().currentUser })
     });
  }


  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }


  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>

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
                    
                    <a className="nav-item nav-link" onClick={() => {firebase.auth().signOut()}}>Logout</a>
                  </div>
                </div> 
              </div>

            </nav>

            
            {/* APP  */}
            <div style={{paddingTop: 55}}>
                
                {this.state.dashboard ? 
                    <ReportingDashboard user={this.state.user} /> : 
                    <SmartForms user={this.state.user} /> }
            </div>



        </div>
      </div>
    );
  }


}


                // displayName: displayName,
                // email: email,
                // emailVerified: emailVerified,
                // phoneNumber: phoneNumber,
                // photoURL: photoURL,
                // uid: uid,
                // accessToken: accessToken,
                // providerData: providerData



