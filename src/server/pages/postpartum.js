var express = require('express');
var router = express.Router();
const HummusRecipe = require('hummus-recipe');



/* POSTPARTUM */
router.post('/', function(req, res, next) {
  	const pdfDoc = new HummusRecipe(`./public/inputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`, `./public/outputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`);
  	
  	pdfDoc
  	     
        // ---------------------------------------------------------------
        // edit 1st page
  	    .editPage(1)

    

      	    // patient name
            .text(req.body.name ? req.body.name : ' ', 100, 73)
            

            // health plan
            .text(req.body.healthplan ? req.body.healthplan : ' ', 95, 91)
            
            // provider
            .text(req.body.provider ? req.body.provider : ' ', 95, 109)

            //case coordinator
            .text(req.body.coordinator ? req.body.coordinator : ' ', 120, 125)


            // ID number
            .text(req.body.patientuid ? req.body.patientuid : ' ', 420, 91)
            
            // DOB
            .text(req.body.dob ? req.body.dob : ' ', 430, 74)
            
            // hospital
            .text(req.body.hospital ? req.body.hospital : ' ', 440, 107)
            
            // ----------------------
            

            //filedinchart
            .text(req.body.filedinchart === 'Yes' ? 'x' : ' ', 171, 227)
            .text(req.body.filedinchart === 'No' ? 'x' : ' ', 202, 227)


            .text(req.body.gestationalageexact ? req.body.gestationalageexact : ' ', 110, 247)

            
            // gestationalage: '> 37 weeks',
            .text(req.body.gestationalage === '> 37 weeks' ? 'x' : ' ', 109, 261)
            .text(req.body.gestationalage === '< 37 weeks' ? 'x' : ' ', 43, 261)

            // deliverycomplications: 'No',
            .text(req.body.deliverycomplications === 'No' ? 'x' : ' ', 43, 294)
            .text(!['No'].includes(req.body.deliverycomplications) ? 'x' : ' ', 73, 294)
            .text(!['No'].includes(req.body.deliverycomplications) && req.body.deliverycomplications ? req.body.deliverycomplications : ' ', 103, 294)

            // multiplebirths: 'No',
            .text(req.body.multiplebirths === 'No' ? 'x' : ' ', 43, 334)
            .text(req.body.multiplebirths === 'Yes' ? 'x' : ' ', 73, 334)

            // infantpediatricprovider: ' ',
            .text(req.body.infantpediatricprovider === 'No' ? 'x' : ' ', 43, 376)
            .text(!['No'].includes(req.body.infantpediatricprovider) ? 'x' : ' ', 73, 376)
            .text(!['No'].includes(req.body.infantpediatricprovider) && req.body.infantpediatricprovider ? req.body.infantpediatricprovider : ' ', 135, 376)
            
            // infantcheckup: 'Yes, with no problems',
            .text(req.body.infantcheckup === 'Yes, with no problems.' ? 'x' : ' ', 47, 400)
            .text(req.body.infantcheckup === 'Yes, with no problems.' ? 'x' : ' ', 78, 414)
            .text(req.body.infantcheckup === 'No' ? 'x' : ' ', 47, 425)
            .text(req.body.infantcheckup === 'No' ? req.body.infantcheckupscheduled : ' ', 137, 427)
            .text(!['No', 'Yes, with no problems.'].includes(req.body.infantcheckup) ? 'x' : ' ', 107, 413)
            .text(!['No', 'Yes, with no problems.'].includes(req.body.infantcheckup) && req.body.infantcheckup ? req.body.infantcheckup : ' ', 170, 412)

            // need checkboxes
            // prenatal exposure to
            // postpartumcheckup: 'Yes, date:',
            
            // problemssincedelivery: 'No',
            .text(req.body.problemssincedelivery === 'No' ? 'x' : ' ', 43, 532)
            .text(!['No'].includes(req.body.problemssincedelivery) ? 'x' : ' ', 73, 532)
            .text(!['No'].includes(req.body.problemssincedelivery) && req.body.problemssincedelivery ? req.body.problemssincedelivery : ' ', 155, 532)

            
            // ownhealthinsurance: 'Yes',
            .text(req.body.ownhealthinsurance === 'Yes' ? 'x' : ' ', 43, 570)
            .text(req.body.ownhealthinsurance === 'No' ? 'x' : ' ', 76, 570)


            // totalpregnancyweightgain: '',
            .text(req.body.totalpregnancyweightgain ? req.body.totalpregnancyweightgain : ' ', 151, 603)
            // currentweight: '',
            .text(req.body.currentweight ? req.body.currentweight : ' ', 100, 618)
            // currentweightcategory: 'Normal',
            .text(req.body.currentweightcategory === 'Underweight' ? 'x' : ' ', 43, 650)
            .text(req.body.currentweightcategory === 'Normal' ? 'x' : ' ', 107, 650)
            .text(req.body.currentweightcategory === 'Overweight' ? 'x' : ' ', 149, 650)
            .text(req.body.currentweightcategory === 'Obese' ? 'x' : ' ', 207, 650)
            
            // postpartumweightgoal: '',
            .text(req.body.postpartumweightgoal ? req.body.postpartumweightgoal : ' ', 133, 665)

  	    .endPage()




        // -------------------------------------------------------------------------------------
  	    // edit 2nd page
  	    .editPage(2)

            // blooddatecollected: '',
            .text(req.body.blooddatecollected ? req.body.blooddatecollected : ' ', 126, 92)

            // bloodhgb: '',
            .text(req.body.bloodhgb ? req.body.bloodhgb : ' ', 93, 105)
            
            // bloodhct: '',
            .text(req.body.bloodhct ? req.body.bloodhct : ' ', 93, 119)

            // ogttdate: '',
            .text(req.body.ogttdate ? req.body.ogttdate : ' ', 94, 143)

            // ogttfasting: '',
            .text(req.body.ogttfasting ? req.body.ogttfasting : ' ', 106, 156)

            // ogtt2hr: '',
            .text(req.body.ogtt2hr ? req.body.ogtt2hr : ' ', 97, 170)

            // followupneededfor: '',
            .text(req.body.followupneededfor === 'Diabetes' ? 'x' : ' ', 45, 242)
            .text(req.body.followupneededfor === 'Hypertension' ? 'x' : ' ', 45, 256)
            .text(req.body.followupneededfor === 'Other' ? 'x' : ' ', 45, 269)
            .text(req.body.followupneededfor === 'N/A' ? 'x' : ' ', 45, 283)

            // prenatalvitamins: 'Yes',
            .text(req.body.prenatalvitamins === 'Yes' ? 'x' : ' ', 43, 367)
            .text(req.body.prenatalvitamins === 'No' ? 'x' : ' ', 75, 367)
            

            // // checkbox missing

            // dietadequate: 'Yes',
            .text(req.body.dietadequate === 'Yes' ? 'x' : ' ', 149, 467)
            .text(req.body.dietadequate === 'No' ? 'x' : ' ', 179, 466)

            // whatareyoufeedingyourbaby
            .text(req.body.whatareyoufeedingyourbaby === 'Breastmilk only' ? 'x' : ' ', 43, 519)
            .text(req.body.whatareyoufeedingyourbaby === 'Formula only' ? 'x' : ' ', 114, 519)
            .text(req.body.whatareyoufeedingyourbaby === 'Breastmilk + fomula' ? 'x' : ' ', 178, 519)

            // questionsaboutfeeding: 'No',
            .text(req.body.questionsaboutfeeding === 'Yes' ? 'x' : ' ', 43, 547)
            .text(req.body.questionsaboutfeeding === 'No' ? 'x' : ' ', 76, 547)
            .text(req.body.questionsaboutfeeding === 'N/A' ? 'x' : ' ', 106, 547)

            // wetdiapersperday: '',
            .text(req.body.wetdiapersperday ? req.body.wetdiapersperday : ' ', 115, 564)

            // feedingper24: '',
            .text(req.body.feedingper24 ? req.body.feedingper24 : ' ', 239, 582)

        .endPage()




        // ----------------------------------------------------------
        // //page3:
        .editPage(3)

            // breastfeedingcomfortable: 'Yes',
            // returningtowork: 'No',
            // // checkboxes missing
            // typeofformula: '',
            // formulawithiron: 'Yes',
            // formulaoztimesperday: '',
            // phq9: '0-4 (None - Minimal)',
            // supportyouneed: 'Yes',
            // difficultybabydemands: 'No',
            // changesinmood: 'No',
            // hoursofsleep: '',
            // abletosleepwhenbabyissleeping: 'Yes',
            // whensomeoneelseistakingcare: 'Yes',

        .endPage()





        // ----------------------------------------------------------
        // //page4:
        .editPage(4)

            // hit: 'No',
            // hithowmanytimes: '',
            // forcedsex: 'No',
            // forcedsexhowmanytimes: '',
            // everythingyouneedforbaby: 'Yes',

            // oralhealthproblems: 'No',
            // dentistlast6: 'Yes',
            // postpartumdiscomforts: 'No',
            // prescribedpastyear: 'No',
            // doyoudrinkalcohol: '',

        .endPage()





        // ----------------------------------------------------------
        // //page5
        .editPage(5)

            // smoketobacco: 'No',
            // pregnantnext18: 'No',
            // plansbirthcontrol: 'Yes',
            // partnereverpressuredbirthcontrol: 'Never',

            // dangerouschemicals: 'No',
            // questionsbabyssafety: 'No',
            // //checkboxes missing
            // outstandingissues: 'No',
            // completedby: '',

        .endPage()





        // ----------------------------------------------------------
        // //page6
        .editPage(6)

            // providersignature: '',
            // clientstrengths: '',

  	    .endPage()




  	.endPDF();

  	res.download(`./public/outputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`);
});




module.exports = router;