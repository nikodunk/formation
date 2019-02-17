const express = require('express');
const router = express.Router();

const Users = require('../../db/user');
const Patients = require('../../db/patient');
const Forms = require('../../db/form');

const admin = require("firebase-admin");

const serviceAccount = require("../../paperworklabs-firebase-adminsdk-7dyaq-bf9a61493e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://paperworklabs.firebaseio.com"
});



// USER
router.get('/users/get/:uid/:idToken', function(req, res, next) {
	     	
	     	admin.auth().verifyIdToken(req.params.idToken)
	     	  .then(function(decodedToken) {
	     	    // var uid = decodedToken.uid;
	     	    // console.log(decodedToken.uid, req.params.uid)

	     	    if (decodedToken.uid === req.params.uid) {

	     	    		Users.getGroupByUID(req.params.uid).then(usergroup => {
	     	    		  res.json(usergroup);
	     	    		  console.log('GOT USERGROUP for user '+req.params.uid )
	     	    		});
	     	    }


	     	  }).catch(function(error) {
	     	    console.log('WRONG TOKEN', error)
	     	  });


	        
    	}
    )



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

			
			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });


	        Patients.getAllPatientsByUsergroup(req.params.usergroup).then(patients => {
	          res.json(patients);
	          console.log('GOT ALL PATIENTS FOR USERGROUP', req.params.usergroup)
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


module.exports = router;