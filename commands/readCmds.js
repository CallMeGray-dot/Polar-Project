const path = require('path')
const fs = require('fs')
const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
  const baseFile = 'base.js'
  const commandBase = require(`./${baseFile}`)

  const commands = []

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile && file !== 'readCmds.js') {
        const option = require(path.join(__dirname, dir, file))
        commands.push(option)
        if (client) {
          commandBase(client, option)
        }
      }
    }
  }

  try {
    readCommands('.')
    return commands 
  } catch (err) {
    const channel = client.channels.cache.get('792313563800666127')
    if (!channel) {
      throw new Error(`Could not find channel with ID '792313563800666127'`)
    }


    const embed = new MessageEmbed()
      .setTitle('⚠ | Error Detected')
      .setDescription('Full error is shown on console\nCommand execution errors will not be shown here')
      .setColor('#ff6961')
      .setFooter(`Please run the feedback command and select the first option`)
      .addFields(
        { name: 'Error:', value: err.message, inline: true }
      )
      .setTimestamp()

    channel.send(embed)
    console.log(err)
    return
  }
}