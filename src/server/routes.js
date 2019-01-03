var express = require('express');
var router = express.Router();

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();


router.get('/', function(req, res, next) {
	        res.send('gaggi')
    	}
    )

router.get('/getform/:patientuid/:formName', function(req, res, next) {
			console.log('GET FORM', req.params.patientuid, req.params.formName)
	        client.query(`SELECT data FROM forms WHERE patientuid = '${req.params.patientuid}' AND formname = '${req.params.formName}';`, (err, queryResult) => { 
	        			res.send(queryResult.rows[0].data ? queryResult.rows[0].data : {} )
	        			console.log(queryResult.rows[0].data)
	        		})
	        // res.send(`got Form ${req.params.formName}`)
    	}
    )

router.post('/saveform/:patientuid/:formName', function(req, res, next) {
			console.log(req.params.patientuid, req.params.formName, JSON.stringify(req.body))
	        client.query(`
	        	INSERT INTO forms VALUES ( '${req.params.patientuid}',  '${req.params.formName}', '${JSON.stringify(req.body)}')
	        	ON CONFLICT (patientuid, formname) DO UPDATE SET data = '${JSON.stringify(req.body)}';
	        	`, (err, queryResult) => { 
	        			console.log(queryResult)
	        		})
	        res.send(`saved Form to user: ${req.params.patientuid}`)
    	}
    )

module.exports = router;