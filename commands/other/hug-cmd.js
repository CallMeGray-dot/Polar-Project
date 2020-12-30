const Discord = require('discord.js')

module.exports = {
    commands: ['hug'],
    description: "hugs a member member",
    callback: (message, args) => {
        const member = message.mentions.users.first();
       if (!member) return message.channel.send('plz @ a member to give a nice warn holiday hug!!')
        var list = [
            'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif', 
             'https://media4.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif',
             'https://media2.giphy.com/media/od5H3PmEG5EVq/200.gif',
              'https://i.imgur.com/r9aU2xv.gif?noredirect',
              'https://acegif.com/wp-content/uploads/anime-hug.gif',



            //etc.
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FEB038')
            .setTitle('get hugged kiddo ')
            // .setURL()
            .setDescription(member)
            .setImage(rand)

        message.channel.send(newEmbed);
        // message.channel.send(member, { embed: newEmbed });




    }
   }

