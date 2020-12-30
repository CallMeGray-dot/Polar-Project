const Discord = require('discord.js')

 
module.exports = {
    commands: ['8ball'],
    description: `8-Ball. Nothing more, nothing less.`,
    usage: "<question>",
    callback: async (message, args,) => {
        const responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes – definitely",
        "You may rely on it",
        "As I see it",
        "yes",
        "Most Likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "It is certain",
        "It is decidedly so",
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',
        'Signs point to yes. Except that you were born an idiot, you will die an idiot, and nothing will change in-between.',
        ]
        var chosenresponse = responses[Math.floor(Math.random() * responses.length)];
        console.log(chosenresponse)
        const question = args.slice(1).join(' ')
        if(!question) {
        let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🎱 8 Ball 🎱')
            .setDescription('Error: You did not input a question for Polar.')
        message.channel.send(embed)
        return;
        }

        if(!question.endsWith('?')) {
        let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('🎱 8 Ball 🎱')
            .setDescription('Polar doesn\'t see a question. Make sure your question ends with "?".')
        message.channel.send(embed)
        return;

        } else {
            let embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('🎱 8 Ball 🎱')
                .setDescription("Lets see what Polar thinks...")
                .addFields({name: "\u200B", value: `${chosenresponse}`})
            message.channel.send(embed)
            return;
        }
    }
  }