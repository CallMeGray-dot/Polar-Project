const Discord = require('discord.js')

module.exports = {  
   commands: ['botinfo', 'bot-info', 'stats'],
   description: 'Shows bot info',
   callback: (message, args) => {
   const ramdt = (`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB Ram`);
   const info = new Discord.MessageEmbed()
   .setTitle('Here is my bot info!')
   .setDescription('Here is all the info!')
   .setTimestamp()
   .addFields(
   { name: `Bot Created On`, value: 'Wed, 16 Dec 2020 23:33:56 GMT', inline: true },
   { name: `Owner`, value: 'Jigr#0398, CallMeGray#0621', inline: true },
   { name: `Uptime`, value: '98.97%', inline: true },
   { name: `Commands`, value: '129 Commands in total', inline: true },
   { name: `Host`, value: 'Hosted Using: QuackHost.uk', inline: true },
   { name: `Ram Usage`, value: ramdt, inline: true}
)
message.channel.send(info)
 }
}
