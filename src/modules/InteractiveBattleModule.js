import QuestionsModule from './QuestionsModule.js'

class InteractiveBattleModule {
  constructor(player, enemy) {
    this.questions = new QuestionsModule()
    this.player = player
    this.enemy = enemy
  }

  /**
   * Starts an interactive battle
   *
   */
  async start() {
    this.checkCombat()
    
    const [ first, second ] = this.determineOrder()

    while (this.checkLife(first) && this.checkLife(second)) {
      this.runTurn(first, second)
    }
  }

  /**
   * Determine first and second attacker
   *
   * @returns {array}
   * 
   */
  determineOrder() {
    if (this.player.speed > this.enemy.speed) {
      return [this.player, this.enemy]
    } else {
      return [this.enemy, this.player]
    }
  }
  
  countTurn(turn) {
    return turn++
  }

  /**
   * Runs one turn
   *
   * @param {object} first
   * @param {object} second
   *
   */
  async runTurn(first, second) {
    const action = await this.questions.chooseAction()
  }

  /**
   * Check if a given character has life remaining
   * 
   * @param {object} character
   * 
   * @returns {boolean}
   *
   */
  checkLife(character) {
    if (character.life > 0) {
      return true
    }
  
    return false
  }

  /**
   * Check if at least one combatent has strength to damage the other
   * 
   * @param {object} player
   * @param {object} enemy
   * 
   * @returns {void}
   *
   */
  checkCombat() {
    if (this.player.strength < this.enemy.defense && this.enemy.strength < this.player.defense) {
      throw new Error('There is no combat due the low level of strength of both characters!')
    }
  }
}

export default InteractiveBattleModule
