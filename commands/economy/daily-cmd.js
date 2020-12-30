const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  commands: ['daily', 'day'],
  usage: '',
  minArgs: 0,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: async (message) => {
    let user = message.author

    let timeout = 86400000
    let amount = 2500// amount you want

    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`)

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily))

      message.channel.send(`You impatient member, u already received it. Wait ${time.hours}h, ${time.minutes}m, ${time.seconds}s.`)
      return
    } else {
      message.channel.send(`You received a daily reward of ${amount} coins!`)
      db.add(`money_${message.guild.id}_${user.id}`, amount)
      db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
    }
  }
}