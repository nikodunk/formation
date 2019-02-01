import React from 'react';

import InputRadio from '../inputComponents/InputRadio'
import InputRadioWithText from '../inputComponents/InputRadioWithText'

import { getForm, updateForm } from '../api'

export default class PrenatalPage extends React.Component {


  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            age: '18-34 years',
            areyoumarried: 'Living with partner',
            howlongcurrenthome: 'Over one year',
            stayinthisarea: 'Yes',
            howmanyyearsschool: '12-16 years',
            preferredlanguagespeak: 'English',
            howyouread: 'Like to read and read often',
            fathername: 'John Doe',
            fatherlanguage: 'English',
            fathereducation: 'High School',
            fatherage: '31',


            //PAGE 2
            plannedpregnancy: 'Yes',
            plannedpregnancy: 'Yes',
            abortionoradoption: 'No'
          }
  }

  componentDidMount() {
    // mixpanel.track("Prenatal Loaded");
    getForm(this.props.patient.patientuid, this.props.form).then((res) => { console.log(res); this.setState(res) })
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }


  updateForm(){

    updateForm(this.props.patient.patientuid, this.props.form, this.state)
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

                <form  className="w-100" id="myForm" method="post" action={process.env.NODE_ENV === "development" ? "http://"+window.location.hostname+":8080/api/prenatal" : "/api/prenatal" } >
                  <input type="hidden" value={this.props.patient.patientmedicalrecordno} name="patientmedicalrecordno" />
                  <input type="hidden" value={this.props.patient.name} name="name" />
                  <input type="hidden" value={this.props.patient.dob} name="dob" />
                  <input type="hidden" value={this.props.patient.healthplan} name="healthplan" />
                  <input type="hidden" value={this.props.patient.provider} name="provider" />
                  <input type="hidden" value={this.props.patient.coordinator} name="coordinator" />
                  <input type="hidden" value={this.props.patient.hospital} name="hospital" />
         
                  <input type="hidden" value={this.state.age} name="age" />
                  <input type="hidden" value={this.state.areyoumarried} name="areyoumarried" />
                  <input type="hidden" value={this.state.howlongcurrenthome} name="howlongcurrenthome" />
                  <input type="hidden" value={this.state.stayinthisarea} name="stayinthisarea" />
                  <input type="hidden" value={this.state.howmanyyearsschool} name="howmanyyearsschool" />
                  <input type="hidden" value={this.state.preferredlanguagespeak} name="preferredlanguagespeak" />
                  <input type="hidden" value={this.state.howyouread} name="howyouread" />

                  <input type="hidden" value={this.state.fathername} name="fathername" />
                  <input type="hidden" value={this.state.fatherlanguage} name="fatherlanguage" />
                  <input type="hidden" value={this.state.fathereducation} name="fathereducation" />
                  <input type="hidden" value={this.state.fatherage} name="fatherage" />

                  <input className='btn btn-success' value="Save Form" onClick={() => { this.updateForm() }} />
                  {'  '}
                  <input className='btn btn-primary' type="submit" value="Export Completed PDF"  />
                </form>

      <br /><br />
        
      {/* PAGE NAVS*/}
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="1-tab" data-toggle="tab" href="#p1" role="tab" >
              Page 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="2-tab" data-toggle="tab" href="#p2" role="tab" >
              Page 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="3-tab" data-toggle="tab" href="#p3" role="tab" >
              Page 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="4-tab" data-toggle="tab" href="#p4" role="tab" >
              Page 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="5-tab" data-toggle="tab" href="#p5" role="tab" >
              Page 5</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="6-tab" data-toggle="tab" href="#p6" role="tab" >
              Page 6</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="7-tab" data-toggle="tab" href="#p7" role="tab" >
              Page 7</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="8-tab" data-toggle="tab" href="#p8" role="tab" >
              Page 8</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="9-tab" data-toggle="tab" href="#p9" role="tab" >
              Page 9</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="10-tab" data-toggle="tab" href="#p10" role="tab" >
              Page 10</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="11-tab" data-toggle="tab" href="#p11" role="tab" >
              Page 11</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="12-tab" data-toggle="tab" href="#p12" role="tab" >
              Page 12</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="13-tab" data-toggle="tab" href="#p13" role="tab" >
              Page 13</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="14-tab" data-toggle="tab" href="#p14" role="tab" >
              Page 14</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="15-tab" data-toggle="tab" href="#p15" role="tab" >
              Page 15</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="16-tab" data-toggle="tab" href="#p16" role="tab" >
              Page 16</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="17-tab" data-toggle="tab" href="#p17" role="tab" >
              Page 17</a>
          </li>
          
        </ul>
        <div class="tab-content" id="myTabContent">



        {/* PAGE 1 */}
        <div class="tab-pane fade show active" id="p1" role="tabpanel" >
          <div className="row">
            <div className="col-6">

              {/*1. client age*/}
              <div className="box">
                  <span className="label">1. Client Age</span>
                  { this.makeRadios(['Less than 12 years', '12-17 years', '18-34 years', '35 years or older'], 'age') }
              </div>

            </div>
            <div className="col-6">

                <p><b>Intervention/Referral</b>:</p>
                <div>
                  <input type={'checkbox'} />
                  <span> Reviewed/discussed STT FS: Approaching Clients of Different Ages</span>
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Reviewed/discussed STT PSY: Teen Pregnancy and Parenting</span>
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Child Abuse Report filed (if younger than 18 and abuse suspected)/date: </span>
                  <input />
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Discussed importance of genetic counseling (if over 35) </span>
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Signed up for Text4Baby by texting BABY or (BEBE for Spanish) to 511411 </span>
                  <input />
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Referred to Adolescent Family Life Program/date: </span>
                  <input />
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Referred to home visitation program/date: </span>
                  <input />
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Referred to/date: </span>
                  <input />
                </div>


                {/*<b>Intervention/Referral</b>:
                 Reviewed/discussed 
                □ STT FS: Approaching Clients of Different Ages
                □ STT PSY: Teen Pregnancy and Parenting
                 Child Abuse Report filed (if younger than 18 and abuse suspected)/date: ______
                 Discussed importance of genetic counseling (if over 35)
                 Signed up for Text4Baby by texting BABY or (BEBE for Spanish) to 511411
                 Referred to Adolescent Family Life Program/date:_______________________
                 Referred to home visitation program/date:______________________________
                 Referred to/date:__________________________________________________*/}
                



            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">





            {/* 2. are you married etc */}
              <div className="box">
                  <span className="label">2. Are you:</span>
                  { this.makeRadios(['Married', 'Living with partner', 'In a relationship', 'Single', 'Divorced/Separated', 'Widowed'], 'areyoumarried') }
                  <InputRadioWithText not={['Married', 'Living with partner', 'In a relationship', 'Single', 'Divorced/Separated', 'Widowed']}
                              value={'Other:'} iter={"7"} var={'areyoumarried'} checked={this.state.areyoumarried}  handleChange={this.handleChange} />
              </div>





            </div>
            <div className="col-6">




                <p><b>Intervention/Referral</b>:</p>
                <div>
                  <input type={'checkbox'} />
                  <span> Referred to/date: </span>
                  <input />
                </div>


                {/*<b>Intervention/Referral</b>:
                 Referred to/date:__________________________________________________*/}
      
                
            </div>
          </div>
          <div className="row">
            <div className="col-6">




            {/* 3. how long have you lived in your */}
              <div className="box">
                  <span className="label">3. How long have you lived at your current home?</span>
                  { this.makeRadios(['Over one year'], 'howlongcurrenthome') }
                  <InputRadioWithText not={['Over one year']}
                       value={'Under one year, previously lived:'} iter={"2"} var={'howlongcurrenthome'} checked={this.state.howlongcurrenthome}  handleChange={this.handleChange} />            
              </div>




            </div>
            <div className="col-6">

                <p><b>Intervention/Referral</b>:</p>
                <div>
                  <input type={'checkbox'} />
                  <span> Reviewed/discussed STT FS: Cultural Considerations </span>
                  <input />
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Reviewed/discussed STT FS: Cross Cultural </span>
                  <input />
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Communication: Client’s with Alternative Health Care Experiences </span>
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Communication: New Immigrant </span>
                </div>
                <div>
                  <input type={'checkbox'} />
                  <span> Communication: Provided additional orientation about </span>
                  <input />
                </div>

                {/*<b>Intervention/Referral</b>:
                 Reviewed/discussed STT FS: 
                □ Cultural Considerations 
                □ Cross Cultural
                Communication 
                □ Client’s with Alternative Health Care Experiences
                □ STT PSY: New Immigrant
                 Provided additional orientation about:__________________________________*/}
            

            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">



            {/* 4. do you plan to stay */}
              <div className="box">
                  <span className="label">4. Do you plan to stay in this area for the rest of your pregnancy?</span>
                  { this.makeRadios(['Yes', 'No', 'Unsure'], 'stayinthisarea') }
              </div>
              

            </div>
            <div className="col-6">



              <p><b>Intervention/Referral</b></p>
              <div>
                <input type={'checkbox'} />
                <span> Provided assistance in transferring her care </span>
              </div>
              <div>
                <input type={'checkbox'} />
                <span> Referred to/date: </span>
                <input />
              </div>
              {/*<b>Intervention/Referral</b>:
               Provided assistance in transferring her care
               Referred to/date:__________________________________________________*/}

            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">




            {/* 5. How many years of school have you completed? */}
              <div className="box">
                  <span className="label">5. How many years of school have you completed?</span>
                  { this.makeRadios(['0-8 years', '9-11 years', '12-16 years', '16+ years'], 'howmanyyearsschool') }
              </div>


            </div>
            <div className="col-6">

            <p><b>Intervention/Referral</b></p>
            <div>
              <input type={'checkbox'} />
              <span> Referred to school program for pregnant/parenting teens/date:</span>
              <input />
            </div>
            <div>
              <input type={'checkbox'} />
              <span> Referred to adult school/GED Program/date:</span>
              <input />
            </div>
            <div>
              <input type={'checkbox'} />
              <span> Referred to English as a Second Language (ESL) Program/date:</span>
              <input />
            </div>
            <div>
              <input type={'checkbox'} />
              <span> Referred to/date:</span>
              <input />
            </div>

            {/*Intervention/Referral:
             Referred to school program for pregnant/parenting teens/date:______________ 
             Referred to adult school/GED Program/date:____________________________ 
             Referred to English as a Second Language (ESL) Program/date:_____________ 
             Referred to/date:__________________________________________________*/}

            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">


            {/* 6. What language do you prefer to speak? */}
              <div className="box">
                  <span className="label">6. What language do you prefer to speak?</span>
                  { this.makeRadios(['English', 'Spanish'], 'preferredlanguagespeak') }
                  <InputRadioWithText not={['English', 'Spanish']}
                               value={'Other'} iter={"3"} var={'preferredlanguagespeak'} checked={this.state.preferredlanguagespeak}  handleChange={this.handleChange} />
              </div>


          </div>
          <div className="col-6">




            <p><b>Intervention/Referral</b></p>
            <p>Reviewed/discussed STT FS:</p>
            <div>
              <input type={'checkbox'} />
              <span>Cross Cultural Communication</span>
            </div>
            <div>
              <input type={'checkbox'} />
              <span>Dealing with Language Barriers </span>
            </div>
            <div>
              <input type={'checkbox'} />
              <span>Guidelines for Using Interpreters</span>
            </div>
            <div>
              <input type={'checkbox'} />
              <span>Provided education in preferred language</span>
            </div>
            <div>
              <input type={'checkbox'} />
              <span>Interpretation services requested from:</span>
              <input />
            </div>
            {/*
             Reviewed/discussed STT FS: 
            □ Cross Cultural Communication 
            □ Dealing with Language Barriers 
            □ Guidelines for Using Interpreters
             Provided education in preferred language
             Interpretation services requested from:_________________________________*/}




            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">


            {/* 7. Which of the following bests describes how you read */}
              <div className="box">
                  <span className="label">7. Which of the following bests describes how you read:</span>
                  { this.makeRadios(['Like to read and read often', 'Can read, but don’t read very often', 'Can’t read'], 'howyouread') }
              </div>


          </div>
          <div className="col-6">




            <p><b>Intervention/Referral</b></p>
            <p>Reviewed/discussed STT FS:</p>
            <div>
              <input type={'checkbox'} />
              <span>Provided verbal/visual/written information appropriate for client’s ability</span>
            </div>
            <div>
              <input type={'checkbox'} />
              <span>Reviewed STT FS: Low Literacy Skills</span>
            </div>
            <div>
              <input type={'checkbox'} />
              <span>Referred to Public Library or Adult Literacy Program/date:</span>
              <input />
            </div>
            <div>
              <input type={'checkbox'} />
              <span>Referred to/date:</span>
              <input />
            </div>

             {/* Intervention/Referral:
               Provided verbal/visual/written information appropriate for client’s ability
               Reviewed STT FS: Low Literacy Skills
               Referred to Public Library or Adult Literacy Program/date:_________________ 
               Referred to/date: __________________________________________________*/}








            
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">


            {/* 8. Father of baby */}
              <div className="box">
                <span className="label">8. Father of baby:</span>
                <div className="form-group">
                  <label >Name</label>
                  <input
                      placeholder={'John Doe'}
                      value={this.state.fathername}
                      onChange={(e) => this.handleChange(e, 'fathername')} 
                      className="form-control" />
                </div>
                <div>
                  <label >Language</label>
                  <input
                      placeholder={'English'}
                      value={this.state.fatherlanguage}
                      onChange={(e) => this.handleChange(e, 'fatherlanguage')}
                      className="form-control" />
                </div>
                <div>
                  <label >Education</label>
                  <input
                      placeholder={'High School'}
                      value={this.state.fathereducation}
                      onChange={(e) => this.handleChange(e, 'fathereducation')}
                      className="form-control" />

                </div>
                <div>
                  <label >Age</label>
                  <input
                      placeholder={'31'}
                      value={this.state.fatherage}
                      onChange={(e) => this.handleChange(e, 'fatherage')}
                      className="form-control" />
                </div>
              </div>

            </div>
            <div className="col-6">



              <p><b>Intervention/Referral</b></p>
              <div>
                <input type={'checkbox'} />
                <span>Referred to legal assistance/date:</span>
                <input />
              </div>
              <div>
                <input type={'checkbox'} />
                <span>Provided information on declaring paternity (per STT PSY: Teen Pregnancy
                and Parenting – even if client is not a teen)</span>
              </div>
              <div>
                <input type={'checkbox'} />
                <span>Reviewed/discussed STT PSY: </span>
              </div>
              <div>
                <input type={'checkbox'} />
                <span>Child Abuse and Neglect </span>
              </div>
              <div>
                <input type={'checkbox'} />
                <span>Legal/Advocacy</span>
                <input />
              </div>
              <p>Concerns</p>
              <div>
                <input type={'checkbox'} />
                <span>Child Abuse Report filed (based on client/partner ages or suspected abuse)/date:</span>
                <input />
              </div>
              <div>
                <input type={'checkbox'} />
                <span>Referred to/date:</span>
                <input />
              </div>

                {/*Intervention/Referral:
                 Referred to legal assistance/date:___________________________________ 
                Provided information on declaring paternity (per STT PSY: Teen Pregnancy
                and Parenting – even if client is not a teen)
                Reviewed/discussed STT PSY: 
                □ Child Abuse and Neglect 
                □ Legal/Advocacy
                Concerns
                 Child Abuse Report filed (based on client/partner ages or suspected abuse)/date:______________________________________________________ 
                 Referred to/date:__________________________________________________*/}





            </div>
          </div>

    </div>





        {/* PAGE 2 */}
        <div className="tab-pane fade show" id="p2" role="tabpanel" >
          <div className="row">
            <div className="col-6">
                    


                    {/* 9. Is this a planned pregnancy? */}
                      <div className="box">
                          <span className="label">8. Is this a planned pregnancy?</span>
                          { this.makeRadios(['Yes'], 'plannedpregnancy') }
                          <InputRadioWithText not={['Yes']} value={'No, describe:'} iter={"3"} var={'plannedpregnancy'} checked={this.state.plannedpregnancy}  handleChange={this.handleChange} />
                      </div>



                    {/* Is this a wanted pregnancy? */}
                      <div className="box">
                          <span className="label">Is this a planned pregnancy?</span>
                          { this.makeRadios(['Yes', 'Unsure'], 'wantedpregnancy') }
                          <InputRadioWithText not={['Yes', 'Unsure']} value={'No, describe:'} iter={"3"} var={'wantedpregnancy'} checked={this.state.wantedpregnancy}  handleChange={this.handleChange} />
                      </div>


                    {/* 10. Are you thinking about abortion or adoption? */}
                      <div className="box">
                          <span className="label">Is this a wanted pregnancy?</span>
                          { this.makeRadios(['No', 'Yes: Adoption', 'Yes: Abortion'], 'abortionoradoption') }
                      </div>
            






            </div>
            <div className="col-6">



                  {/* 9. Is this a planned pregnancy? */}
                  <p className="label"><b>Intervention/Referral</b>?</p>
                  <span>Reviewed/discussed STT PSY:</span>
                    <div>
                      <input
                                          type={'checkbox'}
                                          value={this.state.reviewedstt}
                                          onChange={(e) => this.handleChange(e, 'reviewedstt')} />
                      <span>Unwanted Pregnancy</span>
                      <input
                          value={this.state.reviewedsttcomment}
                          onChange={(e) => this.handleChange(e, 'reviewedsttcomment')} />
                    </div>

                    <div>
                      <input
                                          type={'checkbox'}
                                          value={this.state.reviewedstt}
                                          onChange={(e) => this.handleChange(e, 'reviewedstt')} />
                      <span> Uncertain About Pregnancy?</span>
                      <input
                          value={this.state.uncertainaboutpregnancy}
                          onChange={(e) => this.handleChange(e, 'uncertainaboutpregnancy')} />
                    </div>

                    <div>
                      <input
                                          type={'checkbox'}
                                          value={this.state.reviewedstt}
                                          onChange={(e) => this.handleChange(e, 'choices')} />
                      <span> Choices</span>
                      <input
                          value={this.state.choices}
                          onChange={(e) => this.handleChange(e, 'choices')} />
                    </div>

                    <div>
                      <input type={'checkbox'} />
                      <span> Provided information about Safe Surrender program/date:</span>
                      <input />
                    </div>

                    <div>
                      <input type={'checkbox'} />
                      <span> Referred to adoption services/date:</span>
                      <input />
                    </div>

                    <div>
                      <input type={'checkbox'} />
                      <span> Referred to abortion services/date:</span>
                      <input />
                    </div>

                    <div>
                      <input type={'checkbox'} />
                      <span> Referred to provider for/date:</span>
                      <input />
                    </div>

                    <div>
                      <input type={'checkbox'} />
                      <span> Referred to social worker/date:</span>
                      <input />
                    </div>

                    <div>
                      <input type={'checkbox'} />
                      <span> Referred to/date:</span>
                      <input />
                    </div>


                  {/*Reviewed/discussed STT PSY: 
                  □ Unwanted Pregnancy___________________
                  □ Uncertain About Pregnancy?__________ 
                  □ Choices___________________
                   Provided information about Safe Surrender program/date:_________________
                   Referred to adoption services/date:____________________________________
                   Referred to abortion services/date:____________________________________
                   Referred to provider for/date:________________________________________
                   Referred to social worker/date:______________________________________
                   Referred to/date:____________________________*/}








              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">

                  {/* 11. How do you feel about being pregnant now? */}
                    <div className="box">
                        <span className="label">11. How do you feel about being pregnant now?</span>
                        { this.makeRadios(['Yes'], 'plannedpregnancy') }
                        <InputRadioWithText not={['Yes']} value={'No, describe:'} iter={"3"} var={'plannedpregnancy'} checked={this.state.plannedpregnancy}  handleChange={this.handleChange} />
                    </div>
                  
                    

              </div>
              <div className="col-6">

                  <p><b>Intervention/Referral</b>:</p>
                  <div>
                    <input type={'checkbox'} />
                    <span> Referred to social worker/date:</span>
                    <input />
                  </div>
                  <div>
                    <input type={'checkbox'} />
                    <span> Referred to mental health clinic/date:</span>
                    <input />
                  </div>
                  <div>
                    <input type={'checkbox'} />
                    <span> Referred to home visitation program/date:</span>
                    <input />
                  </div>
                  <div>
                    <span> Reviewed/discussed STT PSY: </span>
                  </div>
                  <div>
                    <input type={'checkbox'} />
                    <span> Financial Concerns</span>
                  </div>
                  <div>
                    <input type={'checkbox'} />
                    <span> Legal/Advocacy Concerns</span>
                  </div>
                  <div>
                    <input type={'checkbox'} />
                    <span> Referred to/date:</span>
                    <input />
                  </div>

                  {/*Intervention/Referral:
                   Referred to social worker/date:______________________________________
                   Referred to mental health clinic/date: _________________________________
                   Referred to home visitation program/date: _____________________________
                   Reviewed/discussed STT PSY: 
                  □ Financial Concerns
                  □ Legal/Advocacy Concerns
                   Referred to/date:__________________________________________________*/}                   


              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">



                  {/* 11. How do you feel about being pregnant now? */}
                    <div className="box">
                        <span className="label">12. How does the father of the baby feel about the pregnancy?</span>
                        { this.makeRadios(['Yes'], 'plannedpregnancy') }
                        <InputRadioWithText not={['Yes']} value={'No, describe:'} iter={"3"} var={'plannedpregnancy'} checked={this.state.plannedpregnancy}  handleChange={this.handleChange} />
                    </div>
                


              </div>
              <div className="col-6">


                  <p><b>Intervention/Referral:</b></p>
                  <div>
                    <input type={'checkbox'} />
                    <span> Referred to home visitation program/date:</span>
                    <input />
                  </div>
                  <div>
                    <input type={'checkbox'} />
                    <span> Provided information on declaring paternity (per STT PSY: Teen Pregnancy and Parenting – even if client is not a teen)</span>
                  </div> 
                  <div>
                    <input type={'checkbox'} />
                    <span> Reviewed/discussed STT Psychosocial: Financial Concerns and Legal/Advocacy Concerns</span>
                  </div> 
                  <div>
                    <input type={'checkbox'} />
                    <span> Referred to/date:</span>
                    <input />
                  </div>

                 {/* Intervention/Referral:
                   Referred to home visitation program/date:______________________________ 
                   Provided information on declaring paternity (per STT PSY: Teen Pregnancy and Parenting – even if client is not a teen)
                   Reviewed/discussed STT Psychosocial: Financial Concerns and Legal/Advocacy Concerns
                   Referred to/date: __________________________________________________*/}


            </div>
          </div>
        </div>

      </div>
      

        <ul class="nav" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="1-tab" data-toggle="tab" href="#p1" role="tab" >
              Page 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="2-tab" data-toggle="tab" href="#p2" role="tab" >
              Page 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="3-tab" data-toggle="tab" href="#p3" role="tab" >
              Page 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="4-tab" data-toggle="tab" href="#p4" role="tab" >
              Page 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="5-tab" data-toggle="tab" href="#p5" role="tab" >
              Page 5</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="6-tab" data-toggle="tab" href="#p6" role="tab" >
              Page 6</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="7-tab" data-toggle="tab" href="#p7" role="tab" >
              Page 7</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="8-tab" data-toggle="tab" href="#p8" role="tab" >
              Page 8</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="9-tab" data-toggle="tab" href="#p9" role="tab" >
              Page 9</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="10-tab" data-toggle="tab" href="#p10" role="tab" >
              Page 10</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="11-tab" data-toggle="tab" href="#p11" role="tab" >
              Page 11</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="12-tab" data-toggle="tab" href="#p12" role="tab" >
              Page 12</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="13-tab" data-toggle="tab" href="#p13" role="tab" >
              Page 13</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="14-tab" data-toggle="tab" href="#p14" role="tab" >
              Page 14</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="15-tab" data-toggle="tab" href="#p15" role="tab" >
              Page 15</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="16-tab" data-toggle="tab" href="#p16" role="tab" >
              Page 16</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="17-tab" data-toggle="tab" href="#p17" role="tab" >
              Page 17</a>
          </li>
          
        </ul>
        
        
        <form  className="w-100" id="myForm" method="post" action={process.env.NODE_ENV === "development" ? "http://"+window.location.hostname+":8080/api/prenatal" : "/api/prenatal" } >
          <input type="hidden" value={this.props.patient.patientmedicalrecordno} name="patientmedicalrecordno" />
          <input type="hidden" value={this.props.patient.name} name="name" />
          <input type="hidden" value={this.props.patient.dob} name="dob" />
          <input type="hidden" value={this.props.patient.healthplan} name="healthplan" />
          <input type="hidden" value={this.props.patient.provider} name="provider" />
          <input type="hidden" value={this.props.patient.coordinator} name="coordinator" />
          <input type="hidden" value={this.props.patient.hospital} name="hospital" />
          
          <input type="hidden" value={this.state.age} name="age" />
          <input type="hidden" value={this.state.areyoumarried} name="areyoumarried" />
          <input type="hidden" value={this.state.howlongcurrenthome} name="howlongcurrenthome" />
          <input type="hidden" value={this.state.stayinthisarea} name="stayinthisarea" />
          <input type="hidden" value={this.state.howmanyyearsschool} name="howmanyyearsschool" />
          <input type="hidden" value={this.state.preferredlanguagespeak} name="preferredlanguagespeak" />
          <input type="hidden" value={this.state.howyouread} name="howyouread" />

          <input type="hidden" value={this.state.fathername} name="fathername" />
          <input type="hidden" value={this.state.fatherlanguage} name="fatherlanguage" />
          <input type="hidden" value={this.state.fathereducation} name="fathereducation" />
          <input type="hidden" value={this.state.fatherage} name="fatherage" />


          <input className='btn btn-success' value="Save Form" onClick={() => { this.updateForm(); }} />
          {'  '}
          <input className='btn btn-primary' type="submit" value="Export Completed PDF" onClick={() => {}} />
        </form>

        
      </div>
    );
  }
}
