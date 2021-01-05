const { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
const botPrefix = require('discord-prefix')

module.exports = {
commands: ['help', 'cmds', 'commands', 'h'],
description: 'Shows command list',
callback: async (message, args) => {
const prefix = botPrefix.getPrefix(message.guild.id);
let helpMenu = new Menu(message.channel, message.author.id, [
    {
        name: 'General',
        content: new MessageEmbed()
        .setTitle('Command list')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 1/12 | General Commands')
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}help`, value: 'Shows command list'},
        { name: `${prefix}ping`, value: 'Shows latency'},
        { name: `${prefix}serverinfo`, value: 'Shows server info'},
        { name: `${prefix}sourcecode`, value: 'Shows bots source code'},
        { name: `${prefix}botinfo`, value: 'Shows bot info'},
        { name: `${prefix}website`, value: 'Shows bots website' },
        { name: `${prefix}feedback`, value: 'Sends feedback in support server'}
)
        
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "Community",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 2/12 | Community')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .addFields(
        { name: `${prefix}advice`, value: 'Shows random advice'},
        { name: `${prefix}announce <channel> <message>`, value: 'Announces the message in the channel mentiones'},
        { name: `${prefix}avatar [user]`, value: 'Shows avatar'},
        { name: `${prefix}invite`, value: 'Shows invite links of polar and Support server'},
        { name: `${prefix}poll <question>`, value: 'Starts a new poll'},
        { name: `${prefix}quote`, value: 'Shows random quote'},
        { name: `${prefix}say <message>`, value: 'Repeats inputed message'},
        { name: `${prefix}userinfo [user]`, value: 'Shows user info'},
        )
         
        ,
        reactions:{  
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "Moderation",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setFooter('Page 3/12 | Moderation')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .addFields(
        { name: `${prefix}ban <user> [reason]`, value: 'Bans a user out of a guild'},
        { name: `${prefix}kick <user> [reason]`, value: 'Kicks a user out of a guild'},
        { name: `${prefix}mute <user>`, value: 'Mutes a user'},
        { name: `${prefix}unmute <user>`, value: 'Unmutes a user'},
        { name: `${prefix}warn <user> [reason]`, value: 'Warns a user'}
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Server Management",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setFooter('Page 4/12 | Server Management')
        .addFields(
        { name: `${prefix}addrole <user> <role>`, value: 'Adds a role to the user mentioned'},
        { name: `${prefix}removerole <user> <role>`, value: 'Removes a role from the user mentioned'},
        { name: `${prefix}giveaway`, value: 'Starts a new giveaway'},
        { name: `${prefix}lock <role>`, value: 'Locks the channel role mentioned'},
        { name: `${prefix}unlock <role>`, value: 'Unlocks the role mentioned'},
        { name: `${prefix}purge <2-100>`, value: 'Clears amount of messages inputted'}
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Utilities",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setFooter('Page 5/12 | Utilities')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}setprefix <new-prefix>`, value: 'Sets the new prefix to bot'},
        { name: `${prefix}resetprefix`, value: 'Resets the prefix of bot'},
        { name: `${prefix}serverinvite [permanent]`, value: 'Makes a server invite'},
        { name: `${prefix}stealemoji <emoji>`, value: 'Steals the emoji inputted'},
        { name: `${prefix}embed`, value: 'Makes a new embed'},
        { name: `${prefix}snipe`, value: 'Shows the deleted message'}
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Reddit",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 6/12 | Reddit')
        .addFields(
        { name: `${prefix}animemes`, value: 'Sends a random anime meme'},
        { name: `${prefix}food`, value: 'Sends random food'},
        { name: `${prefix}meme`, value: 'Sends a random meme'},
        { name: `${prefix}pets`, value: 'Sends a random pet'},
        { name: `${prefix}pokemonmeme`, value: 'Sends a random pokemon meme'},
        { name: `${prefix}waifu`, value: 'Sends random waifu'}
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Economy",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 7/12 | Economy')
        .addFields(
        { name: `${prefix}balance [user]`, value: 'Shows balance of user'},
        { name: `${prefix}beg`, value: 'Begs and get money'},
        { name: `${prefix}daily`, value: 'Get your daily profit'},
        { name: `${prefix}rob <user>`, value: 'Robs the user mentioned'},
        { name: `${prefix}work`, value: 'Work and get your pay'},
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Emoji",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 8/12 | Emoji')
        .addFields(
        { name: `${prefix}abuse`, value: 'Shows abuse emoji'},
        { name: `${prefix}angry`, value: 'Shows angry emoji'},
        { name: `${prefix}heheboi`, value: 'Shows heheboi emoji'},
        { name: `${prefix}hug`, value: 'Shows hug emoji'},
        { name: `${prefix}hyperthink`, value: 'Shows hyperthink emoji'},
        { name: `${prefix}pog`, value: 'Shows pog emoji'},
        { name: `${prefix}POGU`, value: 'Shows POGU emoji'},
        { name: `${prefix}thonk`, value: 'Shows thonk emoji'}, 
        { name: `${prefix}wasntme`, value: 'Shows wasntme emoji'}
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Games",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 9/12 | Games')
        .addFields(
        { name: `${prefix}8ball <question>?`, value: 'Answers your question'},
        { name: `${prefix}amonguscode`, value: 'Sends the game info (amongus)'},
        { name: `${prefix}tictactoe <user>`, value: 'Starts a tictactoe game'},
        { name: `${prefix}waterdrop`, value: 'Starts a waterdrop game'},
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Leveling",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setColor('RANDOM')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 10/12 | Leveling')
        .addFields(
        { name: `${prefix}level [user]`, value: 'Sneds user level'},
        { name: `${prefix}togglelevels`, value: 'Toggles the leveling'},
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Leveling",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 10/12 | Leveling')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}level [user]`, value: 'Sends users level'},
        { name: `${prefix}togglelevels`, value: 'Toggles leveling system'},
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Math",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 11/12 | Math')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .addFields(
        { name: `${prefix}add <num1> <num2>`, value: 'Adds numbers inputted'},
        { name: `${prefix}subtract <num1> <num2>`, value: 'Subtracts number inputted'},
        { name: `${prefix}multiply <num1> <num2>`, value: 'Multiplies number inputted'},
        { name: `${prefix}divide <num1> <num2>`, value: 'Divides number inputted'},
)
        ,
        reactions:{  
        '◀': 'previous',
        '▶': "next"
    }
    },
{
        name: "Others",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setThumbnail('https://cdn.discordapp.com/attachments/790147784266481674/795832330215620648/Polar.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 12/12 | Others')
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}ascii <text>`, value: 'Turn inputted text to ascii'},
        { name: `${prefix}clydetext <msg>`, value: 'Turns inputted text to Clyde'},
        { name: `${prefix}hug <user>`, value: 'Hugs user mentioned'},
        { name: `${prefix}slap <user>`, value: 'Slaps user mentioned'},
        { name: `${prefix}spank <user>`, value: 'Spanks user mentioned'}
)
        ,
        reactions:{  
        '◀': 'previous',
    }
    },
    ], 300000)
        helpMenu.start()
 }
}
