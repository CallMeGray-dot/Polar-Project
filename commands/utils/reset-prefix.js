const botPrefix = require('discord-prefix')
const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['resetprefix'],
  permissions: ['MANAGE_GUILD'],
  callback: (message) => {
  const prefix = botPrefix.getPrefix(message.guild.id)
  botPrefix.setPrefix('p!')
  const embed = new MessageEmbed()
  .setTitle('Successfully Reset the prefix')
  .setDescription(`The prefix has been reset to ${prefix}`)
  .setFooter('Prefix has been reset!')
  .setColor('#77dd77')

message.channel.send(embed)
  }
}