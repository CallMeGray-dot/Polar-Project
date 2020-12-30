const db = require('quick.db')
const Discord = require('discord.js')


module.exports = {
  commands: ['balance', 'bal'],
  usage: '[user]',
  minArgs: 0,
  maxArgs: 1,
  permissions: [],
  requiredRoles: [],
  callback: async (message, args) => {
      let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.author
  if(args[0]) user = message.mentions.users.first() || message.client.users.cache.find(u => u.username.toLowerCase().startsWith(args[0]).toLowerCase()) 
  || message.client.users.cache.get(args[0]) || message.author


    let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
 
   const embed = new Discord.MessageEmbed()
   .setTitle(`${user.username}'s Balance`)
   .setColor('RANDOM')
   .setDescription(`Here is ${user}'s Balance\n**Wallet:** ${bal}\n**Bank:** ${bank}`)
   .setFooter('This is what i call rich')
   
   message.channel.send(embed)
  }
}