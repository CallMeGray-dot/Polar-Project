const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['vote'],
  description: 'Shows Vote Links To Vote Bot.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
    const vote = new MessageEmbed()
      .setTitle('Vote The Bot!')
      .setDescription('[Vote For It On Botrix](https://botrix.cc/bots/788911823969583175)')
      .setColor('#FF8C00')
      .setFooter('And don\'t forget to vote!')

    message.channel.send(vote)
  }
}
