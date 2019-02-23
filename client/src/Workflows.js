import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import CustomDiagram from './CustomDiagram'
import model from './CustomDiagram/model-example';

import { createNewWorkflow, getAllWorkflowsForUsergroup, updateWorkflow, deleteWorkflow } from './api'

export default class Workflows extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = {
            currentWorkflow: 0,
            loading: false,
            redraw: false,
            
            workflows: null,

            editing: false,

            editorState: EditorState.createEmpty(),
            updatedGraph: null,
            updatedImage: null
          }

      this.onChange = (editorState) => this.setState({editorState});
  }

  componentDidMount() {
    // console.log(this.props.usergroup)
    getAllWorkflowsForUsergroup(this.props.usergroup).then((res) => {
            console.log(res)
            this.setState({workflows: res})
          })
  }

  handleWorkflowSelect(e) {
    this.setState({loading: true})
    console.log(e.target.id)
    this.setState({currentWorkflow: e.target.id})
    setTimeout(() => {this.setState({loading: false})} , 100);
  }

  makeWorkflowLinks(){
    let results = []
      for (var i = 0; i < this.state.workflows.length; i++) {
          results.push( <li class="leftlink" onClick={this.handleWorkflowSelect.bind(this)} id={i}>{this.state.workflows[i].title}</li>)
        }
    return results
  }

  makeImageTexts( inputs ){
    let results = []
      for (var i = 0; i < inputs.length; i++) {
          results.push( <p id={i}>{inputs[i]}</p>)
        }
    return results
  }

  makeImages( inputs ){
    let results = []
      for (var i = 0; i < inputs.length; i++) {
          results.push( <img class="screenshot" id={i} src={inputs[i]} alt="screenshot" />)
        }
    return results
  }



  createWorkflow(){
    
    createNewWorkflow(this.props.usergroup).then((res) => {
      console.log(res)
      getAllWorkflowsForUsergroup(this.props.usergroup).then((result) => {
              console.log(res)
              let newCurrent = result.length-1
              newCurrent = newCurrent.toString()
              this.setState({workflows: result, redraw: true, workflow: newCurrent})
              setTimeout(() => {this.setState({redraw: false})} , 100);
            })
    })
  }


  handleWorkflowInfoChange(e, fieldname) {
    let newState = this.state
    newState['workflows'][this.state.currentWorkflow][fieldname] = e.target.value;
    this.setState(newState);
  }



  _addImage(currentworkflow){
    // console.log(this.state.workflows[this.state.currentWorkflow])
    let newWorkflows = this.state.workflows
    if (newWorkflows[this.state.currentWorkflow].images === null) { newWorkflows[this.state.currentWorkflow].images = [] }
    newWorkflows[this.state.currentWorkflow].images.push(this.state.updatedImage)
    this.setState({workflows: newWorkflows})
    console.log(this.state.workflows)
  }

  handleGraphUpdate(updatedGraph){
      console.log(updatedGraph)
      this.setState({updatedGraph: updatedGraph})
  }

  updateWorkflow(){
    let workflow = this.state.workflows[this.state.currentWorkflow]
    workflow.graph = this.state.updatedGraph ? this.state.updatedGraph : workflow.graph

    // console.log('updatedworkflow:', workflow) // works

    // update server
    updateWorkflow(this.state.workflows[this.state.currentWorkflow].workflowuid, workflow).then((res) => {
          getAllWorkflowsForUsergroup(this.props.usergroup).then((result) => {
                  this.setState({workflows: result, redraw: true, loading: true})
                  setTimeout(() => {this.setState({redraw: false, loading: false})} , 100);
                })
    })
    this.setState({editing: !this.state.editing, currentWorkflow: 1})
  }

  _deleteWorkflow(){
    console.log(this.state.workflows[this.state.currentWorkflow])
    deleteWorkflow(this.props.usergroup, this.state.workflows[this.state.currentWorkflow]).then((res) => {
      console.log('THIS IS WHAT WAS RETURNED', res)
      this.setState({editing: false})
      getAllWorkflowsForUsergroup(this.props.usergroup).then((result) => {
              this.setState({workflows: result, redraw: true, loading: true})
              setTimeout(() => {this.setState({redraw: false, loading: false})} , 100);
            })
    })
  }

  cancel(){
    this.setState({editing: !this.state.editing})
  }

  startEditing(){
    this.setState({updatedGraph: null, editing: !this.state.editing})
  }
  

  render() {
    return (
          <div>
              {/* WORKFLOW PICKER */}
              { this.state.workflows ? 
              <div id="main">


                <div class="column-left">


                        <form class="form-inline my-2 my-lg-0">
                          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                          {/*<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                        </form>


                      <div className="form-group">
                        <label className="label">Workflow Library</label>
                        <ul>
                          {!this.state.redraw ? this.makeWorkflowLinks() : null }
                        </ul>
                        <button type="button" 
                                onClick={() => this.createWorkflow()} 
                                className="btn btn-primary">Add Workflow</button>
                      </div>
                </div>


                <div class="column-right">

                    {!this.state.loading ?
                


                      <div class="card">
                        <div class="card-body">

                        {this.state.editing ? 



                          <div style={{display: 'flex', flexDirection: 'row'}}>
                          {/* WORKFLOW EDITOR */}
                            <div style={{flex: .6}}>
                              <div className="form-group">
                                <input 
                                      className="form-control"
                                      style={{maxWidth: '100%'}}
                                      onChange={(e) => this.handleWorkflowInfoChange(e, 'title')}
                                      value={this.state.workflows[this.state.currentWorkflow].title} 
                                      placeholder={'Unique-Identification-Number-123'} />

                                {' '}
                                <button 
                                        type="button" 
                                        onClick={() => {this._deleteWorkflow()}}
                                        className="btn btn-danger">
                                        Delete Workflow
                                        </button>
                                
                                {' '}
                                <button 
                                      type="button" 
                                      onClick={() => {this.updateWorkflow()}}
                                      className="btn btn-success">
                                      Save Workflow
                                      </button>

                                {' '}
                                <button 
                                      type="button" 
                                      onClick={() => {this.cancel()}}
                                      className="btn btn-info">
                                      Cancel
                                      </button>
                              
                              </div>

                              <div className="form-group">

                                <textarea 
                                      style={{maxWidth: '100%'}}
                                      className="form-control" 
                                      onChange={(e) => this.handleWorkflowInfoChange(e, 'text')}
                                      value={this.state.workflows[this.state.currentWorkflow].text} 
                                      placeholder={'Step 1...'}
                                      rows="10" />


                                <CustomDiagram
                                        handleGraphUpdate={this.handleGraphUpdate.bind(this)} 
                                        model={this.state.workflows[this.state.currentWorkflow].graph ? this.state.workflows[this.state.currentWorkflow].graph : model} />

                                {/*<button onClick={this._onBoldClick.bind(this)}>Bold</button>*/}
                                {/*<Editor 
                                      editorState={this.state.editorState} 
                                      onChange={this.onChange}
                                      handleKeyCommand={this.handleKeyCommand} />*/}
                            </div>
                            <div style={{flex: .4}}>

                                <input 
                                      style={{width: '100%'}}
                                      className="form-control" 
                                      onChange={(e) => this.setState({updatedImage: e.target.value})}
                                      value={this.state.updatedImage}
                                      placeholder={'https://image.com/img.jpg'} />

                                <button 
                                      class="btn btn-info" 
                                      onClick={() => this._addImage(this.state.workflows[this.state.currentWorkflow])}>
                                      Attach Image
                                      </button>

                                <br />

                                <br />

                                { this.state.workflows[this.state.currentWorkflow].images ? this.makeImageTexts(this.state.workflows[this.state.currentWorkflow].images) : null }


                              </div>

                            </div>
                          
                          </div>

                          :

                        
                          <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{flex: .6}}>
                              {/* WORKFLOW DISPLAY */}
                              <p>
                                <b>{this.state.workflows[this.state.currentWorkflow].title}</b>&nbsp;&nbsp;

                                <button 
                                      class="btn btn-info" 
                                      onClick={() => this.startEditing()}>
                                      Edit
                                      </button>
                              </p>

                              <p style={{whiteSpace: 'pre-wrap'}}>{this.state.workflows[this.state.currentWorkflow].text}</p>

                              <CustomDiagram 
                                    handleGraphUpdate={this.handleGraphUpdate.bind(this)} 
                                    model={this.state.workflows[this.state.currentWorkflow].graph ? this.state.workflows[this.state.currentWorkflow].graph : model} />
                            
                            </div>
                            <div style={{flex: .4}}>

                              { this.state.workflows[this.state.currentWorkflow].images ? this.makeImages(this.state.workflows[this.state.currentWorkflow].images) : null }

                            </div>
                            
                          </div>
                          }
                                                    
                      </div> 
                    </div>
                   : null }

                   </div>
              
              </div> 


              : null }


            </div> 

    );
  }
}
