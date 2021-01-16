const Discord = require('discord.js')

module.exports = {
commands: ['unlock'],
description: 'Unlocks a channel',
usage: '<role>',
permissions: ['ADMINISTRATOR'],
callback: (msg, args, message) => {

let unlockrole = msg.mentions.roles.first()

const embed = new Discord.MessageEmbed()
.setColor('#ff0000')
.setDescription('🔓CHANNEL UNLOCKED')

msg.channel.updateOverwrite(unlockrole, { SEND_MESSAGES: true }, `Overwrite permissions`)

msg.channel.send(embed)
.catch(error => {
    console.log("Oh no! Something went wrong! " + error.message);
});
    
    
  
}}