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




  fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));



{/*<button onClick={this.makePDF.bind(this)}>
            Generate PDF Form
          </button>*/}