import inquirer from 'inquirer'

class QuestionsModule {
  async askName() {
    return await inquirer.prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: "What's your name?",
          default: 'Matheus',
        },
      ],
    )
  }

  async showPointsDistributionMessage(points) {
    return await inquirer.prompt(
      [
        {
          type: 'confirm',
          name: 'confirmation',
          message: `You have ${points} points to distribute among the following attributes: speed, strength and defense. Choose wisely!`,
        },
      ],
    )
  }

  async askAttributesPoints() {
    return await inquirer.prompt(
      [
        {
          type: 'number',
          name: 'speed',
          message: 'What is your speed?',
        },
        {
          type: 'number',
          name: 'strength',
          message: 'What is your strength?',
        },
        {
          type: 'number',
          name: 'defense',
          message: 'What is your defense?',
        },
      ],
    )
  }

  async chooseMode() {
    return await inquirer.prompt(
      [
        {
          type: 'select',
          name: 'mode',
          message: 'Choose a battle mode:',
          choices: [
            {
              name: 'Auto',
              value: 'auto',
              description: 'Your battle will occur automatically.',
            },
            {
              name: 'Interactive',
              value: 'interactive',
              description: 'You will choose your actionsduring the battle.',
            },
          ],
        },
      ],
    )
  }

  async chooseAction() {
    return await inquirer.prompt(
      [
        {
          type: 'select',
          name: 'action',
          message: 'What will you do?',
          choices: [
            {
              name: 'Attack',
              value: 'attack',
            },
            {
              name: 'Defend',
              value: 'defend',
            },
          ],
        },
      ],
    )
  }
}

export default QuestionsModule
