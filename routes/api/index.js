const express = require('express');
const router = express.Router();

const Sticker = require('../../db/sticker');
const Patients = require('../../db/patients');

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();


const prenatal = require('./recipes/prenatal');
const postpartum = require('./recipes/postpartum');




router.use('/prenatal', prenatal);
router.use('/postpartum', postpartum);


router.get('/', function(req, res, next) {
	     
	        Patients.getByUser(1).then(patients => {
	          res.json(patients);
	        });
    	}
    )



router.get('/getform/:patientuid/:formName', function(req, res, next) {
			console.log('GET FORM', req.params.patientuid, req.params.formName)

			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });


	        client.query(`SELECT data FROM forms WHERE patientuid = '${req.params.patientuid}' AND formname = '${req.params.formName}';`, (err, queryResult) => { 
	        			res.send(queryResult.rows[0] ? queryResult.rows[0].data : {} )
	        		})

	        // Patients.getByUser(req.body.patientuid).then(patients => {
	        // 	          res.json(patients);
	        // 	        });
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
			
	        client.query(`
	        	INSERT INTO forms (formhash, patientuid, formname, data) VALUES ( '${req.params.patientuid}${req.params.formName}', '${req.params.patientuid}',  '${req.params.formName}', '${JSON.stringify(req.body)}')
	        	ON CONFLICT (formhash) DO UPDATE SET data = '${JSON.stringify(req.body)}';
	        	`, (err, queryResult) => { 
	        			res.send(`saved Form to user: ${req.params.patientuid}. results: ${queryResult}`)
	        		})
	        
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

	        client.query(`
	        	SELECT count(*) FROM forms where formname = '${formname}';
	        	`, (err, queryResult) => {
	        			res.send(queryResult.rows[0] ? queryResult.rows[0].data : {} )
	        		})
	        
    	}
    )

module.exports = router;