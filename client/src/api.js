// let uriBase = `https://${window.location.hostname}`
// let uriBase = 'http://localhost:8080'
let uriBase = window.location.hostname === 'localhost' 
          ? 'http://localhost:8080'
          : `http://${window.location.hostname}`


export function createNewPatient(usergroup){

    return fetch(`${uriBase}/api/patients/create/${usergroup}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }).then(res => {return res.json()})
  }


export async function getForm(patientuid, formName){

        let results = await fetch(`${uriBase}/api/getform/${patientuid}/${formName}`)
           .then(res => res.json())
           .then(json => { return json[0].data.formData })
           .catch(error => { console.log(error) });

        return results
    }



      

export async function getReportCount(formName){
      
      let results = await fetch(`${uriBase}/api/getreportcount/${formName}`)
         .then(res => res.text())
         .then(res => JSON.parse(res) )
         .then(json => { return json })
         .catch(error => { console.log(error) });

      return results
  }


export async function getPatientsAndInfoForUser(org){
    
    let results = await fetch(`${uriBase}/api/patients/get/${org}`)
                          .then(res => res.json())
                          .then(json => {console.log(json); return json })

    return results

  }

export function updateForm(patientuid, formName, formData ){

      fetch(`${uriBase}/api/updateform/${patientuid}/${formName}`, {
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

export function updatePatient(patientuid, patientData ){

      fetch(`${uriBase}/api/patients/update/${patientuid}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ patientData }),
      })
        .then(res => res.text()) 
        .then(json => { console.log(json); })
        .catch(error => { console.log(error) });
    }

export function downloadPDF(form, state, patient){
      fetch(`${uriBase}/api/${form}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ state, patient }),
      })
        .then(res => res.text()) 
        .then(json => { console.log(json); })
        .catch(error => { console.log(error) });
}

