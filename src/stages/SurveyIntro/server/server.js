let Survey = require('../../survey')

export default {

  commands: {},

  // Optionally define events
  events: {
    'pre-survey_result': function (server, client, data) {
      console.log('Received pre-survey result from client:', client, '\n', data)
      for (let key in data) {
        let survey = new Survey({
          Question: key,
          Answer: data[key]
        })

        survey.save()
      }
    }
  },

  /*     let questions = {}
      for (let key in data) {
        questions[key] = data
      }
      let survey = new Survey({
        clientId: client.data,
        questions: questions

      })
      survey.save()
       */

  // Optionally define a setup method that is run before stage begins
  setup: (server) => {
    // Nothing yet
  },

  // Optionally define a teardown method that is run when stage finishes
  teardown: (server) => {
    console.log('CLEANUP SERVER AFTER STAGE',
      server.getCurrentStage())
  },

  // Configure options
  options: {}

}
