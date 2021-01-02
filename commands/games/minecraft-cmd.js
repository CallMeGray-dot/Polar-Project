const Discord = require('discord.js');
const util = require('minecraft-server-util');

module.exports = {
    commands: ['serverstatus', 'minecrafserverstatus', 'mss'],
    description: 'Shows info about the minecraft server given',
    minArgs: 0,
    maxArgs: null,
    usage: '<ip>',
    callback: async (client, message, args) => {
const ip = message.content.split(' ').args.slice(0).join(' ');
if(!ip) return message.reply('You must put an ip of a minecraft server!')
        util.status(ip) // port is default 25565
    .then((response) => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`Ip of the server: ${response.host}\nOnline Players: ${response.onlinePlayers}\nMax players: ${response.maxPlayers}\nVersion: ${response.version}`)
        .setColor('RANDOM')
        message.channel.send(embed);
    });    
}
}