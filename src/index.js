import QuestionsModule from './modules/QuestionsModule.js'
import BattleModule from './modules/BattleModule.js'

const INITIAL_POINTS = 20

async function start() {
  const questions = new QuestionsModule()

  try {
    const { name } = await questions.askName()
    const { confirmation } = await questions.showPointsDistributionMessage(INITIAL_POINTS)
    const { speed, strength, defense } = await questions.askAttributesPoints()

    checkAttributesPoints({speed, strength, defense})

    const player = {
      name,
      isPlayer: true,
      life: 50,
      speed,
      strength,
      defense,
    }
    const enemy = createRandomEnemy()

    const { mode } = await questions.chooseMode()

    console.info(`Hello, ${name}! You are in the battle!`)
    console.info(`You are facing a ${enemy.name} with speed ${enemy.speed}, strength ${enemy.strength} and defense ${enemy.defense}`)

    if (mode === 'auto') {
      // Auto Battle
      const battle = new BattleModule()

      battle.startAuto(player, enemy)
    } else {
      // Interactive Battle
    }
  } catch (error) {
    console.error(error.message)
  }
}

function checkAttributesPoints(attributes, points = INITIAL_POINTS) {
  const { speed, strength, defense } = attributes

  if (speed + strength + defense !== 20) {
    throw new Error(`The sum of attributes must be ${points}!`)
  }
}

function createRandomEnemy(points = INITIAL_POINTS) {
  const speed = Math.floor(Math.random() * (points + 1))
  const strength = Math.floor(Math.random() * (points - speed + 1))
  const defense = points - speed - strength

  return {
    name: 'Troll',
    isPlayer: false,
    life: 50,
    speed,
    strength,
    defense,
  }
}

(() => start())()
