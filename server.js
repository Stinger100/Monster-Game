import createServer, { Network } from 'monsterr'
import SurveyIntro from './src/stages/SurveyIntro/server/server'
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/surveydb', function (err, db) {
  if (err) {
    console.log('Unable to connect to db')
  } else {
    console.log(('We are connected to the database'))
  }
})

const stages = [SurveyIntro]

let events = {}
let commands = {}

const monsterr = createServer({
  network: Network.pairs(8),
  events,
  commands,
  stages,
  options: {
    clientPassword: undefined, // can specify client password
    adminPassword: 'sEcr3t' // and admin password
  }
})

monsterr.run()
