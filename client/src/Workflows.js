import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import CustomDiagram from './CustomDiagram'
import model from './CustomDiagram/model-example';

import { createNewWorkflow, getAllWorkflowsForUsergroup, updateWorkflow } from './api'

export default class Workflows extends React.Component {
  
  constructor(props) {
      super(props);
      
      this.state = {
            workflow: 0,
            loading: false,
            redraw: false,

            hospital: null,
            
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
    console.log(typeof e.target.value)
    this.setState({workflow: e.target.value})
    setTimeout(() => {this.setState({loading: false})} , 100);
  }

  makeWorkflowSelections(){
    let results = []
      for (var workflow in this.state.workflows) {
          results.push( <option value={workflow}>{this.state.workflows[workflow].title}</option>)
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
    newState['workflows'][this.state.workflow][fieldname] = e.target.value;
    this.setState(newState);
  }

  handleGraphUpdate(updatedGraph){
      console.log(updatedGraph)
      this.setState({updatedGraph: updatedGraph})
  }

  updateWorkflow(){
    let newState = this.state.workflows[this.state.workflow]
    newState.graph = this.state.updatedGraph
    updateWorkflow(this.props.workflowuid, newState)
    this.setState({editing: !this.state.editing})
  }
  

  

  render() {
    return (
          <div>
              {/* WORKFLOW PICKER */}
              { this.state.workflows ? 
              <div id="main">

                      <div className="form-group">
                        <label className="label">Pick Workflow</label>

                        <div className="form-inline">
                          {!this.state.redraw ?
                                          <select class="form-control col-7" 
                                              selected={this.state.workflow}
                                              value={this.state.workflow} 
                                              onChange={(e) => this.handleWorkflowSelect(e)}>
                                          {this.makeWorkflowSelections()}
                                        </select>
                                        : null }
                          <p>&nbsp;&nbsp;&nbsp;</p>
                          <button type="button" 
                                  onClick={() => this.createWorkflow()} 
                                  className="btn btn-info col-4">Add Workflow</button>
                        </div>
                      </div>



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
                                    value={this.state.workflows[this.state.workflow].title} 
                                    placeholder={'Unique-Identification-Number-123'} />
                            </div>

                            <div className="form-group">

                              <CustomDiagram
                                      handleGraphUpdate={this.handleGraphUpdate.bind(this)} 
                                      model={this.state.workflows[this.state.workflow].graph ? this.state.workflows[this.state.workflow].graph : model} />

                              {/*<button onClick={this._onBoldClick.bind(this)}>Bold</button>*/}
                              {/*<Editor 
                                    editorState={this.state.editorState} 
                                    onChange={this.onChange}
                                    handleKeyCommand={this.handleKeyCommand} />*/}
                              <textarea 
                                    className="form-control" 
                                    onChange={(e) => this.handleWorkflowInfoChange(e, 'text')}
                                    value={this.state.workflows[this.state.workflow].text} 
                                    placeholder={'Step 1...'}
                                    rows="10" />



                            </div>

                            <button 
                                    type="button" 
                                    onClick={() => {this.updateWorkflow()}}
                                    className="btn btn-info">
                                    Save Workflow
                                    </button>
                          </div>

                          :

                        
                          <div>
                            {/* WORKFLOW DISPLAY */}
                            <p><b>{this.state.workflows[this.state.workflow].title}</b></p>

                            <CustomDiagram 
                                  handleGraphUpdate={this.handleGraphUpdate.bind(this)} 
                                  model={this.state.workflows[this.state.workflow].graph ? this.state.workflows[this.state.workflow].graph : model} />

                            <p style={{whiteSpace: 'pre-wrap'}}>{this.state.workflows[this.state.workflow].text}</p>
                            
                            <br />
                            <button 
                                    class="btn btn-info" 
                                    onClick={() => {this.setState({editing: !this.state.editing})}}>
                                    Edit
                                    </button>
                          </div>
                          }
                                                    
                      </div> 
                    </div>
                   : null }
              
              </div> 
              : null }
            </div> 

    );
  }
}
