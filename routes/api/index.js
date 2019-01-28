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



router.get('/', function(req, res, next) {
	     
	        Forms.getAll().then(forms => {
	          res.json(forms);
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
			  res.json(forms);
			});


    	}
    )

router.post('/saveform/:patientuid/:formName', function(req, res, next) {
			console.log('POST FORM', req.params.patientuid, req.params.formName, JSON.stringify(req.body))


			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });

			Forms.insertByPatient(req.params.patientuid, req.params.formName, JSON.stringify(req.body)).then(forms => {
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