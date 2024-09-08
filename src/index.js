import QuestionsModule from './modules/QuestionsModule.js'

async function start() {
  const questions = new QuestionsModule()

  try {
    const { name } = await questions.askName()
    const { confirmation } = await questions.showPointsDistributionMessage()
    const { speed, strength, defense } = await questions.askAttributesPoints()

    checkAttributesPoints({speed, strength, defense})

    console.log(`Hello, ${name}! You are in the battle!`)
  } catch (error) {
    console.error(error.message)
  }
}

function checkAttributesPoints(attributes) {
  const { speed, strength, defense } = attributes

  if (speed + strength + defense !== 20) {
    throw new Error('The sum of attributes must be 20!')
  }
}

(() => start())()
