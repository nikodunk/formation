import React, { Component } from 'react';
import '../app.css';

import InputRadio from '../inputComponents/InputRadio'
import InputRadioWithText from '../inputComponents/InputRadioWithText'

import api from '../api'


export default class PrenatalPage extends React.Component {


  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 

          //page1
          filedinchart: 'Yes',
          gestationalageexact: '',
          gestationalage: '> 37 weeks',
          deliverycomplications: 'No',
          multiplebirths: 'No',
          infantpediatricprovider: ' ',
          infantcheckup: 'Yes, with no problems.',
          infantcheckupscheduled: '',

          postpartumcheckup: 'Yes, date:',
          problemssincedelivery: 'No',
          ownhealthinsurance: 'Yes',

          totalpregnancyweightgain: '',
          currentweight: '',
          currentweightcategory: 'Normal',
          postpartumweightgoal: '',


          //page2
          blooddatecollected: '',
          bloodhgb: '',
          bloodhct: '',

          ogttdate: '',
          ogttfasting: '',
          ogtt2hr: '',

          followupneededfor: '',
          prenatalvitamins: 'Yes',
          // checkbox missing
          dietadequate: 'Yes',
          whatareyoufeedingyourbaby: 'Breastmilk only',
          questionsaboutfeeding: 'No',
          wetdiapersperday: '',
          feedingper24: '',



          //page3:
          breastfeedingcomfortable: 'Yes',
          returningtowork: 'No',
          // checkboxes missing
          typeofformula: '',
          formulawithiron: 'Yes',
          formulaoztimesperday: '',
          phq9: '0-4 (None - Minimal)',
          supportyouneed: 'Yes',
          difficultybabydemands: 'No',
          changesinmood: 'No',
          hoursofsleep: '',
          abletosleepwhenbabyissleeping: 'Yes',
          whensomeoneelseistakingcare: 'Yes',



          //page4:
          hit: 'No',
          hithowmanytimes: '',
          forcedsex: 'No',
          forcedsexhowmanytimes: '',
          everythingyouneedforbaby: 'Yes',

          oralhealthproblems: 'No',
          dentistlast6: 'Yes',
          postpartumdiscomforts: 'No',
          prescribedpastyear: 'No',
          doyoudrinkalcohol: '',



          //page5
          smoketobacco: 'No',
          pregnantnext18: 'No',
          plansbirthcontrol: 'Yes',
          partnereverpressuredbirthcontrol: 'Never',

          dangerouschemicals: 'No',
          questionsbabyssafety: 'No',
          //checkboxes missing
          outstandingissues: 'No',
          completedby: '',


