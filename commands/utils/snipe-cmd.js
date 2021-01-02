let snipe = require("../../snipe.json")
const {MessageEmbed} = require("discord.js")
module.exports = {
    commands: ['snipe'],
    description: 'Shows latest deleted message',
    callback: async (message, args, client) => {
      if(!snipe[message.channel.id]) return message.channel.send("Nice Try, but nobody here deleted messages.")
       let msg = snipe[message.channel.id].msg; 
      let author = snipe[message.channel.id].user; 
      let time = snipe[message.channel.id].time; 
      let icon = snipe[message.channel.id].icon; 
       const embed = new MessageEmbed()
       .setTitle(`Someone deleted a message!`)
       .addField("User: ", `<@${author}>`)
       .addField("Message: ", `${msg}`)
       .setColor("RANDOM")
       .setFooter(`${time}`)
       .setTimestamp(time)
       .setThumbnail(icon) 
    message.channel.send(embed)

    }
}