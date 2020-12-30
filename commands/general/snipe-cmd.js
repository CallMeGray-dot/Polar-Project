const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['snipe'],
    description: "Shows the most recent deleted message.",
    callback: async(client, message, args, msg) => {
        if(!msg) return message.reply("There are no recently deleted messages!");

        const embed = new MessageEmbed()
            .setAuthor(`Deleted by ${msg.author.tag}`, msg.author.displayAvatarURL())
            .setDescription(msg.content);
    }
}