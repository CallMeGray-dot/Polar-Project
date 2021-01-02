const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['leaderboard'],
    description: 'Displays the leaderboard for levels',
    usage: null,
    minArgs: 0,
    maxArgs: 0,
    permissions: [],
  callback: async (message) => {
    const embed = new MessageEmbed()
      .setTitle('Choose a Leaderboard')
      .setDescription('🔢 - Level Leaderboard\n💬 - Message Leaderboard')
      .setColor('#77dd77')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    const embedMessage = await message.channel.send(embed)
    embedMessage.react('🔢')
    setTimeout(() => {
      embedMessage.react('💬')
    }, 1000)

    embedMessage.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '🔢' || reaction.emoji.name == '💬'),
      { max: 1, time: 30000 }).then(collected => {
        if (collected.first().emoji.name == '🔢') {
          let levels = db.startsWith(`level_${message.guild.id}`, { sort: '.data' })
          let content = ''

          for (let i = 0; i < levels.length; i++) {
            let user = message.client.users.cache.get(levels[i].ID.split('_')[2]).id

            content += `${i + 1}) <@${user}> - \`${levels[i].data}\`\n`
          }

          const embed = new MessageEmbed()
            .setTitle('🔢 | Level Leaderboard')
            .setDescription(content)
            .setColor('#fdfd96')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()

          message.channel.send(embed)
          embedMessage.delete()
        }

        if (collected.first().emoji.name == '💬') {
          let messages = db.startsWith(`messages_${message.guild.id}`, { sort: '.data' })
          let content = ''

          for (let i = 0; i < messages.length; i++) {
            let user = message.client.users.cache.get(messages[i].ID.split('_')[2]).id

            content += `${i + 1}) <@${user}> - \`${messages[i].data}\`\n`
          }

          const embed = new MessageEmbed()
            .setTitle('💬 | Messages Leaderboard')
            .setDescription(content)
            .setColor('#fdfd96')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()

          message.channel.send(embed)
          embedMessage.delete()
        }
      })
  }
}