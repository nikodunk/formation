var express = require('express');
var router = express.Router();
const HummusRecipe = require('hummus-recipe');


/* PRENATAL */
router.post('/', function(req, res, next) {


     console.log('FINAL PRENATAL REQUEST RECEIVED')
     
     // admin.auth().verifyIdToken(idToken)
     //   .then(function(decodedToken) {
     //     var uid = decodedToken.uid;
     //     // ...
     //   }).catch(function(error) {
     //     // Handle error
     //   });

     
  	const pdfDoc = new HummusRecipe(`./public/inputs/Prenatal Assessment & ICP LAC CPSP 2017.pdf`, 
                                     `./public/outputs/Prenatal Assessment & ICP LAC CPSP 2017.pdf`);
      
      pdfDoc
          // edit 1st page
          .editPage(1)
          

         // ----------------------

          // patient name
          .text(req.body.name ? req.body.name : ' ', 100, 87)

          // health plan
          .text('Paperwork Health Plan', 95, 106)
          
          // ID number
          .text(req.body.patientuid ? req.body.patientuid : ' ', 480, 105)

          // provider
          .text('Paperwork Health', 90, 123)

          // coordinator
          .text('Casey Coordination', 120, 141)

          // hospital
          .text('Paperwork Demo Hospital', 440, 123)

          // DOB
          .text('01/20/1988', 460, 87)

          
        // ----------------------




        // 1. client age      
          .text(req.body.age === 'Less than 12 years' ? 'x' : ' ', 44, 201)
          .text(req.body.age === '12-17 years' ? 'x' : ' ', 44, 211)
          .text(req.body.age === '18-34 years' ? 'x' : ' ', 44, 222)
          .text(req.body.age === '35 years or older' ? 'x' : ' ', 44, 232)

          // 2. are you married
          .text(req.body.areyoumarried === 'Married' ? 'x' : ' ', 89, 288)
          .text(req.body.areyoumarried === 'Living with partner' ? 'x' : ' ', 89, 298)
          .text(req.body.areyoumarried === 'In a relationship' ? 'x' : ' ', 89, 310)
          .text(req.body.areyoumarried === 'Single' ? 'x' : ' ', 183, 288)
          .text(req.body.areyoumarried === 'Divorced/Separated' ? 'x' : ' ', 183, 298)
          .text(req.body.areyoumarried === 'Widowed' ? 'x' : ' ', 183, 310)
          .text(!['Married','Living with partner','In a relationship','Single','Divorced/Separated','Widowed'].includes(req.body.areyoumarried)  ? 'x' : ' ', 89, 320)
          .text(!['Married','Living with partner','In a relationship','Single','Divorced/Separated','Widowed'].includes(req.body.areyoumarried) && req.body.areyoumarried ? req.body.areyoumarried : ' ', 119, 320)

          // 3. how long have you lived
          .text(req.body.howlongcurrenthome === 'Over one year' ? 'x' : ' ', 43, 346)
          .text(!['Over one year'].includes(req.body.howlongcurrenthome) ? 'x' : ' ', 43, 356)
          .text(!['Over one year'].includes(req.body.howlongcurrenthome) && req.body.howlongcurrenthome ? req.body.howlongcurrenthome : ' ', 183, 356)
          
          // 4. do you plan to stay
          .text(req.body.stayinthisarea === 'Yes' ? 'x' : ' ', 44, 402)
          .text(req.body.stayinthisarea === 'No' ? 'x' : ' ', 44, 412)
          .text(req.body.stayinthisarea === 'Unsure' ? 'x' : ' ', 44, 422)

          // 5. 
          .text(req.body.howmanyyearsschool === '0-8 years' ? 'x' : ' ', 42, 448)
          .text(req.body.howmanyyearsschool === '9-11 years' ? 'x' : ' ', 42, 458)
          .text(req.body.howmanyyearsschool === '12-16 years' ? 'x' : ' ', 42, 468)
          .text(req.body.howmanyyearsschool === '16+ years' ? 'x' : ' ', 42, 479)

          // 6. 
          .text(req.body.preferredlanguagespeak === 'English' ? 'x' : ' ', 43, 514)
          .text(req.body.preferredlanguagespeak === 'Spanish' ? 'x' : ' ', 43, 524)
          .text(!['English', 'Spanish'].includes(req.body.preferredlanguagespeak) ? 'x' : ' ', 43, 534)
          .text(!['English', 'Spanish'].includes(req.body.preferredlanguagespeak) && req.body.preferredlanguagespeak ? req.body.preferredlanguagespeak : ' ', 83, 534)

          //7
          .text(req.body.howyouread === 'Like to read and read often' ? 'x' : ' ', 46, 559)
          .text(req.body.howyouread === 'Can read, but don’t read very often' ? 'x' : ' ', 46, 569)
          .text(req.body.howyouread === 'Can’t read' ? 'x' : ' ', 46, 579)

          //8
          .text(req.body.fathername ? req.body.fathername : ' ', 70, 622)
          .text(req.body.fatherlanguage ? req.body.fatherlanguage : ' ', 70, 638)
          .text(req.body.fathereducation ? req.body.fathereducation : ' ', 70, 653)
          .text(req.body.fatherage ? req.body.fatherage : ' ', 70, 668)

          .endPage()

          // edit 2nd page
          .editPage(2)
          .endPage()

          .endPDF();

      res.download(`./public/outputs/Prenatal Assessment & ICP LAC CPSP 2017.pdf`);
});




module.exports = router;