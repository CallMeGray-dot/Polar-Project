const Discord = require('discord.js')
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js')


module.exports = {
  commands: ['advice', 'adv'],
  description: 'Gets random advice',
  usage: null,
  minArgs: null,
  maxArgs: 1,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        const embed = new Discord.MessageEmbed()
          .setTitle('Advice for you')
          .setColor('RANDOM')
          .setDescription(`**Here is my advice for you <@${message.author.id}>**\n\n*${JSON.parse(body).slip.advice}*`)
          .setTimestamp()
        message.channel.send(embed)
      } else {
        const embed = new Discord.MessageEmbed()
          .setTitle('Oops.. An error')
          .setColor('RANDOM')
          .setDescription(`**Advice:**\n\nI couldn't think of any advice..`)
          .setTimestamp()
        message.channel.send(embed)
      }
    })

}};