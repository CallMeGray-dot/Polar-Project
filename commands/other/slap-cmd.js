const Discord = require('discord.js')
module.exports = {
    commands: ['slap'],
    description: "slaps a member",
    callback: (message, args) => {
        const member = message.mentions.users.first();
       if (!member) return message.channel.send('plz @ a member to give a nice warn holiday hug!!')
        var list = [
            'https://tenor.com/view/anime-slap-gif-10426943', 
             'https://tenor.com/view/anime-slap-slapping-hit-mad-gif-17897236',
             'https://m.imgur.com/gallery/DVft5D6',
              'https://m.imgur.com/gallery/ZjvlU',



            //etc.
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FEB038')
            .setTitle('get slapped kiddo ')
            // .setURL()
            .setDescription(member)
            .setImage(rand)

        message.channel.send(newEmbed);
        // message.channel.send(member, { embed: newEmbed });




    }
   }

