const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
  commands: ['beg'], 
  minArgs: 0,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: async (message) => {
    let user = message.author;
    let author = await db.fetch(`beg_${message.guild.id}_${user.id}`)

    let timeout = 20;
    
    if (author !== null && timeout - (Date.now() - author) > 20) {
        let time = s(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle('You already begged!')
        .setDescription(`:cross: You have already begged recently\n\nTry again in ${time.minutes}m ${time.seconds}s impatient member`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['You Begged Ariana Grande', 'You Begged Justin Bebier', 'You Begged Beyonce', 'You Begged a random person', 'You Begged Your Girlfriend', 'You Begged Discord', 'You Begged Your Mom']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 100) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle('Begged')
        .setDescription(`:white_check_mark:  ${replies[result]} and got ${amount} coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}

}