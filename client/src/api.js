// let uriBase = `https://${window.location.hostname}`
// let uriBase = 'http://localhost:8080'
let uriBase = window.location.hostname === 'localhost' 
          ? 'http://localhost:8080'
          : `https://${window.location.hostname}`


export function createNewWorkflow(usergroup){

    return fetch(`${uriBase}/api/patients/create/${usergroup}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }).then(res => {return res.json()})
  }

export async function getUsergroup(uid, token){
      
      
      let usergroup = await fetch(`${uriBase}/api/users/get/${uid}/${token}`)
        .then(res => res.json()) 
        .then(json => { return json[0].usergroup})
        .catch(error => { console.log(error) });

      return usergroup
}



export async function getAllWorkflowsForUsergroup(org){
    
    let results = await fetch(`${uriBase}/api/patients/get/${org}`)
                          .then(res => res.json())
                          .then(json => {console.log(json); return json })

    return results

  }


export function updateWorkflow(patientuid, patientData ){

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

