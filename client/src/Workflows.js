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
            updatedGraph: null
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

  makeWorkflowSelections(){
    let results = []
      for (var i = 0; i < this.state.workflows.length; i++) {
          results.push( <p onClick={this.handleWorkflowSelect.bind(this)} id={i}>{this.state.workflows[i].title}</p>)
        }
    return results
  }


  createWorkflow(){
    
    createNewWorkflow(this.props.usergroup).then((res) => {
      console.log(res)
      getAllWorkflowsForUsergroup(this.props.usergroup).then((result) => {
              // console.log(res)
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

  handleGraphUpdate(updatedGraph){
      console.log(updatedGraph)
      this.setState({updatedGraph: updatedGraph})
  }

  updateWorkflow(){
    let newState = this.state.workflows[this.state.currentWorkflow]
    newState.graph = this.state.updatedGraph

    // update server
    updateWorkflow(this.state.workflows[this.state.currentWorkflow].workflowuid, newState).then((res) => console.log(res))
    this.setState({editing: !this.state.editing})
  }

  _deleteWorkflow(){
    console.log(this.state.workflows[this.state.currentWorkflow])
    deleteWorkflow(this.props.usergroup, this.state.workflows[this.state.currentWorkflow]).then((res) => {
      console.log('THIS IS WHAT WAS RETURNED', res)
      this.setState({editing: false})
      getAllWorkflowsForUsergroup(this.props.usergroup).then((result) => {
              // console.log(res)
              let newCurrent = result.length-1
              newCurrent = newCurrent.toString()
              this.setState({workflows: result, redraw: true, workflow: newCurrent})
              setTimeout(() => {this.setState({redraw: false})} , 100);
            })
    })
  }

  cancel(){
    this.setState({editing: !this.state.editing})
  }
  

  render() {
    return (
          <div>
              {/* WORKFLOW PICKER */}
              { this.state.workflows ? 
              <div id="main">


                <div class="column-left">
                      <div className="form-group">
                        <label className="label">Workflows</label>
                          {!this.state.redraw ? this.makeWorkflowSelections() : null }

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



                          <div>
                          {/* WORKFLOW EDITOR */}
                            <div className="form-group">
                              <input 
                                    className="form-control" 
                                    onChange={(e) => this.handleWorkflowInfoChange(e, 'title')}
                                    value={this.state.workflows[this.state.currentWorkflow].title} 
                                    placeholder={'Unique-Identification-Number-123'} />
                              <button 
                                      type="button" 
                                      onClick={() => {this._deleteWorkflow()}}
                                      className="btn btn-danger">
                                      Delete Workflow
                                      </button>
                            

                            <button 
                                    type="button" 
                                    onClick={() => {this.updateWorkflow()}}
                                    className="btn btn-success">
                                    Save Workflow
                                    </button>

                            <button 
                                    type="button" 
                                    onClick={() => {this.cancel()}}
                                    className="btn btn-info">
                                    Cancel
                                    </button>
                            
                            </div>

                            <div className="form-group">

                              <textarea 
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

                            
                          </div>

                          :

                        
                          <div>
                            {/* WORKFLOW DISPLAY */}
                            <p>
                              <b>{this.state.workflows[this.state.currentWorkflow].title}</b>&nbsp;&nbsp;

                              <button 
                                    class="btn btn-info" 
                                    onClick={() => {this.setState({editing: !this.state.editing})}}>
                                    Edit
                                    </button>
                            </p>

                            <CustomDiagram 
                                  handleGraphUpdate={this.handleGraphUpdate.bind(this)} 
                                  model={this.state.workflows[this.state.currentWorkflow].graph ? this.state.workflows[this.state.currentWorkflow].graph : model} />

                            <p style={{whiteSpace: 'pre-wrap'}}>{this.state.workflows[this.state.currentWorkflow].text}</p>
                            
                            
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