          //page6
          providersignature: '',
          clientstrengths: '',

            
          }
  }

  componentDidMount() {
    mixpanel.track("Prenatal Loaded");
    api.loadForm(this.props.patientuid, this.props.form).then((res) => { console.log(res); this.setState(res) })
  } 

  // componentWillReceiveProps(props){
  //   if (props.patientuid !== this.props.patientuid || props.form !== this.props.form) {
  //     api.loadForm(props.patientuid, props.form).then((res) => { console.log(res); this.setState(res) })
  //   }
  // } 

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }

  saveForm(){
    api.saveForm(this.props.patientuid , this.props.form, this.state)
  }


  makeRadios(inputs, variableName){
    let results = []
    for (var i in inputs) {
        results.push(
          <InputRadio value={inputs[i]} iter={i} var={variableName} checked={this.state[variableName]}  handleChange={this.handleChange} />
          );
    }
    return results
  }

  makeHiddenInputs(){
    let results = []
    let keys = Object.keys(this.state)
    for (var i in keys) {
        results.push(
          <input type="hidden" value={this.state[keys[i]]} name={keys[i]} />
          );
    }
    return results
  }


  render() {
    return (
      <div>

              <form  className="w-100" id="myForm" method="post" action="/api/postpartum" >
                <input type="hidden" value={this.props.patientuid} name="patientuid" />
                
                <input type="hidden" value={this.props.name} name="name" />
                <input type="hidden" value={this.props.dob} name="dob" />
                <input type="hidden" value={this.props.healthplan} name="healthplan" />
                <input type="hidden" value={this.props.provider} name="provider" />
                <input type="hidden" value={this.props.coordinator} name="coordinator" />
                <input type="hidden" value={this.props.hospital} name="hospital" />
                
                {this.makeHiddenInputs()}

                <input className='btn btn-success' value="Save" onClick={() => { this.saveForm(); mixpanel.track("Save Pressed")}} />
                {'  '}
                <input className='btn btn-primary' type="submit" value="Export Completed PDF" onClick={() => mixpanel.track("Export PDF Pressed")} />
              </form>
      <br /><br />

    {/* PAGE NAVS*/}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="1-tab" data-toggle="tab" href="#p1" role="tab" >
            Page 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="2-tab" data-toggle="tab" href="#p2" role="tab">
            Page 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="3-tab" data-toggle="tab" href="#p3" role="tab">
            Page 3</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="4-tab" data-toggle="tab" href="#p4" role="tab">
            Page 4</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="5-tab" data-toggle="tab" href="#p5" role="tab">
            Page 5</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="6-tab" data-toggle="tab" href="#p6" role="tab">
            Page 6</a>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">



      {/* PAGE 1 */}
        <div className="tab-pane fade show active" id="p1" role="tabpanel" >
              

              {/*<h5>BABY MISSING</h5>*/}



              <h5>Clinical-Delivery</h5>

              

              {/*1. delivery record filed in chart */}
              <div className="box">
                  <span className="label">1. Delivery Record Filed in Chart?</span>
                  { this.makeRadios(['Yes', 'No'], 'filedinchart') }
              </div>

              

              {/* 2. gestational age */}
              <div className="box">
                  <span className="label">2. Gestational age:</span>
                  <input 
                        className="form-control" 
                        onChange={(e) => this.handleChange(e, 'gestationalageexact')}
                        value={this.state.gestationalageexact} 
                        placeholder={'eg. 40 weeks'} />
                  { this.makeRadios(['> 37 weeks', '< 37 weeks'], 'gestationalage') }
              </div>

            {/* 3. pregnancy/delivery complications */}
              <div className="box">
                  <span className="label">3. Pregnancy/Delivery complications?</span>
                  { this.makeRadios(['No'], 'deliverycomplications') }
                  <InputRadioWithText not={['No']} value={'Yes:'} iter={"2"} var={'deliverycomplications'} checked={this.state.deliverycomplications}  handleChange={this.handleChange} />
              </div>

            {/* 4. Client had multiple births? */}
              <div className="box">
                  <span className="label">4. Client had multiple births?</span>
                  { this.makeRadios(['No', 'Yes'], 'multiplebirths') }
              </div>

            {/* -----------------------   */}


              <hr />
              <h5>Clinical-Infant</h5>

            {/* 5. Infant has a pediatric provider? */}
              <div className="box">
                  <span className="label">5. Infant has a pediatric provider?</span>
                  { this.makeRadios(['No'], 'infantpediatricprovider') }
                  <InputRadioWithText not={['No']} value={'Yes, provider:'} iter={"2"} var={'infantpediatricprovider'} checked={this.state.infantpediatricprovider}  handleChange={this.handleChange} />
              </div>

            {/* 6. Has infant had a newborn check-up? */}
              <div className="box">
                  <span className="label">6. Has infant had a newborn check-up?</span>
                  { this.makeRadios(['No', 'Yes, with no problems.'], 'infantcheckup') }
                  <InputRadioWithText not={['Yes, with no problems.', 'No']} value={'Yes, with problems. Describe:'} iter={"2"} var={'infantcheckup'} checked={this.state.infantcheckup}  handleChange={this.handleChange} />
                  <span>If not, then scheduled:</span>
                  <input 
                        className="form-control" 
                        onChange={(e) => this.handleChange(e, 'infantcheckupscheduled')}
                        value={this.state.infantcheckupscheduled} 
                        placeholder={'05/20/2020'} />
              </div>

            {/* 7. Infant prenatal exposure to: (Check all that apply) */}
              <div className="box">
                  <span className="label">7. Infant prenatal exposure to: (Check all that apply)</span>
                  { this.makeRadios(['Tobacco', 'Alcohol', 'Drugs', 'Non-prescribed Medicine'], 'prenatalexposureto') }
              </div>

              {/* CHECKBOX MISSING */}
             
             
            {/* -----------------------   */}



              <hr />
              <h5>Clinical-Maternal</h5>

            {/* 8. Have you had a postpartum check-up? */}
              <div className="box">
                  <span className="label">8. Have you had a postpartum check-up?</span>
                  { this.makeRadios(['Yes, date:', 'No, when scheduled?'], 'postpartumcheckup') }
              </div>


            {/* 9. Any health problems since delivery? */}
              <div className="box">
                  <span className="label">9. Any health problems since delivery?</span>
                  { this.makeRadios(['No'], 'problemssincedelivery') }
                  <InputRadioWithText not={['No']} value={'Yes: please explain:'} iter={"2"} var={'problemssincedelivery'} checked={this.state.problemssincedelivery}  handleChange={this.handleChange} />
              </div>

            {/* 10. Doyouhavehealthinsurancesoyoucanreceiveyourown health care in the future? */}
              <div className="box">
                  <span className="label">10. Do you have health insurance so you can receive your own health care in the future?</span>
                  { this.makeRadios(['Yes', 'No'], 'ownhealthinsurance') }
              </div>

            
            {/* -----------------------   */}
            
              <hr />
              <h5>Nutrition: Anthropometric</h5>

            {/* 11. Totalpregnancyweightgain */}
              <div className="box">
                  <span className="label">11. Total pregnancy weight gain</span>
                  <input 
                        className="form-control" 
                        onChange={(e) => this.handleChange(e, 'totalpregnancyweightgain')}
                        value={ this.state.totalpregnancyweightgain } 
                        placeholder={'eg. 10 lbs'} />
              </div>

            {/* 12. Current weight */}
              <div className="box">
                  <span className="label">12. Current weight:</span>
                  <input 
                        className="form-control" 
                        onChange={(e) => this.handleChange(e, 'currentweight')}
                        value={this.state.currentweight} 
                        placeholder={'eg. 143 lbs'} />
              </div>


            {/* 13. Current weight category: */}
              <div className="box">
                  <span className="label">13. Current weight category:</span>
                  { this.makeRadios(['Underweight', 'Normal', 'Overweight', 'Obese'], 'currentweightcategory') }
              </div>

            {/* 14. Postpartum weight goal: */}
              <div className="box">
                  <span className="label">14. Postpartum weight goal:</span>
                  <input onChange={(e) => this.handleChange(e, 'postpartumweightgoal')} value={this.state.postpartumweightgoal} placeholder={'eg. 143 lbs'} className="form-control" />
              </div>


        </div>




      {/* PAGE 2 */}


        <div className="tab-pane fade" id="p2" role="tabpanel" >
           {/* -----------------------   */}

             <h5>Nutrition: Biochemical (Postpartum)</h5>

           {/* 15. Blood – date collected: */}
             <div className="box">
                 <span className="label">15. Blood – date collected:</span>
                 <input onChange={(e) => this.handleChange(e, 'blooddatecollected')} value={this.state.blooddatecollected} placeholder={'eg. 01/01/2011'} className="form-control" />

                 <span className="label">Hgb:</span>
                 <input onChange={(e) => this.handleChange(e, 'bloodhgb')} value={this.state.bloodhgb} placeholder={'eg. 13.5-17.5g'} className="form-control" />

                 <span className="label">Hct</span>
                 <input onChange={(e) => this.handleChange(e, 'bloodhct')} value={this.state.bloodhct} placeholder={'eg. 37%'} className="form-control" />
             </div>

           {/* -----------------------   */}
             <hr />
             <h5>Nutrition: Clinical</h5>

           {/* 16. OGTT – date: */}
             <div className="box">
                 <span className="label">16. OGTT – date:</span>
                 <input onChange={(e) => this.handleChange(e, 'ogttdate')} value={this.state.ogttdate} placeholder={'Date Collected'} className="form-control" />
                 <input onChange={(e) => this.handleChange(e, 'ogttfasting')} value={this.state.ogttfasting} placeholder={'Fasting'} className="form-control" />
                 <input onChange={(e) => this.handleChange(e, 'ogtt2hr')} value={this.state.ogtt2hr} placeholder={'2 Hr'} className="form-control" />
             </div>

           {/* 17. Follow up needed for: */}
             <div className="box">
                 <span className="label">17. Follow up needed for:</span>
                 { this.makeRadios(['Diabetes', 'Hypertension', 'Other', 'N/A'], 'followupneededfor') }
             </div>

             {/* CHECKBOXES NECESSARY */}
             <br /> CHECKBOXES MISSING


           {/* 18. Are you currently taking prenatal vitamins? */}
             <div className="box">
                 <span className="label">18. Are you currently taking prenatal vitamins?</span>
                 { this.makeRadios(['Yes', 'No'], 'prenatalvitamins') }
             </div>

           {/* -----------------------   */}
             <hr />
             <h5>Nutrition: Dietary</h5>

           {/* 19. Dietary intake assessment completed: */}
             

             <div className="box">
                 <span className="label">19. Dietary intake assessment completed?</span>
                 
                 {/* CHECKBOX MISSING */}

             </div>
             

             <div className="box">
                 <span className="label">Diet adequate as assessed?</span>
                 { this.makeRadios(['Yes', 'No'], 'dietadequate') }
             </div>

             <hr />
             <h5>Nutrition: Infant</h5>


            {/* 20. What are you feeding your baby? */}
              <div className="box">
                  <span className="label">20. What are you feeding your baby?</span>
                  { this.makeRadios(['Breastmilk only', 'Formula only', 'Breastmilk + fomula'], 'whatareyoufeedingyourbaby') }
              </div>

            {/* 21. Do you have questions about missing or feeding formula? */}
              <div className="box">
                  <span className="label">21. Do you have questions about missing or feeding formula?</span>
                  
                  { this.makeRadios(['Yes', 'No', 'N/A'], 'questionsaboutfeeding') }
              </div>

            {/* 22. Wet diapers/day:  */}
              <div className="box">
                  <span className="label">22. Wet diapers/day:</span>
                  
                  <input onChange={(e) => this.handleChange(e, 'wetdiapersperday')} value={this.state.wetdiapersperday} placeholder={'eg. 3'} className="form-control" />
              </div>

            {/* 23. How many times in 24 hours do you feed your baby?  */}
              <div className="box">
                  <span className="label">23. How many times in 24 hours do you feed your baby?</span>
                  
                  <input onChange={(e) => this.handleChange(e, 'feedingper24')} value={this.state.feedingper24} placeholder={'eg. 5 times'} className="form-control" />

                {/* CHECKBOX MISSING */}
                
              </div>


        </div>




      {/* PAGE 3 */}

        <div className="tab-pane  fade" id="p3" role="tabpanel" >
          
            <div className="box">
                <span className="label">24. Is breastfeeding comfortable for you?</span>
                { this.makeRadios(['Yes'], 'breastfeedingcomfortable') }
                <InputRadioWithText not={['Yes']} value={'No:'} iter={"1"} var={'breastfeedingcomfortable'} checked={this.state.breastfeedingcomfortable}  handleChange={this.handleChange} />
            </div>

            <div className="box">
                <span className="label">25. Are you planning on returning to work or school within the next 6 months?</span>
                { this.makeRadios(['No'], 'returningtowork') }
                <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'returningtowork'} checked={this.state.returningtowork}  handleChange={this.handleChange} />
            </div>

            <div className="box">
                <span className="label">26. Do you have any of the following concerns?</span>
                
                {/* CHECKBOX MISSING */}
                
            </div>

            <div className="box">
                <span className="label">27. If formula is used:</span>
              
               {/* CHECKBOX MISSING */}

               <p>Type of formula:</p>
               <input onChange={(e) => this.handleChange(e, 'typeofformula')} value={this.state.typeofformula} placeholder={''} className="form-control" />
               <br />

               <p>With Iron?</p>
               { this.makeRadios(['Yes', 'No'], 'formulawithiron') }
               <br />

               <p>Formula Ounces per day</p>
               <input onChange={(e) => this.handleChange(e, 'formulaoztimesperday')} value={this.state.formulaoztimesperday} placeholder={'eg. 3 oz. 5 times/day'} className="form-control" />
            </div>


            <hr />
            <h5>Psychosocial</h5>


            <div className="box">
                <span className="label">28. Patient Health Questionnaire 9 (PHQ-9)</span>
                { this.makeRadios(['0-4 (None - Minimal)', '5-9 (Mild)', '10-14 (Moderate)', '15-19 (Moderate Severe)', '20-27 (Severe)'], 'phq9') }
            </div>

            <div className="box">
                <span className="label">29. Are you getting the support you need from your family/partner?</span>
                { this.makeRadios(['Yes'], 'supportyouneed') }
                <InputRadioWithText not={['Yes']} value={'No, explain:'} iter={"1"} var={'supportyouneed'} checked={this.state.supportyouneed}  handleChange={this.handleChange} />
            </div>

            <div className="box">
                <span className="label">30. Are you having any difficulty coping with the demands of your baby?</span>
                { this.makeRadios(['No'], 'difficultybabydemands') }
                <InputRadioWithText not={['No']} value={'Yes, explain:'} iter={"1"} var={'difficultybabydemands'} checked={this.state.difficultybabydemands}  handleChange={this.handleChange} />
            </div>

            <div className="box">
                <span className="label">31. Have you had any changes in your mood since your baby was born?</span>
                { this.makeRadios(['No'], 'changesinmood') }
                <InputRadioWithText not={['No']} value={'Yes, explain:'} iter={"1"} var={'changesinmood'} checked={this.state.changesinmood}  handleChange={this.handleChange} />
            </div>

            <div className="box">
                <span className="label">32a. How many hours of sleep are you getting?</span>
                <input onChange={(e) => this.handleChange(e, 'hoursofsleep')} value={this.state.hoursofsleep} placeholder={''} className="form-control" />
            </div>

            <div className="box">
                <span className="label">32b. Are you able to sleep when your baby is sleeping?</span>
                { this.makeRadios(['Yes'], 'abletosleepwhenbabyissleeping') }
                <InputRadioWithText not={['Yes']} value={'No, please explain:'} iter={"1"} var={'abletosleepwhenbabyissleeping'} checked={this.state.abletosleepwhenbabyissleeping}  handleChange={this.handleChange} />
            </div>

            <div className="box">
                <span className="label">32c. Are you able to sleep when someone else is taking care of the baby?</span>
                { this.makeRadios(['Yes'], 'whensomeoneelseistakingcare') }
                <InputRadioWithText not={['Yes']} value={'No, please explain:'} iter={"1"} var={'whensomeoneelseistakingcare'} checked={this.state.whensomeoneelseistakingcare}  handleChange={this.handleChange} />
            </div>



        </div>


      {/* PAGE 4 */}
        <div className="tab-pane  fade" id="p4" role="tabpanel" >
          <div className="box">
              <span className="label">33. Within the last year, have you been hit, slapped, kicked, choked, or otherwise physically hurt by someone?</span>
              { this.makeRadios(['No'], 'hit') }
              <InputRadioWithText not={['No']} value={'Yes, by whom?'} iter={"1"} var={'hit'} checked={this.state.hit}  handleChange={this.handleChange} />
              <span >How many times?</span>
              <input onChange={(e) => this.handleChange(e, 'hithowmanytimes')} value={this.state.hithowmanytimes} placeholder={''} className="form-control" />
          </div>

          <div className="box">
              <span className="label">34. Within the last year, has anyonce forced you to have sexual activities?</span>
              { this.makeRadios(['No'], 'forcedsex') }
              <InputRadioWithText not={['No']} value={'Yes, by whom?'} iter={"1"} var={'forcedsex'} checked={this.state.forcedsex}  handleChange={this.handleChange} />
              <span >How many times?</span>
              <input onChange={(e) => this.handleChange(e, 'forcedsexhowmanytimes')} value={this.state.forcedsexhowmanytimes} placeholder={''} className="form-control" />  
          </div>

          <div className="box">
              <span className="label">35. Do you feel like you have everything you need for your baby?</span>
              { this.makeRadios(['Yes', 'No'], 'everythingyouneedforbaby') }

              {/* CHECKBOX MISSING */}
          </div>


          <hr />
          <h5>Health Education</h5>


          <div className="box">
              <span className="label">36. Do you have any sore/bleeding gums, sensitive/loose teeth, bad taste or smell in your mouth, or other oral health problems?</span>
              { this.makeRadios(['No'], 'oralhealthproblems') }
              <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'oralhealthproblems'} checked={this.state.oralhealthproblems}  handleChange={this.handleChange} />
          </div>

          <div className="box">
              <span className="label">37. Have you seen a dentist in the last 6 months?</span>
              { this.makeRadios(['Yes', 'No'], 'dentistlast6') }              
          </div>

          <div className="box">
              <span className="label">38. Do you have any postpartum discomforts?</span>
              { this.makeRadios(['No'], 'postpartumdiscomforts') }
              <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'postpartumdiscomforts'} checked={this.state.postpartumdiscomforts}  handleChange={this.handleChange} />
          </div>

          <div className="box">
              <span className="label">39. Have you used drugs or medications other than as prescribed in the past year?</span>
              { this.makeRadios(['No'], 'prescribedpastyear') }
              <InputRadioWithText not={['No']} value={'Yes, explain:'} iter={"1"} var={'prescribedpastyear'} checked={this.state.prescribedpastyear}  handleChange={this.handleChange} />
          </div>

          <div className="box">
              <span className="label">40. Do you drink alcohol?</span>
              { this.makeRadios(['No', 'Yes: less than 3 drinks/day or 7 drinks/week in the past 3 months', 'Yes: more than 3 drinks/day or 7 drinks/week in the past 3 months'], 'doyoudrinkalcohol') }
          </div>
        </div>
        

      {/* PAGE 5 */}
        <div className="tab-pane  fade" id="p5" role="tabpanel" >
          <div className="box">
              <span className="label">41. Do you smoke any tobacco products (including hookah or vaping), or are you exposed to secondhand smoke?</span>
              { this.makeRadios(['No'], 'smoketobacco') }
              <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'smoketobacco'} checked={this.state.smoketobacco}  handleChange={this.handleChange} />
          </div>


          <hr />
          <h5>Health Education: Family Planning</h5>

          <div className="box">
              <span className="label">42. Would you like to become pregnant within the next 18 months?</span>
              { this.makeRadios(['No'], 'pregnantnext18') }
              <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'pregnantnext18'} checked={this.state.pregnantnext18}  handleChange={this.handleChange} />
          </div>


          <div className="box">
              <span className="label">43. Any plans to use birth control?</span>
              { this.makeRadios(['Yes'], 'plansbirthcontrol') }
              <InputRadioWithText not={['Yes']} value={'No:'} iter={"1"} var={'plansbirthcontrol'} checked={this.state.plansbirthcontrol}  handleChange={this.handleChange} />
          </div>

          <div className="box">
              <span className="label">44. Has your partner ever pressured you to become pregnant, interfered with your birth control, or refused a condom?</span>
              { this.makeRadios(['Never', 'Sometimes', 'Often'], 'partnereverpressuredbirthcontrol') }
          </div>


          <hr />
          <h5>Health Education: Infant Safety & Care</h5>



          <div className="box">
              <span className="label">45. Are you around dangerous chemicals in your household, environment, or workplace?</span>
              { this.makeRadios(['No'], 'dangerouschemicals') }
              <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'dangerouschemicals'} checked={this.state.dangerouschemicals}  handleChange={this.handleChange} />
          </div>

          <div className="box">
              <span className="label">46. Do you have any questions about your baby's health or safety?</span>
              { this.makeRadios(['No'], 'questionsbabyssafety') }
              <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'questionsbabyssafety'} checked={this.state.questionsbabyssafety}  handleChange={this.handleChange} />
          </div>

          <div className="box">
              <span className="label">47. Would you like more information on the following topics?</span>
              
              {/* CHECKBOX MISSING */}
          </div>


          <hr />
          <h5>Other</h5>



          <div className="box">
              <span className="label">48. Any other outstanding issues from the Prenatal Assessment/Reassessment?</span>
              { this.makeRadios(['No'], 'outstandingissues') }
              <InputRadioWithText not={['No']} value={'Yes:'} iter={"1"} var={'outstandingissues'} checked={this.state.outstandingissues}  handleChange={this.handleChange} />
          </div>


          <div className="box">
              <span className="label">Postpartum Assessment Completed By:</span>
              <input onChange={(e) => this.handleChange(e, 'completedby')} value={this.state.completedby} placeholder={'Name & CPSP Title'} className="form-control" />  
          </div>
        </div>



      {/* PAGE 6 */}
        <div className="tab-pane  fade" id="p6" role="tabpanel" >
          
          <h5>Provider Signature</h5>
          <input onChange={(e) => this.handleChange(e, 'providersignature')} value={this.state.providersignature} placeholder={''} className="form-control" />  

          <h5>Client Strengths:</h5>
          <input onChange={(e) => this.handleChange(e, 'clientstrengths')} value={this.state.clientstrengths} placeholder={''} className="form-control" />  

          <h5>Postpartum Individualized Care Plan Summary</h5>
          <input onChange={(e) => this.handleChange(e, 'number')} value={this.state.number} placeholder={'#'} className="form-control" />  
          <input onChange={(e) => this.handleChange(e, 'problemriskconcern')} value={this.state.problemriskconcern} placeholder={'Problem/Risk/Concern'} className="form-control" />  
          <input onChange={(e) => this.handleChange(e, 'clientgoal')} value={this.state.clientgoal} placeholder={'Client Goal'} className="form-control" />  
          <input onChange={(e) => this.handleChange(e, 'updatesoutcomes')} value={this.state.updatesoutcomes} placeholder={'Updates & Outcomes'} className="form-control" />  

        </div>




      </div>



      <ul className="nav" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="btn active" id="1-tab" data-toggle="tab" href="#p1" role="tab" >
            Page 1</a>
        </li>
        <li className="nav-item">
          <a className="btn" id="2-tab" data-toggle="tab" href="#p2" role="tab">
            Page 2</a>
        </li>
        <li className="nav-item">
          <a className="btn" id="3-tab" data-toggle="tab" href="#p3" role="tab">
            Page 3</a>
        </li>
        <li className="nav-item">
          <a className="btn" id="4-tab" data-toggle="tab" href="#p4" role="tab">
            Page 4</a>
        </li>
        <li className="nav-item">
          <a className="btn" id="5-tab" data-toggle="tab" href="#p5" role="tab">
            Page 5</a>
        </li>
        <li className="nav-item">
          <a className="btn" id="6-tab" data-toggle="tab" href="#p6" role="tab">
            Page 6</a>
        </li>
      </ul>

      <br />
      <br />


      {/* -----------------------   */}
      
        
        <form  className="w-100" id="myForm" method="post" action="/api/postpartum" >
          <input type="hidden" value={this.props.patientuid} name="patientuid" />
          
          <input type="hidden" value={this.props.name} name="name" />
          <input type="hidden" value={this.props.dob} name="dob" />
          <input type="hidden" value={this.props.healthplan} name="healthplan" />
          <input type="hidden" value={this.props.provider} name="provider" />
          <input type="hidden" value={this.props.coordinator} name="coordinator" />
          <input type="hidden" value={this.props.hospital} name="hospital" />
          
          {this.makeHiddenInputs()}

          <input className='btn btn-success' value="Save" onClick={() => { this.saveForm(); mixpanel.track("Save Pressed")}} />
          {'  '}
          <input className='btn btn-primary' type="submit" value="Export Completed PDF" onClick={() => mixpanel.track("Export PDF Pressed")} />
        </form>
        
      </div>
    )}
}
