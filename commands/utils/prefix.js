const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')
const botPrefix = require('discord-prefix') 

module.exports = {
    commands: ['setprefix'],
    usage: '<new prefix>',
    minArgs: 1,
    maxArgs: null,
    permissions: ['ADMINISTRATOR'],
    requiredRoles: [],
    callback: (message, args) => {
        const newPrefix = args.join(' ')
        botPrefix.setPrefix(newPrefix.toLowerCase(), message.guild.id)
        const embed = new MessageEmbed()
      .setTitle(`Prefix is now ${newPrefix.toLowerCase()}`)
      .setColor('#77dd77')
      .setFooter(`Updated by: ${message.author.tag}`, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    message.channel.send(embed)
    }
   }
