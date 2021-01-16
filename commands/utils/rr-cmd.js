const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['reactionrole', 'rr'],
    description: "Sets up a reaction role message!",
    callback: async (message, args, Discord, client) => {
        const channel = message.guild.channels.cache.find(channel => channel.name === "roles");
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue");
        const purpleTeamRole = message.guild.roles.cache.find(role => role.name === "Purple");
        const greenTeamRole = message.guild.roles.cache.find(role => role.name === "Green");
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Red");
 
        const yellowTeamEmoji = '🟡';
        const greenTeamEmoji = '🟢';
        const redTeamEmoji = '🔴';
        const purpleTeamEmoji = '🟣';
        const blueTeamEmoji = '🔵';
        const javascriptEmoji = '';

 
        let embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a role!')
            .setDescription('Pick a role!\n\n'
                + `${yellowTeamEmoji} for yellow\n`
                + `${blueTeamEmoji} for blue\n`
                + `${greenTeamEmoji} for green\n`
                + `${redTeamEmoji} for red\n`
                + `${purpleTeamEmoji} for purple\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(greenTeamEmoji);
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(purpleTeamEmoji);

 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch.catch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
                if (reaction.emoji.name === purpleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
                if (reaction.emoji.name === purpleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}