const Discord = require('discord.js')

module.exports = {
    commands: ['clydetext', 'clydify'],
    description: 'Makes your message clydes',
    minArgs: 0,
    maxArgs: null,
    callback: async (message, args) => { 
        const axios = require('axios');
        const { MessageEmbed } = require('discord.js');
        if(!args[0]) return message.channel.send('Please provide some text');
        axios
        .get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`)
        .then((res) => {
            const embed = new MessageEmbed()
            .setImage(res.data.message)
            message.channel.send(embed)
        })
    }
}