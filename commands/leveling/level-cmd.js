const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['level'],
    description: 'Shows a user\'s level',
    usage: '[user]',
    minArgs: 0,
    maxArgs: 1,
    permissions: [],
    callback: async (message) => {
    let user = message.mentions.users.first() || message.author

    let fetchLevel = db.fetch(`level_${message.guild.id}_${user.id}`)
    let fetchMessage = await db.fetch(`messages_${message.guild.id}_${user.id}`)

    const embed = new MessageEmbed()
      .setTitle(`${user.username}\'s Level:`)
      .setDescription(`Level: ${fetchLevel ? fetchLevel : '`0`'}\nMessages Sent: ${fetchMessage ? fetchMessage : '`0`'}\n(on this server)`)
      .setColor('#fdfd96')
      .setThumbnail(user.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    message.channel.send(embed)
  }
}