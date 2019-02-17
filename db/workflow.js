const knex = require('./connection');

module.exports = {

  
  createNew: function(usergroup){
    return knex('workflows')
            .insert({
                  workflowuid: Date.now().toString(),
                  title: 'New Workflow '+Date.now().toString(),
                  graph: null,
                  text: '',
                  usergroup: usergroup
                })
            .returning('workflowuid')
  },

  getAll: function(){
    return knex('workflows');
  },

  getAllWorkflowsByUsergroup: function(usergroup){
    return knex('workflows')
        .where('usergroup', usergroup);
  },

  update: function(workflowuid, workflowdata){
    return knex('workflows')
    		.update({
                  workflowuid: workflowdata.workflowuid,
                  title: workflowdata.title,
                  graph: JSON.stringify(workflowdata.graph),
                  text: workflowdata.text
                })
        .where('workflowuid', workflowdata.workflowuid)
  }
  
}
