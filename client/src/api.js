const api = {

  async loadForm(patientuid, formName){

        // let uriBase = 'https://www.paperworklabs.com'
        let uriBase = process.env.NODE_ENV === 'development' 
         ? 'http://localhost:8080'
         : 'https://www.paperworklabs.com'
        

        let results = await fetch(`${uriBase}/api/getform/${patientuid}/${formName}`)
           .then(res => res.json())
           .then(json => { return json[0].data.formData })
           .catch(error => { console.log(error) });

        return results
    },

  saveForm(patientuid, formName, formData ){

      let uriBase = process.env.NODE_ENV === 'development' 
               ? 'http://localhost:8080'
               : 'https://www.paperworklabs.com'

      // console.log(formData)

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
      
      let uriBase = process.env.NODE_ENV === 'development' 
               ? 'http://localhost:8080'
               : 'https://www.paperworklabs.com'

      let results = await fetch(`${uriBase}/api/getreportcount/${formName}`)
         .then(res => res.text())
         .then(res => JSON.parse(res) )
         .then(json => { return json })
         .catch(error => { console.log(error) });

      return results
  }

}

export default api;