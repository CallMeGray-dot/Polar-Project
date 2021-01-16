const Discord = require('discord.js')
 
module.exports = {
    commands: ['website', 'web'],
    description: 'Shows website of bot',
    callback: (message, args) => { 
    const embed = new Discord.MessageEmbed()
    .setTitle('Here is the website')
    .setFooter('Click on the title for website link!')
    .setURL('https://polar-toe.webbonkers.repl.co/')
    message.channel.send(embed)
 }
}