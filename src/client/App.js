import React, { Component } from 'react';
import './app.css';

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            uid: 5,
            name: 'gaggi',
            downloadReady: false
          }
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }


  makePDF(){
    fetch('/api/makepdf', {
        method: 'post',
        body: JSON.stringify({uid: this.state.uid, name: this.state.name}),
        headers: { 'Content-type': 'application/json' }
      })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => this.setState({downloadReady: true}))
  }


  render() {
    const { username } = this.state;
    return (
      <div>
        <p>{this.state.uid}</p>
        <input 
            value={this.state.name}
            onChange={this.handleChange}
            />
        <div>
          <button onClick={this.makePDF.bind(this)}>
            Generate PDF Form
          </button>
          {this.state.downloadReady ?
            <form id="myForm" action={"/api/pdf/"+this.state.uid}>
              <input type="submit" value="Download" />
            </form>
          : null }
        </div>
        
      </div>
    );
  }
}
