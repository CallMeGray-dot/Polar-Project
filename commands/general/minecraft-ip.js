const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  commands: ['minecraftip', 'ip', 'minecraft'],
  description: 'Shows Minecraft Server IP.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
    const IP = new MessageEmbed()
      .setTitle('Minecraft Server!')
      .setDescription('161.129.152.53:25929')
      .setFooter('This is the official Craft Gods Minecraft Server')

    message.channel.send(IP)
  }
}