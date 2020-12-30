const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
  commands: ['work'], 
  minArgs: 0,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: async (message) => {
    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 21600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle('You Already Worked')
        .setDescription(`:cross: You have already worked recently\n\nTry again in ${time.days} days, ${time.hours} hours, ${time.minutes}m and ${time.seconds}s`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Boss', 'Principal', 'Teacher', 'Olmypic Member']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 2000) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle('You Worked')
        .setDescription(`:white_check_mark:  You worked as a ${replies[result]} and earned ${amount} coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}

}