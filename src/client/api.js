const api = {

  loadForm(){

        fetch('https://www.paperworklabs.com/api/')
           .then(res => res.text()) 
           .then(json => { console.log(json); })
           .catch(error => { console.log(error) });
    },

  saveForm(patientuid, formName, formData ){
      fetch('https://www.paperworklabs.com/api/'+patientuid+'/'+formName, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formdata: formData }),
      }).then((res) => console.log(res))
    }

}

module.exports = api;