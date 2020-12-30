const { MessageEmbed } = require('discord.js')
const botPrefix = require('discord-prefix')

module.exports = {
  commands: ['avatar', 'icon', 'av'],
  description: 'Gets a users avatar',
  usage: null,
  minArgs: null,
  maxArgs: 1,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
    const prefix = botPrefix.getPrefix(message.guild.id);
    let user

    if (message.mentions.users.first()) {
      user = message.mentions.users.first()
    } else {
      user = message.author
    }

    let avatar = user.displayAvatarURL({ size: 4096, dynamic: true })

    const avatarEmbed = new MessageEmbed()
      .setTitle(`Avatar for: ${user.tag}`)
      .setDescription(`URL for **${user.tag}**'s [avatar,](${avatar})`)
      .setImage(avatar)
      .setColor('RANDOM')
      .setFooter(`Simply type \`${prefix}avatar <user>\` to get a user's avatar!\nWoah this guys avatar is really cool!`)

    message.channel.send(avatarEmbed)
  }
}