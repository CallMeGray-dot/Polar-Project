const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['embed', 'custom-embed'],
    description: 'Creates a custom embed',
    usage: null,
    minArgs: 0,
    maxArgs: 0,
    permissions: ['MANAGE_MESSAGES'],
  callback: async (message) => {
    let customEmbed = new MessageEmbed()
    const embed = new MessageEmbed()
      .setTitle('What should be the title?')
      .setDescription('Type in `none` if you don\'t want a title.')
      .setColor('#D3D3D3')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    const embedMessage = await message.channel.send(embed)
    const title = await message.channel.awaitMessages(msg => msg.author.id === message.author.id,
      { max: 1, time: 30000 })

    if (title.size) {
      if (title.first().content !== 'none') {
        if (title.first().length > 256) {
          const embed = new MessageEmbed()
            .setTitle('Hey!')
            .setDescription('That\'s too long, embed titles can\'t exceed 256 characters!')
            .setColor('#ff6961')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()

          message.channel.send(embed)
          return
        }
        customEmbed.setTitle(title.first().content)
      }
      embedMessage.delete()
    }

    const embed1 = new MessageEmbed()
      .setTitle('What should be the description?')
      .setDescription('Type in `none` if you don\'t want a description.')
      .setColor('#D3D3D3')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    const embedMessage1 = await message.channel.send(embed1)
    const desc = await message.channel.awaitMessages(msg => msg.author.id === message.author.id,
      { max: 1, time: 30000 })

    if (desc.size) {
      if (desc.first().content !== 'none') {
        if (desc.first().length > 2048) {
          const embed = new MessageEmbed()
            .setTitle('Hey!')
            .setDescription('That\'s too long, embed titles can\'t exceed 2048 characters!')
            .setColor('#ff6961')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()

          message.channel.send(embed)
          return
        }
        customEmbed.setDescription(desc.first().content)
      }
      embedMessage1.delete()
    }

    const embed2 = new MessageEmbed()
      .setTitle('What should be the thumbnail? (Top right corner)')
      .setDescription('Type in `none` if you don\'t want a thumbnail.')
      .setColor('#D3D3D3')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    const embedMessage2 = await message.channel.send(embed2)
    const thumbnail = await message.channel.awaitMessages(msg => msg.author.id === message.author.id,
      { max: 1, time: 30000 })

    if (thumbnail.size) {
      if (thumbnail.first().content !== 'none') {
        if (!/\.(jpe?g|png|gif)$/i.test(thumbnail.first().content)) {
          const embed = new MessageEmbed()
            .setTitle('Invalid URL')
            .setDescription('URL should end with \`png | jpg | gif\`.')
            .setColor('#ff6961')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()

          message.channel.send(embed)
          return
        }
        customEmbed.setThumbnail(thumbnail.first().content)
      }
      embedMessage2.delete()
    }

    const embed3 = new MessageEmbed()
      .setTitle('What should be the image? (Bottom)')
      .setDescription('Type in `none` if you don\'t want an image.')
      .setColor('#D3D3D3')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    const embedMessage3 = await message.channel.send(embed3)
    const image = await message.channel.awaitMessages(msg => msg.author.id === message.author.id,
      { max: 1, time: 30000 })

    if (image.size) {
      if (image.first().content !== 'none') {
        if (!/\.(jpe?g|png|gif)$/i.test(image.first().content)) {
          const embed = new MessageEmbed()
            .setTitle('Invalid URL')
            .setDescription('URL should end with \`png | jpg | gif\`.')
            .setColor('#ff6961')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()

          message.channel.send(embed)
          return
        }
        customEmbed.setImage(image.first().content)
      }
      embedMessage3.delete()
    }

    const embed4 = new MessageEmbed()
      .setTitle('What should be the color? (Normal Color | Hex Color)')
      .setDescription('Type in `none` if you don\'t want a color.')
      .setColor('#D3D3D3')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    const embedMessage4 = await message.channel.send(embed4)
    const color = await message.channel.awaitMessages(msg => msg.author.id === message.author.id,
      { max: 1, time: 30000 })

    customEmbed.setColor(color.first().content)
    embedMessage4.delete()

    const embed5 = new MessageEmbed()
      .setTitle('What should be the footer?')
      .setDescription('Type in \`none\` if you don\'t want an footer.')
      .setColor('#D3D3D3')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTimestamp()

    const embedMessage5 = await message.channel.send(embed5)
    const footer = await message.channel.awaitMessages(msg => msg.author.id === message.author.id,
      { max: 1, time: 30000 })

    if (footer.size) {
      if (footer.first().content !== 'none') {
        if (footer.first().length > 2048) {
          const embed = new MessageEmbed()
            .setTitle('Hey!')
            .setDescription('That\'s too long, embed titles can\'t exceed 2048 characters!')
            .setColor('#ff6961')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ size: 4096, dynamic: true }))
            .setTimestamp()

          message.channel.send(embed)
          return
        }
        customEmbed.setFooter(footer.first().content)
      }
      embedMessage5.delete()
    }

    customEmbed.setTimestamp()
    message.channel.send(customEmbed)
  }
}