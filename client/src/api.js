// let uriBase = `https://${window.location.hostname}`
// let uriBase = 'http://localhost:8080'
let uriBase = window.location.hostname === 'localhost' 
          ? 'http://localhost:8080'
          : `https://${window.location.hostname}`


// USERGROUP

export async function getUsergroup(uid, token){
      
      
      let usergroup = await fetch(`${uriBase}/api/users/get/${uid}/${token}`)
        .then(res => res.json()) 
        .then(json => { return json[0].usergroup})
        .catch(error => { console.log(error) });

      return usergroup
}



// WORKFLOWS

export function createNewWorkflow(usergroup){

    return fetch(`${uriBase}/api/workflows/create/${usergroup}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }).then(res => {return res.json()})
  }


export async function getAllWorkflowsForUsergroup(org){
    
    let results = await fetch(`${uriBase}/api/workflows/get/${org}`)
                          .then(res => res.json())
                          .then(json => {console.log(json); return json })

    return results

  }


export async function updateWorkflow(workflowuid, workflowData ){
  
      fetch(`${uriBase}/api/workflows/update/${workflowuid}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ workflowData }),
      })
        .then(res => res.text()) 
        .then(json => { console.log(json); })
        .catch(error => { console.log(error) });
    }


export async function deleteWorkflow(workflowuid, workflowData){
      console.log('DELETING')
      fetch(`${uriBase}/api/workflows/delete/${workflowuid}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ workflowData }),
      })
        .then(res => res.text()) 
        .then(json => { console.log(json); return json })
        .catch(error => { console.log(error) });
    }

