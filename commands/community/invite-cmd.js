const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['invite', 'inv'],
  description: 'Shows Invite Link for Support Server And bot',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
    const { guild } = message
    const icon = guild.iconURL()
    const invite = new MessageEmbed()
      .setTitle('Invite Me To Your Server or Join Our Support Server!')
      .setDescription('[Invite Polar](https://discord.com/api/oauth2/authorize?client_id=788911823969583175&permissions=8&scope=bot)\n[Join Our Support Server](https://discord.gg/WUvRbRd88B)')
      .setColor('#aec6cf')
      .setFooter('Invite our bot or join our support server!')

    message.channel.send(invite)
  }
}