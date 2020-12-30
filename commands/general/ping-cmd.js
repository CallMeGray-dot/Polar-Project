const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  commands: ['ping', 'latency'],
  description: 'Shows Ping.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
    const ping = new MessageEmbed()
      .setTitle('🏓Pong!')
      .setDescription(`Ping is ${message.client.ws.ping}ms.\nAPI Ping Is ${Date.now() - message.createdTimestamp}ms.`)
      .setColor('#aec6cf')
      .setFooter('Nice Ping!')

    message.channel.send(ping)
  }
}