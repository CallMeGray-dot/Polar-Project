const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  commands: ['meme'],
  description: 'Shows random meme',
  callback: async (message, args) => {
    const json = await (
      await fetch("https://meme-api.herokuapp.com/gimme")
    ).json();

    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(json.title.slice(0, 256))
        .setImage(json.url)
        .setDescription(`[r/${json.subreddit}](${json.postLink})`)
        .setColor("RANDOM")
        .setFooter(`Meme by: ${json.author} | 👍 ${json.ups}`)
     );
    }
  }