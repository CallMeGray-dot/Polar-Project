const Discord = require('discord.js')

module.exports = {
commands: ['source', 'sourcecode'],
description: 'Shows source code of bot',
callback: (message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('Here is the source code!')
.setFooter('Click on the title to go to the source code')
.setURL('https://github.com/CallMeGray-dot/Polar-Project')
message.channel.send(embed)
 }
}