const Discord = require('discord.js')
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js')
const { randomQuotes } = require('../../randomQuotes.json');

module.exports = {
  commands: ['quote'],
  description: 'Gets random quotes',
  usage: null,
  minArgs: null,
  maxArgs: 1,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
        const embed = new Discord.MessageEmbed()
          .setTitle('Quotes for you')
          .setColor('RANDOM')
          .setDescription(`**Here is my quote for you <@${message.author.id}>**\n\n*${randomQuotes[Math.floor(Math.random() * randomQuotes.length )]}*`)
          .setTimestamp()
        message.channel.send(embed)
      }
    }