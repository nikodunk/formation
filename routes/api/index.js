const express = require('express');
const router = express.Router();

const Users = require('../../db/user');
const Workflows = require('../../db/workflow');

const admin = require("firebase-admin");

const serviceAccount = require("../../paperworklabs-firebase-adminsdk-7dyaq-0f6f3b29ff.json");

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



// WORKFLOWS
router.post('/workflows/create/:usergroup', function(req, res, next) {
	        
	        Workflows.createNew(req.params.usergroup).then(workflowuid => {
	          	res.json(workflowuid);	          
	        });


    	}
    )


router.get('/workflows/get/:usergroup', function(req, res, next) {

			
			// admin.auth().verifyIdToken(idToken)
			//   .then(function(decodedToken) {
			//     var uid = decodedToken.uid;
			//     // ...
			//   }).catch(function(error) {
			//     // Handle error
			//   });


	        Workflows.getAllWorkflowsByUsergroup(req.params.usergroup).then(workflows => {
	          res.json(workflows);
	          console.log('GOT ALL WORKFLOWS FOR USERGROUP', req.params.usergroup)
	        });


    	}
    )


router.post('/workflows/update/:workflowuid/', function(req, res, next) {
	        Workflows.update(req.params.workflowuid, req.body.workflowData).then(workflows => {
	          res.json(workflows);
	          console.log('UPDATED WORKFLOW ', req.params.workflowuid)
	        });


    	}
    )


router.post('/workflows/delete/:workflowuid/', function(req, res, next) {

	        Workflows.delete(req.params.workflowuid, req.body.workflowData).then(workflows => {
	          // console.log(workflows, req.params.usergroup)
	          res.json(workflows);
	          console.log('DELETED WORKFLOW ', req.params.workflowuid)
	        });


    	}
    )


module.exports = router;