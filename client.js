import createClient from 'monsterr'
import stage1 from './src/stages/stage1/client'
import SurveyIntro from './src/stages/SurveyIntro/client/client'

const stages = [
    SurveyIntro
]

let options = {
  canvasBackgroundColor: 'blue',
  htmlContainerHeight: 0 // Hide html
}

let events = {}
let commands = {}

createClient({
  events,
  commands,
  options,
  stages
})