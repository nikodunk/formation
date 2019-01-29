const express = require('express');
const router = express.Router();

const Users = require('../../db/user');
const Patients = require('../../db/patient');
const Forms = require('../../db/form');

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();


const prenatal = require('./recipes/prenatal');
const postpartum = require('./recipes/postpartum');



router.get('/forms', function(req, res, next) {
	     
	        Forms.getAll().then(forms => {
	          res.json(forms);
	        });
    	}
    )

router.get('/patients/all', function(req, res, next) {
	     
	        Patients.getAll().then(patients => {
	          res.json(patients);
	        });
    	}
    )



router.post('/patients/create/:organisation', function(req, res, next) {
	     
	        Patients.createNew(req.params.organisation).then(patientuid => {

	          console.log(patientuid[0].toString())
	          Forms.createFormsForNewPatient(patientuid[0].toString()).then(forms => {
		          res.json(patientuid);
		        });
	          
	        });


    	}
    )

router.get('/patients/:organisation', function(req, res, next) {
	     	
	        Patients.getAllByOrganisation(req.params.organisation).then(patients => {
	          // console.log(patients, req.params.organisation)
	          res.json(patients);
	        });


    	}
    )


router.use('/prenatal', prenatal);
router.use('/postpartum', postpartum);


router.get('/getform/:patientuid/:formName', function(req, res, next) {
			console.log('GET FORM', req.params.patientuid, req.params.formName)

			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });

			Forms.getByPatient(req.params.patientuid, req.params.formName).then(forms => {
			  console.log(forms)
			  res.json(forms);
			});


    	}
    )

router.post('/updateform/:patientuid/:formName', function(req, res, next) {
			console.log('POST FORM', req.params.patientuid, req.params.formName, JSON.stringify(req.body))


			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });

			Forms.updateByPatient(req.params.patientuid, req.params.formName, JSON.stringify(req.body)).then(forms => {
			  res.json(forms);
			});
			
	        
    	}
    )

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