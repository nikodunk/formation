import React, { Component } from 'react';
import './app.css';



export default class App extends React.Component {
  
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { 
            uid: 'Y-9147d',
            name: 'Example Rogers',
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
            fatherage: '31'
          }
  }

  componentDidMount() {
    
  }

  handleChange(e, fieldname) {
    let newState = {}
    newState[fieldname] = e.target.value;
    this.setState(newState);
  }


  render() {
    return (
      <div>
        
        <p style={{color: 'dodgerblue'}}>Welcome! </p>
        <p style={{color: 'dodgerblue'}}>This demo pre-selects the most common answers on a <i>Prenatal A/R IPC</i> Form and exports an official, completed PDF.</p>
        <p style={{color: 'dodgerblue'}}>Edit the pre-selections as necessary and hit <b>Export Completed PDF</b>.</p>
        
        <div>
          <label class="label">Form</label>
          <p style={{color: 'grey'}}>Prenatal Assessment/Reassessment and Individualized Care Plan</p>
          
        </div>

        <hr />


        <div class="form-group">
          <label class="label">Patient ID</label>
          <input 
                class="form-control" 
                onChange={(e) => this.handleChange(e, 'uid')}
                value={this.state.uid} 
                placeholder={'Y-9147d'} />
        </div>


        <div class="form-group">
          <label class="label">Patient Name</label>
          <input 
                class="form-control" 
                onChange={(e) => this.handleChange(e, 'name')}
                value={this.state.name} 
                placeholder={'Jane Doe'} />
        </div>


        <hr />



        {/*1. client age*/}
        <div class="box">
            <span class="label">1. Client Age</span>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Less than 12 years'}
                      checked={this.state.age === 'Less than 12 years'}
                      onChange={(e) => this.handleChange(e, 'age')} 
                      id="age1"/>
              <label class="form-check-label" for="age1">
                Less than 12 years
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'12-17 years'}
                      checked={this.state.age === '12-17 years'}
                      onChange={(e) => this.handleChange(e, 'age')} 
                      id="age2" />
              <label class="form-check-label" for="age2">
                12-17 years
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'18-34 years'}
                      checked={this.state.age === '18-34 years'}
                      onChange={(e) => this.handleChange(e, 'age')} 
                      id="age3" />
              <label class="form-check-label" for="age3">
                18-34 years
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'35 years or older'}
                      checked={this.state.age === '35 years or older'}
                      onChange={(e) => this.handleChange(e, 'age')} 
                      id="age4" />
              <label class="form-check-label" for="age4">
                35 years or older
              </label>
            </div>
        </div>




      {/* 2. are you married etc */}
        <div class="box">
            <span class="label">2. Are you:</span>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Married'}
                      checked={this.state.areyoumarried === 'Married'}
                      onChange={(e) => this.handleChange(e, 'areyoumarried')} 
                      id="areyoumarried1"/>
              <label class="form-check-label" for="areyoumarried1">
                Married
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Living with partner'}
                      checked={this.state.areyoumarried === 'Living with partner'}
                      onChange={(e) => this.handleChange(e, 'areyoumarried')} 
                      id="areyoumarried2" />
              <label class="form-check-label" for="areyoumarried2">
                Living with partner
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'In a relationship'}
                      checked={this.state.areyoumarried === 'In a relationship'}
                      onChange={(e) => this.handleChange(e, 'areyoumarried')} 
                      id="areyoumarried3" />
              <label class="form-check-label" for="areyoumarried3">
                In a relationship
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Single'}
                      checked={this.state.areyoumarried === 'Single'}
                      onChange={(e) => this.handleChange(e, 'areyoumarried')} 
                      id="areyoumarried4" />
              <label class="form-check-label" for="areyoumarried4">
                Single
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Divorced/Separated'}
                      checked={this.state.areyoumarried === 'Divorced/Separated'}
                      onChange={(e) => this.handleChange(e, 'areyoumarried')} 
                      id="areyoumarried5" />
              <label class="form-check-label" for="areyoumarried5">
                Divorced/Separated
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Widowed'}
                      checked={this.state.areyoumarried === 'Widowed'}
                      onChange={(e) => this.handleChange(e, 'areyoumarried')} 
                      id="areyoumarried6" />
              <label class="form-check-label" for="areyoumarried6">
                Widowed
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Other'}
                      checked={this.state.areyoumarried === 'Other'}
                      onChange={(e) => this.handleChange(e, 'areyoumarried')} 
                      id="areyoumarried7" />
              <label class="form-check-label" for="areyoumarried7">
                Other
              </label>
            </div>
        </div>



      {/* 3. how long have you lived in your */}
        <div class="box">
            <span class="label">3. How long have you lived at your current home?</span>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Over one year'}
                      checked={this.state.howlongcurrenthome === 'Over one year'}
                      onChange={(e) => this.handleChange(e, 'howlongcurrenthome')} 
                      id="howlongcurrenthome1"/>
              <label class="form-check-label" for="howlongcurrenthome1">
                Over one year
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Under one year, previously lived:'}
                      checked={this.state.howlongcurrenthome === 'Under one year, previously lived:'}
                      onChange={(e) => this.handleChange(e, 'howlongcurrenthome')} 
                      id="howlongcurrenthome2" />
              <label class="form-check-label" for="howlongcurrenthome2">
                Under one year
              </label>
            </div>
        </div>



      {/* 4. do you plan to stay */}
        <div class="box">
            <span class="label">4. Do you plan to stay in this area for the rest of your pregnancy?</span>
                <div class="form-check">
                  <input  class="form-check-input" 
                          type="radio" 
                          value={'Yes'}
                          checked={this.state.stayinthisarea === 'Yes'}
                          onChange={(e) => this.handleChange(e, 'stayinthisarea')} 
                          id="stayinthisarea1"/>
                  <label class="form-check-label" for="stayinthisarea1">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input  class="form-check-input" 
                          type="radio" 
                          value={'No'}
                          checked={this.state.stayinthisarea === 'No'}
                          onChange={(e) => this.handleChange(e, 'stayinthisarea')} 
                          id="stayinthisarea2" />
                  <label class="form-check-label" for="stayinthisarea2">
                    No
                  </label>
                </div>
                <div class="form-check">
                  <input  class="form-check-input" 
                          type="radio" 
                          value={'Unsure'}
                          checked={this.state.stayinthisarea === 'Unsure'}
                          onChange={(e) => this.handleChange(e, 'stayinthisarea')} 
                          id="stayinthisarea3" />
                  <label class="form-check-label" for="stayinthisarea3">
                    Unsure
                  </label>
                </div>
        </div>
        



      {/* 5. How many years of school have you completed? */}
        <div class="box">
            <span class="label">5. How many years of school have you completed?</span>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'0-8 years'}
                      checked={this.state.howmanyyearsschool === '0-8 years'}
                      onChange={(e) => this.handleChange(e, 'howmanyyearsschool')} 
                      id="howmanyyearsschool1"/>
              <label class="form-check-label" for="howmanyyearsschool1">
                0-8 years
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'9-11 years'}
                      checked={this.state.howmanyyearsschool === '9-11 years'}
                      onChange={(e) => this.handleChange(e, 'howmanyyearsschool')} 
                      id="howmanyyearsschool2" />
              <label class="form-check-label" for="howmanyyearsschool2">
                9-11 years
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'12-16 years'}
                      checked={this.state.howmanyyearsschool === '12-16 years'}
                      onChange={(e) => this.handleChange(e, 'howmanyyearsschool')} 
                      id="howmanyyearsschool3" />
              <label class="form-check-label" for="howmanyyearsschool3">
                12-16 years
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'16+ years'}
                      checked={this.state.howmanyyearsschool === '16+ years'}
                      onChange={(e) => this.handleChange(e, 'howmanyyearsschool')} 
                      id="howmanyyearsschool4" />
              <label class="form-check-label" for="howmanyyearsschool4">
                16+ years
              </label>
            </div>
        </div>




      {/* 6. What language do you prefer to speak? */}
        <div class="box">
            <span class="label">6. What language do you prefer to speak?</span>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'English'}
                      checked={this.state.preferredlanguagespeak === 'English'}
                      onChange={(e) => this.handleChange(e, 'preferredlanguagespeak')} 
                      id="preferredlanguagespeak1"/>
              <label class="form-check-label" for="preferredlanguagespeak1">
                English
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Spanish'}
                      checked={this.state.preferredlanguagespeak === 'Spanish'}
                      onChange={(e) => this.handleChange(e, 'preferredlanguagespeak')} 
                      id="preferredlanguagespeak2" />
              <label class="form-check-label" for="preferredlanguagespeak2">
                Spanish
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Other'}
                      checked={this.state.preferredlanguagespeak === 'Other'}
                      onChange={(e) => this.handleChange(e, 'preferredlanguagespeak')} 
                      id="preferredlanguagespeak3" />
              <label class="form-check-label" for="preferredlanguagespeak3">
                Other
              </label>
            </div>
        </div>




      {/* 7. Which of the following bests describes how you read */}
        <div class="box">
            <span class="label">7. Which of the following bests describes how you read:</span>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Like to read and read often'}
                      checked={this.state.howyouread === 'Like to read and read often'}
                      onChange={(e) => this.handleChange(e, 'howyouread')} 
                      id="howyouread1"/>
              <label class="form-check-label" for="howyouread1">
                Like to read and read often
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Can read, but don’t read very often'}
                      checked={this.state.howyouread === 'Can read, but don’t read very often'}
                      onChange={(e) => this.handleChange(e, 'howyouread')} 
                      id="howyouread2" />
              <label class="form-check-label" for="howyouread2">
                Can read, but don’t read very often
              </label>
            </div>
            <div class="form-check">
              <input  class="form-check-input" 
                      type="radio" 
                      value={'Can’t read'}
                      checked={this.state.howyouread === 'Can’t read'}
                      onChange={(e) => this.handleChange(e, 'howyouread')} 
                      id="howyouread3" />
              <label class="form-check-label" for="howyouread3">
                Can’t read
              </label>
            </div>
        </div>

      
        
        

      {/* 8. Father of baby */}
        <div class="box">
          <span class="label">8. Father of baby:</span>
          <div class="form-group">
            <label >Name</label>
            <input
                placeholder={'John Doe'}
                value={this.state.fathername}
                onChange={(e) => this.handleChange(e, 'fathername')} 
                class="form-control" />
          </div>
          <div>
            <label >Language</label>
            <input
                placeholder={'English'}
                value={this.state.fatherlanguage}
                onChange={(e) => this.handleChange(e, 'fatherlanguage')}
                class="form-control" />
          </div>
          <div>
            <label >Education</label>
            <input
                placeholder={'High School'}
                value={this.state.fathereducation}
                onChange={(e) => this.handleChange(e, 'fathereducation')}
                class="form-control" />

          </div>
          <div>
            <label >Age</label>
            <input
                placeholder={'31'}
                value={this.state.fatherage}
                onChange={(e) => this.handleChange(e, 'fatherage')}
                class="form-control" />
          </div>
      
        </div>

      

        <hr />
        
        <form  class="w-100" id="myForm" method="post" action="/api/pdf" >
          <input type="hidden" value={this.state.uid} name="uid" />
          <input type="hidden" value={this.state.name} name="name" />
          
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

          <input class='btn btn-primary w-100' type="submit" value="Export Completed PDF" />
        </form>

        <p>Note: For demonstration purposes only page 1 is pre-filled here</p>
        
      </div>
    );
  }
}
