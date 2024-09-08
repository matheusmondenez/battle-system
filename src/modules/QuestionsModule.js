import inquirer from 'inquirer'

class QuestionsModule {
  async askName() {
    return await inquirer.prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: "What's your name?",
        },
      ],
    )
  }

  async showPointsDistributionMessage() {
    return await inquirer.prompt(
      [
        {
          type: 'confirm',
          name: 'confirmation',
          message: 'You have 20 points to distribute among the following attributes: speed, strength and defense. Choose wisely!',
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
}

export default QuestionsModule
