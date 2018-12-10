import React, { Component } from 'react';
import './app.css';

export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            username: null,
            input: 'gaggi'
          }
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }


  makePDF(){
    // console.log(this.state.input)
    fetch('/api/makepdf', {
        method: 'post',
        body: JSON.stringify({input: this.state.input}),
        headers: { 'Content-type': 'application/json' }
      })
     .then(res => res.json())
     .then(pdf => console.log(pdf))
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <input 
            value={this.state.input}
            onChange={this.handleChange}
            />
        <button onClick={this.makePDF.bind(this)}>
          Generate PDF Form
        </button>
      </div>
    );
  }
}
