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
      .setDescription('[Vote For It On Botrix](https://botrix.cc/bots/764658413636288514)\n[Vote For It On Discord Bot List](https://discordbotlist.com/bots/yuni)\n[Vote For It on Discord Boats](https://discord.boats/bot/764658413636288514)\n[Vote For It On TopGG](https://top.gg/bot/764658413636288514)')
      .setColor('#FF8C00')
      .setFooter('And don\'t forget to vote!')

    message.channel.send(vote)
  }
}
