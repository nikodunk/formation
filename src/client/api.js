const api = {

  


  loadForm(patientuid, formName){

        let uriBase = 'https://www.paperworklabs.com'
        // let urBase = process.env.NODE_ENV === 'development' 
        //  ? 'http://localhost:3000'
        //  : 'https://www.paperworklabs.com'

        fetch(`${uriBase}/api/getform/${patientuid}/${formName}`)
           .then(res => res.text())
           .then(json => { console.log(json); })
           .catch(error => { console.log(error) });
    },

  saveForm(patientuid, formName, formData ){

      let uriBase = 'https://www.paperworklabs.com'
              // let urBase = process.env.NODE_ENV === 'development' 
              //  ? 'http://localhost:3000'
              //  : 'https://www.paperworklabs.com'


      fetch(`${uriBase}/api/saveform/${patientuid}/${formName}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
      })
        .then(res => res.text()) 
        .then(json => { console.log(json); })
        .catch(error => { console.log(error) });
    }

}

module.exports = api;