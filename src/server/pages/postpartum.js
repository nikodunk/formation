var express = require('express');
var router = express.Router();
const HummusRecipe = require('hummus-recipe');
// const { Client } = require('pg');
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();



/* postpartum */
router.post('/', function(req, res, next) {
  	const pdfDoc = new HummusRecipe(`./public/inputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`, `./public/outputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`);
  	
  	pdfDoc
  	    // edit 1st page
  	    .editPage(1)

        
      // ----------------------


  	    // patient name
        .text(req.body.name ? req.body.name : ' ', 100, 73)
        



        // health plan
        .text('Paperwork Health Plan', 95, 91)
        
        // provider
        .text('Paperwork Health', 95, 109)

        //case coordinator
        .text('Casey Coordination', 120, 125)


        // ID number
        .text(req.body.uid ? req.body.uid : ' ', 420, 91)
        
        // DOB
        .text('01/20/1988', 430, 74)
        
        // hospital
        .text('Paperwork Demo Hospital', 440, 107)
        
        // ----------------------
        

        // 1. DELIVERY RECORD FILED IN CHART?
        .text(req.body.filedinchart === 'Yes' ? 'x' : ' ', 171, 227)
        .text(req.body.filedinchart === 'No' ? 'x' : ' ', 202, 227)


  	    .endPage()

  	    // edit 2nd page
  	    .editPage(2)
  	    .endPage()

  	    .endPDF();

  	res.download(`./public/outputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`);
});




module.exports = router;