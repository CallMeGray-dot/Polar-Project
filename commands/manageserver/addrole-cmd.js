const Discord = require('discord.js')
const MessageEmbed = require('discord.js')

module.exports = {
  commands: ['addrole'],
  description: 'Adds a role to a user',
  usage: '<user> <role>',
  minArgs: 1,
  maxArgs: null,
  permissions: ['MANAGE_ROLES'],
  requiredRoles: [],
  callback: (message, arguments) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
    message.reply(`Please specify a user to add a role to`)
    return
    }

    arguments.shift()

    const roleName = arguments.join(' ')
    const { guild } = message

    const role = message.mentions.roles.first();
    if (!role) {
      message.reply(`Role does not exist please create the role ${role}`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)
    member.roles.add(role)
    message.reply(`${member} now has the role ${role}`)
  },
}