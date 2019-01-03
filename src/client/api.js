const api = {

  


  async loadForm(patientuid, formName){

        let uriBase = 'https://www.paperworklabs.com'
        // let urBase = process.env.NODE_ENV === 'development' 
        //  ? 'http://localhost:3000'
        //  : 'https://www.paperworklabs.com'
        

        let results = await fetch(`${uriBase}/api/getform/${patientuid}/${formName}`)
           .then(res => res.text())
           .then(res => JSON.parse(res) )
           .then(json => { return json.formData })
           .catch(error => { console.log(error) });

        return results
    },

  saveForm(patientuid, formName, formData ){

      let uriBase = 'https://www.paperworklabs.com'



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
    },

  async getReportCount(formName){
      
      let uriBase = 'https://www.paperworklabs.com'

      let results = await fetch(`${uriBase}/api/getreport/${formName}`)
         .then(res => res.text())
         .then(res => JSON.parse(res) )
         .then(json => { return json })
         .catch(error => { console.log(error) });

      return results
  }

}

module.exports = api;