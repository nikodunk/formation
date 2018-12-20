import React, { Component } from 'react';
import '../app.css';

import InputRadio from '../inputComponents/InputRadio'
import InputRadioWithText from '../inputComponents/InputRadioWithText'


export default class PrenatalPage extends React.Component {


  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
          filedinchart: 'Yes',
          gestationalage: '> 37 weeks',
          deliverycomplications: 'No',
          multiplebirths: 'No',
          infantpediatricprovider: ' ',
          infantcheckup: 'Yes, with no problems',

          postpartumcheckup: 'Yes, date:',
          problemssincedelivery: 'No',
          ownhealthinsurance: 'Yes',

          currentweightcategory: 'Normal',
          

          //page2
          prenatalvitamins: 'Yes'

            
          }
  }

  componentDidMount() {
    mixpanel.track("Prenatal Loaded");
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
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


  render() {
    return (
      <div>


    {/* PAGE NAVS*/}
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="1-tab" data-toggle="tab" href="#p1" role="tab" >
            Page 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="2-tab" data-toggle="tab" href="#p2" role="tab">
            Page 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="3-tab" data-toggle="tab" href="#p3" role="tab">
            Page 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="4-tab" data-toggle="tab" href="#p4" role="tab">
            Page 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="5-tab" data-toggle="tab" href="#p5" role="tab">
            Page 5</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="6-tab" data-toggle="tab" href="#p6" role="tab">
            Page 6</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">



      {/* PAGE 1 */}
        <div class="tab-pane fade show active" id="p1" role="tabpanel" >
              

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
                  { this.makeRadios(['Yes', 'Yes, with no problems'], 'infantcheckup') }
                  <InputRadioWithText not={['Yes', 'Yes, with no problems']} value={'Yes, with problems. Describe:'} iter={"3"} var={'infantcheckup'} checked={this.state.infantcheckup}  handleChange={this.handleChange} />
              </div>

            {/* 7. Infant prenatal exposure to: (Check all that apply) */}
              <div className="box">
                  <span className="label">7. Infant prenatal exposure to: (Check all that apply)</span>
                  { this.makeRadios(['Tobacco', 'Alcohol', 'Drugs', 'Non-prescribed Medicine'], 'prenatalexposureto') }
              </div>


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
                        value={this.state.totalpregnancyweightgain} 
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


        <div class="tab-pane fade" id="p2" role="tabpanel" >
           {/* -----------------------   */}

             <h5>Nutrition: Biochemical (Postpartum)</h5>

           {/* 15. Blood – date collected: */}
             <div className="box">
                 <span className="label">15. Blood – date collected:</span>
                 <input onChange={(e) => this.handleChange(e, 'blooddatecollected')} value={this.state.blooddatecollected} placeholder={'eg. 143 lbs'} className="form-control" />

                 <span className="label">Hgb:</span>
                 <input onChange={(e) => this.handleChange(e, 'bloodhgb')} value={this.state.bloodhgb} placeholder={'eg. 143 lbs'} className="form-control" />

                 <span className="label">Hct</span>
                 <input onChange={(e) => this.handleChange(e, 'bloodhct')} value={this.state.bloodhct} placeholder={'eg. 143 lbs'} className="form-control" />
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
                 {/*{ this.makeRadios(['N/A'], 'ogttna') }*/}
             </div>

           {/* 18. Are you currently taking prenatal vitamins? */}
             <div className="box">
                 <span className="label">17. Are you currently taking prenatal vitamins?</span>
                 { this.makeRadios(['Yes', 'No'], 'prenatalvitamins') }
             </div>

           {/* -----------------------   */}
             <hr />
             <h5>Nutrition: Dietary</h5>

           {/* 19. Dietary intake assessment completed: */}
             

             <div className="box">
                 <span className="label">19. Dietary intake assessment completed?</span>
                 
                 {/* CHECKBOXES NEEDED: DIET ADEQUATE? */}
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
                  
                  {/* CHECKBOXES NEEDED*/}
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
              </div>


        </div>




      {/* PAGE 3 */}

        <div class="tab-pane  fade" id="p3" role="tabpanel" >
          
            <div className="box">
                <span className="label">24. Is breastfeeding comfortable for you?</span>
                
            </div>

            <div className="box">
                <span className="label">25. Are you planning on returning to work or school within the next 6 months?</span>
                
            </div>

            <div className="box">
                <span className="label">26. Do you have any of the following concerns?</span>
                
            </div>

            <div className="box">
                <span className="label">27. Type of formula:</span>
                                        
            </div>


            <hr />
            <h5>Psychosocial</h5>


            <div className="box">
                <span className="label">28. Patient Health Questionnaire 9 (PHQ-9)</span>
                                        
            </div>

            <div className="box">
                <span className="label">29. Are you getting the support you need from your family/partner?</span>
                                        
            </div>

            <div className="box">
                <span className="label">30. Are you having any difficulty coping with the demands of your baby?</span>
                                        
            </div>

            <div className="box">
                <span className="label">31. Have you had any changes in your mood since your baby was born?</span>
                                        
            </div>

            <div className="box">
                <span className="label">32a. How many hours of sleep are you getting?</span>
                                        
            </div>

            <div className="box">
                <span className="label">32b. Are you able to sleep when your baby is sleeping?</span>
                                        
            </div>

            <div className="box">
                <span className="label">32c. Are you able to sleep when someone else is taking care of the baby?</span>
                                        
            </div>



        </div>


      {/* PAGE 4 */}
        <div class="tab-pane  fade" id="p4" role="tabpanel" >
          <div className="box">
              <span className="label">33. Within the last year, have you been hit, slapped, kicked, choked, or otherwise physically hurt by someone?</span>
                                      
          </div>

          <div className="box">
              <span className="label">34. Within the last year, has anyonce forced you to have sexual activities?</span>
                                      
          </div>

          <div className="box">
              <span className="label">35. Do you feel like you have everything you need for your baby?</span>
                                      
          </div>


          <hr />
          <h5>Health Education</h5>


          <div className="box">
              <span className="label">36. Do you have any sore/bleeding gums, sensitive/loose teeth, bad taste or smell in your mouth, or other oral health problems?</span>
                                      
          </div>

          <div className="box">
              <span className="label">37. Have you seen a dentist in the last 6 months?</span>
                                      
          </div>

          <div className="box">
              <span className="label">38. Do you have any postpartum discomforts?</span>
                                      
          </div>

          <div className="box">
              <span className="label">39. Have you used drugs or medications other than as prescribed in the past year?</span>
                                      
          </div>

          <div className="box">
              <span className="label">40. Do you drink alcohol?</span>
                                      
          </div>
        </div>
        

      {/* PAGE 5 */}
        <div class="tab-pane  fade" id="p5" role="tabpanel" >
          <div className="box">
              <span className="label">41. Do you smoke any tobacco products (including hookah or vaping), or are you exposed to secondhand smoke?</span>
                                      
          </div>

          <div className="box">
              <span className="label">42. Would you like to become pregnant within the next 18 months?</span>
                                      
          </div>


          <hr />
          <h5>Health Education: Family Planning</h5>



          <div className="box">
              <span className="label">43. Any plans to use birth control?</span>
                                      
          </div>

          <div className="box">
              <span className="label">44. Has your partner ever pressured you to become pregnant, interfered with your birth control, or refused a condom?</span>
                                      
          </div>


          <hr />
          <h5>Health Education: Infant Safety & Care</h5>



          <div className="box">
              <span className="label">45. Are you around dangerous chemicals in your household, environment, or workplace?</span>
                                      
          </div>

          <div className="box">
              <span className="label">46. Do you have any questions about your baby's health or safety?</span>
                                      
          </div>

          <div className="box">
              <span className="label">47. Would you like more information on the following topics?</span>
                                      
          </div>


          <hr />
          <h5>Other</h5>



          <div className="box">
              <span className="label">48. Any other outstanding issues from the Prenatal Assessment/Reassessment?</span>
                                      
          </div>


          <div className="box">
              <span className="label">Postpartum Assessment Completed By:</span>
                                      
          </div>
        </div>



      {/* PAGE 6 */}
        <div class="tab-pane  fade" id="p6" role="tabpanel" >
          

          <hr />
          <h5>Provider Signature</h5>


          <h5>Client Strengths:</h5>


          <h5>Postpartum Individualized Care Plan Summary</h5>


        </div>




      </div>



        




      {/* -----------------------   */}
      
        
        <form  className="w-100" id="myForm" method="post" action="/api/postpartum" >
          <input type="hidden" value={this.props.uid} name="uid" />
          <input type="hidden" value={this.props.name} name="name" />
          
          <input type="hidden" value={this.state.filedinchart} name="filedinchart" />
          <input type="hidden" value={this.state.gestationalageexact} name="gestationalageexact" />
          <input type="hidden" value={this.state.gestationalage} name="gestationalage" />


          <input className='btn btn-primary w-100' type="submit" value="Export Completed PDF" onClick={mixpanel.track("Export PDF Pressed")} />
        </form>
        
      </div>
    );
  }
}
