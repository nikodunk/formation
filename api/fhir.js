const express = require('express');
const router = express.Router();

const mkFhir = require('fhir.js');
var client = mkFhir({
	// SMART FHIR server base url SANDBOX
    // baseUrl: 'https://r2.smarthealthit.org'
	
	// FHIR server base url COMMONWELL 
	// baseUrl: 'https://rest.api.commonwellalliance.org/',

	// FHIR server base url ECLINICALWORKS 
	 baseUrl: 'https://fhirstagingsrv.eclinicalweb.com/FHIRServer/fhir/AJDEAA/metadata'

      //auth: {
         //bearer: 'eyJhbGciOiJSU0.WnDYvpIAeZ72deHxz3roJDXQyhxx0wKaM.fiK51VwhsxJ-siBMR-YFiA',
         // bearer: 'mF_9.B5f-4.1JqM'
         // OR for basic auth
         // user: 'test',
         // pass: 'test'
      // },

    //   // Valid Options are 'same-origin', 'include'
    //   credentials: 'same-origin',
    //   headers: {
    //     'X-Custom-Header': 'Custom Value',
    //     'X-Another-Custom': 'Another Value',
    //   }
});

// FHIR.oauth2.ready(function(smart){
     // now do something cool
// });


router.get('/', function(req, res, next) {
	        res.send('bisi')
    	}
    )

router.get('/1', function(req, res, next) {
			console.log('RUNNING')
	        client
	            .search( {type: 'Patient', query: { 'birthdate': '1974' }})
	            .then((results) => {
					// patients = results.data
	                res.send(results.data)
	            })
	            .catch(function(res){
	                //Error responses
	                if (res.status){
	                    console.log('Error', res.status);
	                }

	                //Errors
	                if (res.message){
	                    console.log('Error', res.message);
	                }
	            });
	        
	        
    	}
    )










module.exports = router;