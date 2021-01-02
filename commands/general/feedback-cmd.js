const { MessageEmbed } = require('discord.js')
const rs = require('randomstring')

module.exports = {
    commands: ['feedback', 'comment', 'report', 'opinion'],
    description: 'Creates a ticket, sends this ticket to bot directors and developers',
    usage: null,
    minArgs: 0,
    maxArgs: 0,
  callback: async (message) => {

    const code = rs.generate({
      length: 6,
      charset: 'alphanumeric',
      readable: true,
    })

    let user = message.author

    try {
      const embed = new MessageEmbed()
        .setDescription(`<@${message.author.id}>, please check your DMs.`)
        .setColor('#77dd77')
        .setTimestamp()

      message.channel.send(embed)

      const embed1 = new MessageEmbed()
        .setTitle('Confirmation')
        .setDescription('Please react with 🎫 to proceed! To cancel, react with ❌.')
        .setColor('#FFA500')
        .setTimestamp()

      const embedMessage = await user.send(embed1)
      embedMessage.react('🎫')
      setTimeout(() => {
        embedMessage.react('❌')
      }, 1000)

      embedMessage.awaitReactions((reaction, discordUser) => discordUser.id == message.author.id && (reaction.emoji.name == '🎫' || reaction.emoji.name == '❌'),
        { max: 1, time: 30000 }).then(async (m) => {
          if (m.first().emoji.name == '❌') {
            embedMessage.delete()
            const embed = new MessageEmbed()
              .setTitle('Operation Canceled')
              .setDescription('Feel free to open a ticket if have any queries!')
              .setColor('#FF7F50')
              .setTimestamp()

            user.send(embed)
          }

          if (m.first().emoji.name == '🎫') {
            embedMessage.delete()
            const embed = new MessageEmbed()
              .setTitle('Please select a topic about your query:')
              .setDescription('1️⃣ - I encountered a bug with this bot\n2️⃣ - I have a suggestion for the bot\n❌ - Cancel')
              .setColor('#fdfd96')
              .setTimestamp()

            const embedMessage1 = await user.send(embed)
            embedMessage1.react('1️⃣')
            setTimeout(() => {
              embedMessage1.react('2️⃣')
            }, 1000)
            setTimeout(() => {
              embedMessage1.react('❌')
            }, 1000)

            embedMessage1.awaitReactions((reaction, discordUser) => discordUser.id == message.author.id && (reaction.emoji.name == '1️⃣' || reaction.emoji.name == '2️⃣' || reaction.emoji.name == '❌'),
              { max: 1, time: 30000 }).then(async (msg) => {
                if (msg.first().emoji.name == '❌') {
                  embedMessage1.delete()
                  const embed = new MessageEmbed()
                    .setTitle('Operation Canceled')
                    .setDescription('Feel free to open a ticket if you have any queries!')
                    .setColor('#FF7F50')
                    .setTimestamp()

                  user.send(embed)
                }

                if (msg.first().emoji.name == '1️⃣') {
                  embedMessage1.delete()
                  let customEmbed = new MessageEmbed()
                    .setDescription(`Ticket Code: ${code}`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
                    .setColor(message.member.displayHexColor)
                    .setTimestamp()

                  const embed = new MessageEmbed()
                    .setTitle('Give me a brief description')
                    .setDescription('Enter a brief description on the bug.\n\n1) What\'s the bug?\n2) What will go wrong?\n3) How we should improve it')
                    .setColor('#ff6961')
                    .setTimestamp()

                  const embedMessage2 = await user.send(embed)
                  const topic = await embedMessage2.channel.awaitMessages(msg => msg.author.id === message.author.id,
                    { max: 1, time: 30000 })

                  if (topic.size) {
                    embedMessage2.delete()
                    if (topic.first().content.length > 1024) {
                      const embed = new MessageEmbed()
                        .setTitle('Hey!')
                        .setDescription('That description is long, try to shorten it.')
                        .setColor('#ff6961')
                        .setTimestamp()

                      user.send(embed)
                      return
                    }
                    customEmbed.addField('Problem:', topic.first().content)
                    const embed = new MessageEmbed()
                      .setTitle('Thanks!')
                      .setDescription(`You can react to ✅ to submit your ticket. React to ❌ to cancel.\n\nAnswered: ${topic.first().content}`)
                      .setColor('#77dd77')
                      .setTimestamp()

                    const embedMessage3 = await user.send(embed)
                    embedMessage3.react('✅')
                    setTimeout(() => {
                      embedMessage3.react('❌')
                    }, 1000)

                    embedMessage3.awaitReactions((reaction, discordUser) => discordUser.id == message.author.id && (reaction.emoji.name == '✅' || reaction.emoji.name == '❌'),
                      { max: 1, time: 30000 }).then(async (collected) => {
                        if (collected.first().emoji.name == '❌') {
                          embedMessage3.delete()
                          const embed = new MessageEmbed()
                            .setTitle('Operation Canceled')
                            .setDescription('Feel free to open a ticket if you have any queries!')
                            .setColor('#FF7F50')
                            .setTimestamp()

                          user.send(embed)
                        }

                        if (collected.first().emoji.name == '✅') {
                          embedMessage3.delete()
                          const embed = new MessageEmbed()
                            .setTitle('Ticket Submitted')
                            .setDescription('Thank you for submitting your ticket.')
                            .setColor('#77dd77')
                            .setTimestamp()

                          user.send(embed)

                          setTimeout(() => {
                            const guild = message.client.guilds.cache.get('792313562060029972')
                            const channel = guild.channels.cache.get('794842513411145749')
                            channel.send(customEmbed)
                          }, 1000)
                        }
                      })
                  }
                }

                if (msg.first().emoji.name == '2️⃣') {
                  embedMessage1.delete()
                  let customEmbed = new MessageEmbed()
                    .setDescription(`Ticket Code: ${code}`)
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
                    .setColor(message.member.displayHexColor)
                    .setTimestamp()

                  const embed = new MessageEmbed()
                    .setTitle('What\'s the suggestion?')
                    .setDescription('Enter a brief description on the suggestion.\n\n1) What\'s the suggestion\n2) What are the benefits to this suggestion?\n3) What are the disadvantages to this suggestion?\n4) Why you like this suggestion')
                    .setColor('#ff6961')
                    .setTimestamp()

                  const embedMessage2 = await user.send(embed)
                  const topic = await embedMessage2.channel.awaitMessages(msg => msg.author.id === message.author.id,
                    { max: 1, time: 30000 })

                  if (topic.size) {
                    embedMessage2.delete()
                    if (topic.first().content.length > 1024) {
                      const embed = new MessageEmbed()
                        .setTitle('Hey!')
                        .setDescription('That description is long, try to shorten it.')
                        .setColor('#ff6961')
                        .setTimestamp()

                      user.send(embed)
                      return
                    }
                    customEmbed.addField('Suggestion:', topic.first().content)
                    const embed = new MessageEmbed()
                      .setTitle('Thanks!')
                      .setDescription(`You can react to ✅ to submit your ticket. React to ❌ to cancel.\n\nAnswered: ${topic.first().content}`)
                      .setColor('#77dd77')
                      .setTimestamp()

                    const embedMessage3 = await user.send(embed)
                    embedMessage3.react('✅')
                    setTimeout(() => {
                      embedMessage3.react('❌')
                    }, 1000)

                    embedMessage3.awaitReactions((reaction, discordUser) => discordUser.id == message.author.id && (reaction.emoji.name == '✅' || reaction.emoji.name == '❌'),
                      { max: 1, time: 30000 }).then(async (collected) => {
                        if (collected.first().emoji.name == '❌') {
                          embedMessage3.delete()
                          const embed = new MessageEmbed()
                            .setTitle('❌ | Operation Canceled')
                            .setDescription('Feel free to open a ticket if you have any queries!')
                            .setColor('#FF7F50')
                            .setTimestamp()

                          user.send(embed)
                        }

                        if (collected.first().emoji.name == '✅') {
                          embedMessage3.delete()
                          const embed = new MessageEmbed()
                            .setTitle('Ticket Submitted')
                            .setDescription('Thank you for submitting your ticket.')
                            .setColor('#77dd77')
                            .setTimestamp()

                          user.send(embed)

                          setTimeout(() => {
                            const guild = message.client.guilds.cache.get('792313562060029972')
                            const channel = guild.channels.cache.get('794842513411145749')
                            channel.send(customEmbed)
                          }, 1000)
                        }
                      })
                  }
                }
              })
          }
        })
    } catch {
      const embed = new MessageEmbed()
        .setTitle('Could not DM you')
        .setDescription('Please head to `User Settings > Privacy & Safety > Allow direct messages from server members` and enable it.')
        .setColor('#ff6961')
        .setFooter(message.author.tag, message.autor.displayAvatarURL({ size: 4096, dynamic: true }))
        .setImage('https://i.imgur.com/AO6I2n5.png')
        .setTimestamp()

      message.channel.send(embed)
    }
  }
}