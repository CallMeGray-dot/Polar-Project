const Discord = require('discord.js')
const Client = new Discord.Client()

module.exports = {
  commands: ['announce'],
  description: 'Repeats What u say but announces.',
  usage: '<channel> <message>',
  minArgs: 0,
  maxArgs: null,
  permissions: ['MANAGE_MESSAGES'],
  requiredRoles: [],
  callback: (message, args) => {
  message.delete()
        const channel = message.mentions.channels.first()
        if (!channel) {
            message.reply("Specify the channel to send this announcement")
            return
        } else {
            let annuncment = args.slice(1).join(" ")
            if(!annuncment) return message.channel.send(`You did not specify what you want to announce`)
            const Embed = new Discord.MessageEmbed()
            .setTitle(`New Announcment!`)
            .setDescription(`${annuncment}`)
            .setFooter(`Sent by: ${message.author.tag}`)
            .setColor("004EFF")
            channel.send(`@everyone`).then(m => m.delete())
            channel.send(Embed)
  }
 }
}