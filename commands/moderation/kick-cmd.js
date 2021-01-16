const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: 'kick',
  description: 'Kicks users',
  usage: '<user> <reason>',
  minArgs: 1,
  maxArgs: null,
  permissions: ['KICK_MEMBERS'],
  requiredRoles: [],
  callback: async (message, args) => {
    let member = message.mentions.members.first()

    if (message.author.id == member || !member.kickable) {
      const unable = new MessageEmbed()
        .setTitle('Unable to Kick User')
        .setDescription('There was an error kicking this user. Please check if I have the permissions or that the user does not have a role higher to me.')
        .setAuthor('Error:')
        .setColor('#ff6961')

      return message.channel.send(unable)
    }

    let reason = args.slice(1).join(' ')
    if (!reason) reason = 'No reason provided'

    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec))

    const { guild } = message
    const { name } = guild
    const dm = new MessageEmbed()
      .setTitle(`You were kicked from ${name}!`)
      .setDescription(`Don't worry, this is just a kick! You can simply rejoin from an invite link.`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor('#808080')
      .setFooter(`Please don't repeat this behavior in the future!`)
      .setTimestamp()
      .addFields(
        { name: 'Reason:', value: reason, inline: true }
      )

    member.send(dm)
    console.log(`Sent the Kick Reason to ${member.user.tag}`)

    await delay(1000)

    await member.kick(reason)
    const success = new MessageEmbed()
      .setTitle(`Successfully Kicked: ${member.user.tag}`)
      .setDescription(`Reason: ${reason}`)
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setColor('#77dd77')
      .setFooter('Permissions Granted')
      .setTimestamp()

    message.channel.send(success)
  }
}