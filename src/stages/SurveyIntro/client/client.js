import html from './client.html'
import css from './client.css'
import surveyModel from './surveyModel'
import * as Survey from 'survey-jquery'

$.getScript('https://surveyjs.azureedge.net/1.0.25/survey.jquery.min.js', () => {
  /* now it's loaded and Survey should be available.  */
})

export default {
  // Remember to include your html in stage
  // The html is shown only during the stage.
  html,

  commands: {
    finish (client) {
      client.stageFinished()
      return false
    }
  },

  events: {
  },
  setup: (client) => {
    function sendDataToServer (survey) {
      // let resultAsString = JSON.stringify(survey.data)
      client.send('pre-survey_result', survey.data)
      $('#pre-survey').html(
        '<div class="jumbotron">' +
                '    <h1>Please wait for the other players...</h1>' +
                '</div>')
      client.stageFinished()
    }

    function showResult (survey) {
      sendDataToServer(survey)
    }

    Survey.Survey.cssType = 'bootstrap'
    Survey.defaultBootstrapCss.navigationButton = 'btn btn-danger'
    let survey = new Survey.Model(surveyModel)

    $('#pre-survey').Survey({
      model: survey,
      onComplete: showResult
    })
  },

  // Optionally define a teardown method that is run when stage finishes
  teardown: (client) => {
    // Nothing right now
  },

  // Configure options
  options: {
    htmlContainerHeight: 1
  }
}
