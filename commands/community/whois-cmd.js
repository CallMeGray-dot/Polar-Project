const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['user-info', 'userinfo', 'user', 'ui', 'whois'],
    description: 'Gets a user\'s info',
    usage: '<user>',
    minArgs: 0,
    maxArgs: 1,
    permissions: [],
  callback: (message, args) => {
    try {
      const user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.author
      const member = message.guild.members.cache.get(user.id)

      let { bot, id } = user
      let { displayHexColor, premiumSince } = member

      let thumbnail = ''
      if (bot === true) thumbnail = 'https://images.emojiterra.com/twitter/v13.0/512px/1f916.png'
      if (bot === false) thumbnail = 'https://images.emojiterra.com/twitter/v13.0/512px/1f9d1.png'
      let serverMessages = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
      if (serverMessages === null) serverMessages = 0

      const roleCount = member.roles.cache.size
      const createdAt = new Date(user.createdTimestamp).toUTCString()
      const joinedAt = new Date(member.joinedTimestamp).toUTCString()

      const embed = new MessageEmbed()
        .setTitle(`${user.username}'s Info`)
        .setColor(displayHexColor)
        .setFooter(`ID: ${id}`)
        .setThumbnail(thumbnail)
        .setTimestamp()
        .addFields(
        { name: 'User', value: `<@${user.id}>`, inline: true },
        { name: 'Created On', value: `${createdAt}`, inline: true },
        { name: 'Joined Server On', value: `${joinedAt}`, inline: true },
        { name: 'Bot', value: `${bot ? 'Yes' : 'No'}`, inline: true },
        { name: 'Avatar', value: `[Click Here](${user.displayAvatarURL({ size: 4096, dynamic: true })})`, inline: true }, 
        { name: 'Total Messages Sent(This Server)', value: `${serverMessages}`, inline: true },
        { name: 'Total Roles', value: `${roleCount}`, inline: true },
        { name: 'Boosting Since', value: `${premiumSince ? premiumSince : 'Not Boosting'}`, inline: false }
        )

      message.channel.send(embed)
          } catch (err) {
      console.log(err)
    }
  }
}
