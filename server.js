import createServer, { Network } from 'monsterr'
import SurveyIntro from './src/stages/SurveyIntro/server/server'
const mongoose = require('mongoose')
const jsonexport = require('jsonexport')

jsonexport({lang: 'Node.js', module: 'jsonexport'}, {rowDelimiter: '|'}, function (err, csv) {
  if (err) return console.log(err)
  console.log(csv)
})

mongoose.connect('mongodb://localhost/surveydb', function (err, db) {
  if (err) {
    console.log('Unable to connect to db')
  } else {
    console.log(('We are connected to the database'))
  }
})

const stages = [SurveyIntro]

let events = {}
let commands = {

  // geting the surveys from db
  'downloadData': function (server, clientId) {
    var MongoClient = require('mongodb').MongoClient
    var url = 'mongodb://localhost/'
    MongoClient.connect(url, function (err, db) {
      if (err) throw err
      let dbo = db.db('surveydb')
      dbo.collection('surveys').find({}).toArray(function (err, result) {
        if (err) throw err
        jsonexport(result, function (err, csv) {
          if (err) return console.log(err)
          server.send('resCSV', csv).toAdmin()
          // console.log(csv)
        })
        // console.log(result.questions)
        db.close()
      })
    })
  }
}

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
