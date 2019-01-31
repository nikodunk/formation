const express = require('express');
const router = express.Router();

const Users = require('../../db/user');
const Patients = require('../../db/patient');
const Forms = require('../../db/form');

// const { Client } = require('pg');
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();


// EXPORT
const prenatal = require('./recipes/prenatal');
const postpartum = require('./recipes/postpartum');
router.use('/prenatal', prenatal);
router.use('/postpartum', postpartum);




// PATIENTS
router.get('/patients/get/all', function(req, res, next) {
	     	
	        Patients.getAll().then(patients => {
	          res.json(patients);
	          console.log('GOT ALL PATIENTS')
	        });
    	}
    )



router.post('/patients/create/:usergroup', function(req, res, next) {
	        
	        Patients.createNew(req.params.usergroup).then(patientuid => {
	          
	          Forms.createFormsForNewPatient(patientuid[0]).then(forms => {
		          res.json(patientuid);
		          console.log('CREATED PATIENT ', patientuid[0])
		        });
	          
	        });


    	}
    )


router.get('/patients/get/:usergroup', function(req, res, next) {

	        Patients.getAllByUsergroup(req.params.usergroup).then(patients => {
	          res.json(patients);
	          console.log('GOT ALL PATIENTS FOR ', req.params.usergroup)
	        });


    	}
    )


router.post('/patients/update/:patientuid/', function(req, res, next) {

	        Patients.update(req.params.patientuid, req.body.patientData).then(patients => {
	          // console.log(patients, req.params.usergroup)
	          res.json(patients);
	          console.log('UPDATED PATIENT ', req.params.patientuid)
	        });


    	}
    )




// FORMS
router.get('/forms/get/all', function(req, res, next) {
	     	
	        Forms.getAll().then(forms => {
	          res.json(forms);
	          console.log('GOT ALL FORMS')
	        });
    	}
    )



router.get('/getform/:patientuid/:formName', function(req, res, next) {

			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });

			Forms.getByPatient(req.params.patientuid, req.params.formName).then(forms => {
			  // console.log(forms)
			  res.json(forms);
			  console.log('GOT FORMS FOR ', req.params.patientuid)
			});


    	}
    )

router.post('/updateform/:patientuid/:formName', function(req, res, next) {
			
			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });

			Forms.updateByPatient(req.params.patientuid, req.params.formName, JSON.stringify(req.body)).then(forms => {
			  res.json(forms);
			  console.log('UPDATED FORMS', req.params.patientuid, req.params.formName)
			});
			
	        
    	}
    )



// REPORTS
router.get('/getreportcount/:formname', function(req, res, next) {

			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });


	        Forms.getReportFormCount(req.params.formname).then(count => {
	          res.json(count);
	        });
	        
    	}
    )

module.exports = router;