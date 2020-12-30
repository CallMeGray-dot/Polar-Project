const { MessageEmbed } = require('discord.js') 

module.exports = {
  commands: ['add', 'addition', "+"], 
  description: 'Adds numbers', 
  usage: '<num1> <num2>', 
  minArgs: 2, 
  maxArgs: 2, 
  permissions: [], 
  requiredRoles: [], 
  callback: (message, args) => { 
    const num1 = +args[0] 
    const num2 = +args[1] 

    const sum = new MessageEmbed() // Creates an embed
      .setTitle(`${num1} + ${num2} = ${num1 + num2}`)
      .setDescription(`Hey! Don't cheat in your homework!`)
      .setColor('#fdfd96')
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setFooter('If the answer was NaN, please think and use numbers. 🔢 | Not words!')
      .addFields(
        { name: 'Type:', value: 'Addition', inline: true }
      )

    message.channel.send(sum) // Sends the embed
  }
} 