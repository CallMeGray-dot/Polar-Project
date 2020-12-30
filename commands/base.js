const Discord = require('discord.js')
const botPrefix = require('discord-prefix')
const { MessageEmbed } = require('discord.js')

const validatePermissions = (permissions) => {
  const validPermissions = [
    'CREATE_INSTANT_INVITE',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'ADMINISTRATOR',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'ADD_REACTIONS',
    'VIEW_AUDIT_LOG',
    'PRIORITY_SPEAKER',
    'STREAM',
    'VIEW_CHANNEL',
    'SEND_MESSAGES',
    'SEND_TTS_MESSAGES',
    'MANAGE_MESSAGES',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MENTION_EVERYONE',
    'USE_EXTERNAL_EMOJIS',
    'VIEW_GUILD_INSIGHTS',
    'CONNECT',
    'SPEAK',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'USE_VAD',
    'CHANGE_NICKNAME',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS'
  ]

  for (const permission of permissions) {
    if (!validPermissions.includes(permission)) {
      throw new Error(`Unknown Permission: ${permission}`)
    }
  }
}

module.exports = (client, commandOptions) => {
  let {
    commands,
    description = '',
    usage = '',
    minArgs = 0,
    maxArgs = null,
    permissions = [],
    requiredRoles = [],
    callback,
  } = commandOptions

  if (typeof commands === 'string') {
    commands = [commands]
  }

  if (permissions.length) {
    if (typeof permissions === 'string') {
      permissions = [permissions]
    }

    validatePermissions(permissions)
  }

  client.on('message', (message) => {
    if(message.author.bot || message.channel.type === 'dm') return
    const { member, content, guild } = message
    
    const prefix = botPrefix.getPrefix(guild.id)

    for (const alias of commands) {
      const command = `${prefix}${alias.toLowerCase()}`

      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {

        for (const permission of permissions) {
          if (!member.hasPermission(permission)) {
            const deny = new Discord.MessageEmbed()
              .setTitle('Permissions Denied')
              .setDescription('It seems that you have insufficient permissions to run this command!')
              .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
              .setColor('#ff6961')
              .addFields(
                { name: 'Missing Permission:', value: permission, inline: true }
              )

            message.channel.send(deny)

            console.log(`Command Performed: ${prefix}${alias} by ${message.author.username} | Failed: Insufficient Permissions`)
            message.delete().catch(O_o => { })
            return
          }
        }

        for (const requiredRole of requiredRoles) {
          const role = guild.roles.cache.find(
            (role) => role.name === requiredRole
          )

          if (!role || !member.roles.cache.has(role.id)) {
            const roleDeny = new Discord.MessageEmbed()
              .setTitle('Insufficient Roles')
              .setDescription('It seems that you have missing roles to run this command!')
              .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
              .setColor('#ff6961')
              .addFields(
                { name: 'Missing Role:', value: requiredRole, inline: true }
              )

            message.channel.send(roleDeny)

            console.log(`Command Performed: ${prefix}${alias} by ${message.author.username} | Failed: Insufficient Roles`)
            message.delete().catch(O_o => { })
            return
          }
        }

        const arguments = content.split(/[ ]+/)
        arguments.shift()

        if (
          arguments.length < minArgs ||
          (maxArgs !== null && arguments.length > maxArgs)
        ) {
          const incorrectSyntax = new Discord.MessageEmbed()
            .setTitle('Incorrect Syntax')
            .setDescription('It seems that you entered the incorrect syntax for this command!')
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#ff6961')
            .addFields(
              { name: 'Syntax:', value: `${prefix}${alias} ${usage}`, inline: true }
            )

          message.channel.send(incorrectSyntax)

          console.log(`Command Performed: ${prefix}${alias} by ${message.author.username} | Failed: Incorrect Syntax From ${guild.name}`)
          message.delete().catch(O_o => { })
          return
        }

        console.log(`Command Performed: ${prefix}${alias} by ${message.author.username} From ${guild.name} and in ${guild.channel} channel`)
        

        callback(message, arguments, arguments.join(' '), client)
        return
      }
      if (content.toLowerCase() === `${prefix}commandhelp ${alias.toLowerCase()}`) {
        if (!description) description = 'No description'
        if (usage === null) usage = 'Not specified'
        if (maxArgs === null) maxArgs = 'Unlimited'
        if(minArgs === null) minArgs = 0
        const embed = new MessageEmbed()
          .setColor(guild.me.displayHexColor)
          .addFields(
            { name: 'Command:', value: `\`${command}\`` },
            { name: 'Usage:', value: `\`${usage}\`` },
            { name: 'Description:', value: description },
            { name: 'Min Arguments:', value: minArgs, inline: true },
            { name: 'Max Arguments:', value: maxArgs, inline: true }
          )
          message.channel.send(embed)
         }
          
    }
  })
}