var express = require('express');
var router = express.Router();
const HummusRecipe = require('hummus-recipe');




/* POSTPARTUM */
router.post('/', function(req, res, next) {

    // admin.auth().verifyIdToken(idToken)
    //   .then(function(decodedToken) {
    //     var uid = decodedToken.uid;
    //     // ...
    //   }).catch(function(error) {
    //     // Handle error
    //   });
    

  	const pdfDoc = new HummusRecipe(`./public/inputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`, 
                                    `./public/outputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`);
  	
  	pdfDoc
  	     
        // ---------------------------------------------------------------
        // edit 1st page
  	    .editPage(1)

    

      	    // patient name
            //.text(req.body.name ? req.body.name : ' ', 100, 73)
            

   //          // health plan
   //          .text(req.body.healthplan ? req.body.healthplan : ' ', 95, 91)
            
   //          // provider
   //          .text(req.body.provider ? req.body.provider : ' ', 95, 109)

   //          //case coordinator
   //          .text(req.body.coordinator ? req.body.coordinator : ' ', 120, 125)


   //          // ID number
   //          .text(req.body.patientmedicalrecordno ? req.body.patientmedicalrecordno : ' ', 420, 91)
            
   //          // DOB
   //          .text(req.body.dob ? req.body.dob : ' ', 430, 74)
            
   //          // hospital
   //          .text(req.body.hospital ? req.body.hospital : ' ', 440, 107)
            
   //          // ----------------------
            

   //          // BABY MISSING 
            

   //          // ----------------------

   //          //filedinchart
   //          .text(req.body.filedinchart === 'Yes' ? 'x' : ' ', 171, 227)
   //          .text(req.body.filedinchart === 'No' ? 'x' : ' ', 202, 227)


   //          .text(req.body.gestationalageexact ? req.body.gestationalageexact : ' ', 110, 247)

            
   //          // gestationalage: '> 37 weeks',
   //          .text(req.body.gestationalage === '> 37 weeks' ? 'x' : ' ', 109, 261)
   //          .text(req.body.gestationalage === '< 37 weeks' ? 'x' : ' ', 43, 261)

   //          // deliverycomplications: 'No',
   //          .text(req.body.deliverycomplications === 'No' ? 'x' : ' ', 43, 294)
   //          .text(!['No'].includes(req.body.deliverycomplications) ? 'x' : ' ', 73, 294)
   //          .text(!['No'].includes(req.body.deliverycomplications) && req.body.deliverycomplications ? req.body.deliverycomplications : ' ', 103, 294)

   //          // multiplebirths: 'No',
   //          .text(req.body.multiplebirths === 'No' ? 'x' : ' ', 43, 334)
   //          .text(req.body.multiplebirths === 'Yes' ? 'x' : ' ', 73, 334)

   //          // infantpediatricprovider: ' ',
   //          .text(req.body.infantpediatricprovider === 'No' ? 'x' : ' ', 43, 376)
   //          .text(!['No'].includes(req.body.infantpediatricprovider) ? 'x' : ' ', 73, 376)
   //          .text(!['No'].includes(req.body.infantpediatricprovider) && req.body.infantpediatricprovider ? req.body.infantpediatricprovider : ' ', 135, 376)
            
   //          // infantcheckup: 'Yes, with no problems',
   //          .text(req.body.infantcheckup === 'Yes, with no problems.' ? 'x' : ' ', 47, 400)
   //          .text(req.body.infantcheckup === 'Yes, with no problems.' ? 'x' : ' ', 78, 414)
   //          .text(req.body.infantcheckup === 'No' ? 'x' : ' ', 47, 425)
   //          .text(req.body.infantcheckup === 'No' ? req.body.infantcheckupscheduled : ' ', 137, 427)
   //          .text(!['No', 'Yes, with no problems.'].includes(req.body.infantcheckup) ? 'x' : ' ', 107, 413)
   //          .text(!['No', 'Yes, with no problems.'].includes(req.body.infantcheckup) && req.body.infantcheckup ? req.body.infantcheckup : ' ', 170, 412)

   //          // need checkboxes
   //          // prenatal exposure to
   //          // postpartumcheckup: 'Yes, date:',
            
   //          // problemssincedelivery: 'No',
   //          .text(req.body.problemssincedelivery === 'No' ? 'x' : ' ', 43, 532)
   //          .text(!['No'].includes(req.body.problemssincedelivery) ? 'x' : ' ', 73, 532)
   //          .text(!['No'].includes(req.body.problemssincedelivery) && req.body.problemssincedelivery ? req.body.problemssincedelivery : ' ', 155, 532)

            
   //          // ownhealthinsurance: 'Yes',
   //          .text(req.body.ownhealthinsurance === 'Yes' ? 'x' : ' ', 43, 570)
   //          .text(req.body.ownhealthinsurance === 'No' ? 'x' : ' ', 76, 570)


   //          // totalpregnancyweightgain: '',
   //          .text(req.body.totalpregnancyweightgain ? req.body.totalpregnancyweightgain : ' ', 151, 603)
   //          // currentweight: '',
   //          .text(req.body.currentweight ? req.body.currentweight : ' ', 100, 618)
   //          // currentweightcategory: 'Normal',
   //          .text(req.body.currentweightcategory === 'Underweight' ? 'x' : ' ', 43, 650)
   //          .text(req.body.currentweightcategory === 'Normal' ? 'x' : ' ', 107, 650)
   //          .text(req.body.currentweightcategory === 'Overweight' ? 'x' : ' ', 149, 650)
   //          .text(req.body.currentweightcategory === 'Obese' ? 'x' : ' ', 207, 650)
            
   //          // postpartumweightgoal: '',
   //          .text(req.body.postpartumweightgoal ? req.body.postpartumweightgoal : ' ', 133, 665)


  	    .endPage()




   //      // -------------------------------------------------------------------------------------
  	//     // edit 2nd page
  	//     .editPage(2)

   //          // blooddatecollected: '',
   //          .text(req.body.blooddatecollected ? req.body.blooddatecollected : ' ', 126, 92)

   //          // bloodhgb: '',
   //          .text(req.body.bloodhgb ? req.body.bloodhgb : ' ', 93, 105)
            
   //          // bloodhct: '',
   //          .text(req.body.bloodhct ? req.body.bloodhct : ' ', 93, 119)

   //          // ogttdate: '',
   //          .text(req.body.ogttdate ? req.body.ogttdate : ' ', 94, 143)

   //          // ogttfasting: '',
   //          .text(req.body.ogttfasting ? req.body.ogttfasting : ' ', 106, 156)

   //          // ogtt2hr: '',
   //          .text(req.body.ogtt2hr ? req.body.ogtt2hr : ' ', 97, 170)

   //          // followupneededfor: '',
   //          .text(req.body.followupneededfor === 'Diabetes' ? 'x' : ' ', 45, 242)
   //          .text(req.body.followupneededfor === 'Hypertension' ? 'x' : ' ', 45, 256)
   //          .text(req.body.followupneededfor === 'Other' ? 'x' : ' ', 45, 269)
   //          .text(req.body.followupneededfor === 'N/A' ? 'x' : ' ', 45, 283)

   //          // prenatalvitamins: 'Yes',
   //          .text(req.body.prenatalvitamins === 'Yes' ? 'x' : ' ', 43, 367)
   //          .text(req.body.prenatalvitamins === 'No' ? 'x' : ' ', 75, 367)
            

   //          // // checkbox missing

   //          // dietadequate: 'Yes',
   //          .text(req.body.dietadequate === 'Yes' ? 'x' : ' ', 149, 467)
   //          .text(req.body.dietadequate === 'No' ? 'x' : ' ', 179, 466)

   //          // whatareyoufeedingyourbaby
   //          .text(req.body.whatareyoufeedingyourbaby === 'Breastmilk only' ? 'x' : ' ', 43, 519)
   //          .text(req.body.whatareyoufeedingyourbaby === 'Formula only' ? 'x' : ' ', 114, 519)
   //          .text(req.body.whatareyoufeedingyourbaby === 'Breastmilk + fomula' ? 'x' : ' ', 178, 519)

   //          // questionsaboutfeeding: 'No',
   //          .text(req.body.questionsaboutfeeding === 'Yes' ? 'x' : ' ', 43, 547)
   //          .text(req.body.questionsaboutfeeding === 'No' ? 'x' : ' ', 76, 547)
   //          .text(req.body.questionsaboutfeeding === 'N/A' ? 'x' : ' ', 106, 547)

   //          // wetdiapersperday: '',
   //          .text(req.body.wetdiapersperday ? req.body.wetdiapersperday : ' ', 115, 564)

   //          // feedingper24: '',
   //          .text(req.body.feedingper24 ? req.body.feedingper24 : ' ', 239, 582)

   //          .text(req.body.name ? req.body.name : ' ', 387, 742)
   //          .text(req.body.patientmedicalrecordno ? req.body.patientmedicalrecordno : ' ', 387, 758)
   //      .endPage()




   //      // ----------------------------------------------------------
   //      // //page3:
   //      .editPage(3)

   //          // breastfeedingcomfortable: 'Yes',
   //          .text(req.body.breastfeedingcomfortable === 'Yes' ? 'x' : ' ', 43, 105)
   //          .text(!['Yes'].includes(req.body.breastfeedingcomfortable) ? 'x' : ' ', 78, 105)
   //          .text(!['Yes'].includes(req.body.breastfeedingcomfortable) && req.body.breastfeedingcomfortable ? req.body.breastfeedingcomfortable : ' ', 101, 105)
            
   //          // returningtowork: 'No',
   //          .text(req.body.returningtowork === 'No' ? 'x' : ' ', 45, 144)
   //          .text(!['No'].includes(req.body.returningtowork) ? 'x' : ' ', 74, 144)
   //          .text(!['No'].includes(req.body.returningtowork) && req.body.returningtowork ? req.body.returningtowork : ' ', 101, 142)
            
   //          // checkboxes missing
            
   //          // typeofformula: '',
   //          .text(req.body.typeofformula ? req.body.typeofformula : ' ', 108, 248)
            
   //          // formulawithiron: 'Yes',
   //          .text(req.body.formulawithiron === 'Yes' ? 'x' : ' ', 93, 264)
   //          .text(req.body.formulawithiron === 'No' ? 'x' : ' ', 126, 264)

   //          // formulaoztimesperday: '',
   //          .text(req.body.formulaoztimesperday ? req.body.formulaoztimesperday : ' ', 50, 277)

   //          // phq9: '0-4 (None - Minimal)',
   //          .text(req.body.phq9 === '0-4 (None - Minimal)' ? 'x' : ' ', 46, 342)
   //          .text(req.body.phq9 === '5-9 (Mild)' ? 'x' : ' ', 46, 352)
   //          .text(req.body.phq9 === '10-14 (Moderate)' ? 'x' : ' ', 46, 367)
   //          .text(req.body.phq9 === '15-19 (Moderate Severe)' ? 'x' : ' ', 46, 379)
   //          .text(req.body.phq9 === '20-27 (Severe)' ? 'x' : ' ', 46, 391)

   //          // supportyouneed: 'Yes',
   //          .text(req.body.supportyouneed === 'Yes' ? 'x' : ' ', 44, 461)
   //          .text(!['Yes'].includes(req.body.supportyouneed) ? 'x' : ' ', 78, 461)
   //          .text(!['Yes'].includes(req.body.supportyouneed) && req.body.supportyouneed ? req.body.supportyouneed : ' ', 130, 461)
            
   //          // difficultybabydemands: 'No',
   //          .text(req.body.difficultybabydemands === 'No' ? 'x' : ' ', 44, 508)
   //          .text(!['No'].includes(req.body.difficultybabydemands) ? 'x' : ' ', 44, 521)
   //          .text(!['No'].includes(req.body.difficultybabydemands) && req.body.difficultybabydemands ? req.body.difficultybabydemands : ' ', 110, 521)

   //          // changesinmood: 'No',
   //          .text(req.body.changesinmood === 'No' ? 'x' : ' ', 44, 602)
   //          .text(!['No'].includes(req.body.changesinmood) ? 'x' : ' ', 72, 602)
   //          .text(!['No'].includes(req.body.changesinmood) && req.body.changesinmood ? req.body.changesinmood : ' ', 155, 602)


   //          // hoursofsleep: '',
   //          .text(req.body.hoursofsleep ? req.body.hoursofsleep : ' ', 209, 628)

   //          // abletosleepwhenbabyissleeping: 'Yes',
   //          .text(req.body.abletosleepwhenbabyissleeping === 'Yes' ? 'x' : ' ', 58, 660)
   //          .text(!['Yes'].includes(req.body.abletosleepwhenbabyissleeping) ? 'x' : ' ', 89, 660)
   //          .text(!['Yes'].includes(req.body.abletosleepwhenbabyissleeping) && req.body.abletosleepwhenbabyissleeping ? req.body.abletosleepwhenbabyissleeping : ' ', 170, 660)

   //          // whensomeoneelseistakingcare: 'Yes',
   //          .text(req.body.whensomeoneelseistakingcare === 'Yes' ? 'x' : ' ', 58, 701)
   //          .text(!['Yes'].includes(req.body.whensomeoneelseistakingcare) ? 'x' : ' ', 89, 701)
   //          .text(!['Yes'].includes(req.body.whensomeoneelseistakingcare) && req.body.whensomeoneelseistakingcare ? req.body.whensomeoneelseistakingcare : ' ', 170, 701)

   //          .text(req.body.name ? req.body.name : ' ', 387, 742)
   //          .text(req.body.patientmedicalrecordno ? req.body.patientmedicalrecordno : ' ', 387, 758)
   //      .endPage()



   //      // ----------------------------------------------------------
   //      // //page4:
   //      .editPage(4)

   //          // hit: 'No',
   //          .text(req.body.hit === 'No' ? 'x' : ' ', 40, 91)
   //          .text(!['No'].includes(req.body.hit) ? 'x' : ' ', 40, 103)
   //          .text(!['No'].includes(req.body.hit) && req.body.hit ? req.body.hit : ' ', 117, 103)

   //          // hithowmanytimes: '',
   //          .text(req.body.hithowmanytimes ? req.body.hithowmanytimes : ' ', 127, 116)

   //          // forcedsex: 'No',
   //          .text(req.body.forcedsex === 'No' ? 'x' : ' ', 40, 159)
   //          .text(!['No'].includes(req.body.forcedsex) ? 'x' : ' ', 40, 171)
   //          .text(!['No'].includes(req.body.forcedsex) && req.body.forcedsex ? req.body.forcedsex : ' ', 117, 171)

   //          // forcedsexhowmanytimes: '',
   //          .text(req.body.forcedsexhowmanytimes ? req.body.forcedsexhowmanytimes : ' ', 126, 185)

   //          // everythingyouneedforbaby: 'Yes',
   //          .text(req.body.everythingyouneedforbaby === 'Yes' ? 'x' : ' ', 42, 251)
   //          .text(!['Yes'].includes(req.body.everythingyouneedforbaby) ? 'x' : ' ', 42, 263)
   //          // checkboxes missing!
            
   //          // oralhealthproblems: 'No',
   //          .text(req.body.oralhealthproblems === 'No' ? 'x' : ' ', 40, 402)
   //          .text(!['No'].includes(req.body.oralhealthproblems) ? 'x' : ' ', 68, 402)
   //          .text(!['No'].includes(req.body.oralhealthproblems) && req.body.oralhealthproblems ? req.body.oralhealthproblems : ' ', 95, 403)

   //          // dentistlast6: 'Yes',
   //          .text(req.body.dentistlast6 === 'Yes' ? 'x' : ' ', 39, 427)
   //          .text(req.body.dentistlast6 === 'No' ? 'x' : ' ', 69, 427)


   //          // postpartumdiscomforts: 'No',
   //          .text(req.body.postpartumdiscomforts === 'No' ? 'x' : ' ', 39, 451)
   //          .text(!['No'].includes(req.body.postpartumdiscomforts) ? 'x' : ' ', 67, 451)
   //          .text(!['No'].includes(req.body.postpartumdiscomforts) && req.body.postpartumdiscomforts ? req.body.postpartumdiscomforts : ' ', 95, 451)

   //          // prescribedpastyear: 'No',
   //          .text(req.body.prescribedpastyear === 'No' ? 'x' : ' ', 39, 530)
   //          .text(!['No'].includes(req.body.prescribedpastyear) ? 'x' : ' ', 39, 542)
   //          .text(!['No'].includes(req.body.prescribedpastyear) && req.body.prescribedpastyear ? req.body.prescribedpastyear : ' ', 110, 542)

   //          // doyoudrinkalcohol: '',
   //          .text(req.body.doyoudrinkalcohol === 'No' ? 'x' : ' ', 39, 659)
   //          .text(req.body.doyoudrinkalcohol === 'Yes: less than 3 drinks/day or 7 drinks/week in the past 3 months' ? 'x' : ' ', 39, 672)
   //          .text(req.body.doyoudrinkalcohol === 'Yes: more than 3 drinks/day or 7 drinks/week in the past 3 months' ? 'x' : ' ', 39, 672)
   //          .text(req.body.doyoudrinkalcohol === 'Yes: less than 3 drinks/day or 7 drinks/week in the past 3 months' ? 'x' : ' ', 70, 672)
   //          .text(req.body.doyoudrinkalcohol === 'Yes: more than 3 drinks/day or 7 drinks/week in the past 3 months' ? 'x' : ' ', 70, 682)
            
   //          .text(req.body.name ? req.body.name : ' ', 387, 742)
   //          .text(req.body.patientmedicalrecordno ? req.body.patientmedicalrecordno : ' ', 387, 758)
   //      .endPage()





   //      // ----------------------------------------------------------
   //      // //page5
   //      .editPage(5)

   //          // smoketobacco: 'No',
   //          .text(req.body.smoketobacco === 'No' ? 'x' : ' ', 47, 92)
   //          .text(!['No'].includes(req.body.smoketobacco) ? 'x' : ' ', 47, 104)
   //          .text(!['No'].includes(req.body.smoketobacco) && req.body.smoketobacco ? req.body.smoketobacco : ' ', 85, 104)
            
   //          // pregnantnext18: 'No',
   //          .text(req.body.pregnantnext18 === 'No' ? 'x' : ' ', 48, 196)
   //          .text(!['No'].includes(req.body.pregnantnext18) ? 'x' : ' ', 48, 208)
   //          .text(!['No'].includes(req.body.pregnantnext18) && req.body.pregnantnext18 ? req.body.pregnantnext18 : ' ', 85, 209)

   //          // plansbirthcontrol: 'Yes',
   //          .text(req.body.plansbirthcontrolyes ? 'x' : ' ', 48, 262)
   //          .text(req.body.plansbirthcontrolyes ? req.body.plansbirthcontrolyes : ' ', 90, 262)
   //          .text(req.body.plansbirthcontrolno ? 'x' : ' ', 48, 274)
   //          .text(req.body.plansbirthcontrolno ? req.body.plansbirthcontrolno : ' ', 90, 275)
            

   //          // partnereverpressuredbirthcontrol: 'Never',
   //          .text(req.body.partnereverpressuredbirthcontrol === 'Never' ? 'x' : ' ', 48, 346)
   //          .text(req.body.partnereverpressuredbirthcontrol === 'Sometimes' ? 'x' : ' ', 48, 358)
   //          .text(req.body.partnereverpressuredbirthcontrol === 'Often' ? 'x' : ' ', 48, 370)

   //          // dangerouschemicals: 'No',
   //          .text(req.body.dangerouschemicals === 'No' ? 'x' : ' ', 50, 426)
   //          .text(!['No'].includes(req.body.dangerouschemicals) ? 'x' : ' ', 50, 439)
   //          .text(!['No'].includes(req.body.dangerouschemicals) && req.body.dangerouschemicals ? req.body.dangerouschemicals : ' ', 85, 439)

   //          // questionsbabyssafety: 'No',
   //          .text(req.body.questionsbabyssafety === 'No' ? 'x' : ' ', 50, 480)
   //          .text(!['No'].includes(req.body.questionsbabyssafety) ? 'x' : ' ', 50, 492)
   //          .text(!['No'].includes(req.body.questionsbabyssafety) && req.body.questionsbabyssafety ? req.body.questionsbabyssafety : ' ', 85, 492)

   //          // //checkboxes missing

   //          // outstandingissues: 'No',
   //          .text(req.body.outstandingissues === 'No' ? 'x' : ' ', 49, 630)
   //          .text(!['No'].includes(req.body.outstandingissues) ? 'x' : ' ', 49, 643)
   //          .text(!['No'].includes(req.body.outstandingissues) && req.body.outstandingissues ? req.body.outstandingissues : ' ', 85, 643)

   //          // completedby: '',
   //          .text(req.body.completedby ? req.body.completedby : ' ', 192, 689)
   //          // completeddate: '',
   //          .text(req.body.completeddate ? req.body.completeddate : ' ', 400, 689)
   //          // completedminutes: '',
   //          .text(req.body.completedminutes ? req.body.completedminutes : ' ', 506, 689)


   //          .text(req.body.name ? req.body.name : ' ', 387, 742)
   //          .text(req.body.patientmedicalrecordno ? req.body.patientmedicalrecordno : ' ', 387, 758)
   //      .endPage()





   //      // ----------------------------------------------------------
   //      // //page6
   //      .editPage(6)

   //          // providersignature: '',
   //          .text(req.body.providersignature ? req.body.providersignature : ' ', 36, 65)
   //          // providersignaturedate: '',
   //          .text(req.body.providersignaturedate ? req.body.providersignaturedate : ' ', 464, 65)

   //          // clientstrengths: '',
   //          .text(req.body.clientstrengths ? req.body.clientstrengths : ' ', 121, 110)


   //          // number: '',
   //          .text(req.body.number ? req.body.number : ' ', 32, 190)

   //          // problemriskconcern: '',
   //          .text(req.body.problemriskconcern ? req.body.problemriskconcern : ' ', 66, 190)

   //          // clientgoal: '',
   //          .text(req.body.clientgoal ? req.body.clientgoal : ' ', 223, 190)

   //          // updatesoutcomes: ''
   //          .text(req.body.updatesoutcomes ? req.body.updatesoutcomes : ' ', 384, 190)


   //          .text(req.body.name ? req.body.name : ' ', 387, 742)
   //          .text(req.body.patientmedicalrecordno ? req.body.patientmedicalrecordno : ' ', 387, 758)
  	//     .endPage()


  	.endPDF();


  	res.download(`./public/outputs/Postpartum Assessment & ICP tool LAC CPSP 2017.pdf`);
});




module.exports = router;