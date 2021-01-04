const firstMessage = require('./message')
const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
  const channelId = '792313563800666127'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    flexer_crying: 'Members',
    gold_ingot: 'Notifications',
  }

  const reactions = []

  let emojiText = ``

  const embed = new MessageEmbed()
    .setTitle(`🔔 | Claim Roles`)
    .setColor(0xfdfd96)

  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
    embed.setDescription(emojiText)
  }

  firstMessage(client, channelId, embed, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '781721643529142332') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}