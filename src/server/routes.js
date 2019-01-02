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
			console.log(req.params.patientuid, req.params.formName)
	        // client.query(`SELECT name FROM patients WHERE patientid = '`+req.body.patientid+`';`, (err, queryResult) => { 
	        // 			res.send(queryResult)
	        // 		})
	        // console.log('gaggi')
	        res.send(`got Form ${req.params.formName}`)
    	}
    )


router.post('/saveform/:patientuid/:formName', function(req, res, next) {
			console.log(req.params.patientuid, req.params.formName, req.body)
	        client.query(`INSERT INTO forms VALUES ( '${req.params.patientuid}',  '${req.params.formName}', '${req.body}');`, (err, queryResult) => { 
	        			res.send(queryResult)
	        		})
	        res.send(`saved Form to user: ${req.params.patientuid}`)
    	}
    )

module.exports = router;