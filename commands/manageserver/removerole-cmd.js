const Discord = require('discord.js')
const MessageEmbed = require('discord.js')

module.exports = {
  commands: ['removerole', 'delrole', 'deleterole'],
  description: 'removes A role from a user',
  usage: '<user> <role>',
  minArgs: 1,
  maxArgs: null,
  permissions: ['MANAGE_ROLES'],
  requiredRoles: [],
  callback: (message, arguments) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.reply(`Please specify a user to remove a role to`)
      return
    }

    arguments.shift()

    const roleName = arguments.join(' ')
    const { guild } = message

    const role = message.mentions.roles.first();
    if (!role) {
      const embed = new MessageEmbed
      message.reply(`Role does not exist`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)
    member.roles.remove(role)
    const embed = new MessageEmbed
    message.reply(`${member} no longer has the ${role} role`)
  },
}