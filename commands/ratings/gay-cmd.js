const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  commands: ['gay'],
  description: 'Shows Gay Meter',
  usage: '<user>',
  minArgs: null,
  maxArgs: 1,
  permissions: [],
  requiredRoles: [],
  callback: async message => {
const mentionedMember = message.mentions.users.first()
        if (!mentionedMember) return message.channel.send('You need to mention before checking')
        const gayr8 = Math.floor(Math.random() * 100) + 0;
        const embed = new Discord.MessageEmbed()
           .setTitle(`Gayr8 Machine`)
           .setDescription(`:rainbow_flag: ${mentionedMember} is ${gayr8}% gay`)
           .setFooter(`Totally real gay rate checker`)
           .setColor(`RANDOM`)
           message.channel.send(embed)
    }
}