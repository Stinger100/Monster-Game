var mongoose = require('mongoose')
var Schema = mongoose.Schema
var survey = new Schema({
  clientId: String,
  Time: {type: Date, default: Date.now()},
  questions: [
    {
      Question: String,
      Answer: String

    }
  ]
})

module.exports = mongoose.model('Survey', survey)
