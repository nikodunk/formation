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

  getAllWorkflowsByUsergroup: function(usergroup){
    return knex('workflows')
        .where('usergroup', usergroup);
  },

  update: function(workflowuid, workflowdata){
    return knex('workflows')
        .where('workflowuid', workflowdata.workflowuid)
    		.update({
                  workflowuid: workflowdata.workflowuid,
                  title: workflowdata.title,
                  graph: JSON.stringify(workflowdata.graph),
                  text: workflowdata.text,
                  images: workflowdata.images
                })
  },


  delete: function(workflowuid, workflowdata){
    return knex('workflows')
        .where('workflowuid', workflowdata.workflowuid)
        .del()
  }
  
}
