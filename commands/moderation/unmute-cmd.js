const Discord = require('discord.js')

module.exports = {
    commands: ['unmute'],
    minArgs: 1,
    usage: '<user> <reason>',
    permissions: ['MANAGE_MESSAGES'],
    callback: (message, args, text, client) => {
        const member = message.mentions.members.first()
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        let reason = ''
        if (!role) return message.reply('A `muted` role does not exist yet! Please use `!mute` to generate it!')
        if (!member) return message.reply('Please mention a user!')
        if (!args[1]) reason = '`No reason provided`'
        else reason = `\`${args.slice(1).join(' ')}\``
        if (!member.roles.cache.find(r => r.name.toLowerCase() === 'muted')) return message.reply('User is not muted!')
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply('I do not have permissions to mute this user! `[MANAGE_ROLES]`')

        member.roles.remove(role)
        message.channel.send(`${member} has now been unmuted for ${reason}!`)
    }
}