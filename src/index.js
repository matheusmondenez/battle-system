import inquirer from 'inquirer'

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'confirm',
    name: 'confirmation',
    message: 'You have 20 points to distribute among the following attributes: speed, strength and defense. Choose wisely!'
  },
  {
    type: 'number',
    name: 'speed',
    message: 'What is your speed?'
  },
  {
    type: 'number',
    name: 'strength',
    message: 'What is your strength?'
  },
  {
    type: 'number',
    name: 'defense',
    message: 'What is your defense?'
  },
]

inquirer.prompt(questions)
  .then(({name, speed, strength, defense}) => {

    if (speed + strength + defense !== 20) {
      throw new Error('Incorrect sum of values!')
    }

    console.info(`Hello, ${name}! You are in the battle!`)
    console.info(`Speed: ${speed}`)
    console.info(`Strength: ${strength}`)
    console.info(`Defense: ${defense}`)
  })
  .catch(error => console.error(`Something went wrong: ${error.message}`))
