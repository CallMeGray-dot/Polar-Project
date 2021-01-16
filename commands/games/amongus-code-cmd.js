const Discord = require('discord.js');

module.exports = {
commands: ['amonguscode'],
description: 'Show An Among Us Code',
callback: (message) => {
//Embed message
message.channel.send("Give Me The Code").then(msg3 => {
   let urdadcasueyes = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
             .on('collect', c => {
               let cod = c.content
message.channel.send("Give me The Region Of The Game").then(msg3 => {
let urmomcauseyes = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
          .on('collect', d => {
            let desc = d.content
            const codeembed = new Discord.MessageEmbed() 
.setDescription(`Join the room with the code: **${cod}**`)
.setColor('RANDOM')
.setTimestamp()
.setImage('https://imgur.com/a/HRoZL0i)')
.setTitle(`Region: ${desc}`)
.setFooter(`Game Made By ${message.author.username}`, message.author.displayAvatarURL())
message.channel.send(codeembed)
      });
   })
})
})
   }
}