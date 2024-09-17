class BattleModule {
  start(player, enemy) {
    this.checkCombat(player, enemy)

    const [ firstAttacker, secondAttacker ] = this.determineFirstAndSecond(player, enemy)

    this.alternateTurn(1, firstAttacker, secondAttacker)
  }

  checkCombat(player, enemy) {
    if (player.strength < enemy.defense && enemy.strength < player.defense) {
      throw new Error('There is no combat due the low level of strength of both characters!')
    }
  }

  determineFirstAndSecond(player, enemy) {
    if (player.speed > enemy.speed) {
      return [player, enemy]
    } else {
      return [enemy, player]
    }
  }

  alternateTurn(turn, firstAttacker, secondAttacker) {
    setTimeout(() => {
      if (turn % 2 !== 0) {
        console.info('--------------------------------------------')
        console.info(`Turn ${turn}: ${firstAttacker.name} attacks!`)

        const damage = this.calculateDamage(firstAttacker, secondAttacker)

        console.info(`Damage: ${damage}`)

        secondAttacker.life -= damage

        console.info(`${secondAttacker.name} has ${secondAttacker.life} life left`)

        const next = this.checkLife(secondAttacker)

        if (next) {
          turn++
          this.alternateTurn(turn, firstAttacker, secondAttacker)
        } else {
          return console.info(`${firstAttacker.name} won!`)
        }
      } else {
        console.info('--------------------------------------------')
        console.info(`Turn ${turn}: ${secondAttacker.name} attacks!`)

        const damage = this.calculateDamage(secondAttacker, firstAttacker)

        console.info(`Damage: ${damage}`)

        firstAttacker.life -= damage

        console.info(`${firstAttacker.name} has ${firstAttacker.life} life left`)
        
        const next = this.checkLife(firstAttacker)

        if (next) {
          turn++
          this.alternateTurn(turn, firstAttacker, secondAttacker)
        } else {
          return console.info(`${secondAttacker.name} won!`)
        }
      }
    }, 1000)
  }

  calculateDamage(attacker, defender) {
    const damage = attacker.strength - defender.defense

    return damage > 0 ? damage : 0
  }

  checkLife(character) {
    if (character.life > 0) {
      return true
    }

    return false
  }
}

export default BattleModule
