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
  	    .text('test', 44, 201)


  	    .endPage()

  	    // edit 2nd page
  	    .editPage(2)
  	    .endPage()

  	    .endPDF();

  	res.download(`./public/outputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`);
});




module.exports = router;