const Discord = require('discord.js')

module.exports = {
commands: ['lock'],
description: 'Locks a channel',
usage: '<role>',
permissions: ['ADMINISTRATOR'],
callback: (msg, args, message) => {

let lockrole = msg.mentions.roles.first()

const embed = new Discord.MessageEmbed()
.setColor('#ff0000')
.setDescription('🔒CHANNEL LOCKED')

msg.channel.updateOverwrite(lockrole, { SEND_MESSAGES: false }, `Overwrite permissions`)

msg.channel.send(embed)
.catch(error => {
    console.log("Oh no! Something went wrong! " + error.message);
});
    
    
  
}}