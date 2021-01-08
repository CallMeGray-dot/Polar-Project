const Discord = require('discord.js');
const util = require('minecraft-server-util');

module.exports = {
    commands: ['mss', 'minecraftserverstatus'],
    description: 'Shows minecraft server status',
    usage: '<ip>',
    callback: async (message, args) => {
const ip = message.content.split(' ').slice(1).join(' ');
if(!ip) return message.reply('¡Debes colocar una ip de un servidor de minecraft!')
        util.status(ip) // port is default 25565
    .then((response) => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`Ip of server: ${response.host}\nOnline players: ${response.onlinePlayers}\nMax players: ${response.maxPlayers}\nVersion: ${response.version}`)
        .setColor('RANDOM')
        message.channel.send(embed);
    });    
}
}
