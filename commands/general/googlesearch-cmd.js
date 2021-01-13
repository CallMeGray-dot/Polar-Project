const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['googlesearch'],
    description: 'Searches google',
    callback: (message, args) => {
const query = encodeURIComponent(args.join("+"));

message.channel.send(new MessageEmbed().setTitle("Google search").setDescription("[Click here for your link](https://www.youtube.com/watch?v=oHg5SJYRHA0)!"));
 }
}