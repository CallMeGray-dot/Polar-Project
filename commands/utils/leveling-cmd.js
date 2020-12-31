module.exports = {
    commands: ['togglelevels'],
    description: 'Turns on or off the leveling system',
    permissions: ['MANAGE_GUILD'],
callback: (message) => {
    const db = require('quick.db')
    const bool = db.fetch(`leveling_${message.guild.id}`)

    if (bool === false || bool === null) {
      db.set(`leveling_${message.guild.id}`, true)
      message.channel.send('leveling system enabled')
      return
    }

    if (bool === true) {
      db.set(`leveling_${message.guild.id}`, false)
      message.channel.send('leveling system disabled')
      return
    }
   }
  }
