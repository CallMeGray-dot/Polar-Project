let snipe = require("../../snipe.json")
const {MessageEmbed} = require("discord.js")
module.exports = {
    commands: ['snipe'],
    description: 'Shows latest deleted message',
    callback: async (message, args, client) => {
      if(!snipe[message.channel.id]) return message.channel.send("Nice Try, but nobody here deleted messages.")
       let msg = snipe[message.channel.id].msg; 
      let author = snipe[message.channel.id].user; 
       const embed = new MessageEmbed()
       .setTitle(`Someone deleted a message!`)
       .addField("User: ", `<@${author}>`)
       .addField("Message: ", `${msg}`)
       .setColor("RANDOM")
       .setTimestamp()
    message.channel.send(embed)

    }
}