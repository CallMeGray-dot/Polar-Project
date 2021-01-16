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
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 1/13 | General Commands')
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}help`, value: 'Shows all commands in a list'},
        { name: `${prefix}googlesearch <search>`, value: 'Searches on google'},
        { name: `${prefix}ping`, value: 'Shows latency of API and your ping'},
        { name: `${prefix}serverinfo`, value: 'Shows server info of the guild'},
        { name: `${prefix}sourcecode`, value: 'Shows bots source code in github'},
        { name: `${prefix}botinfo`, value: 'Shows bot information'},
        { name: `${prefix}website`, value: 'Shows bots website created' },
        { name: `${prefix}feedback`, value: 'Sends feedback in support server'}
)
        
        ,
        reactions:{
        '▶': "next",
        '⏩': "last"
        }
        },
    {
        name: "Community",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 2/13 | Community')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .addFields(
        { name: `${prefix}advice`, value: 'Sends random advice'},
        { name: `${prefix}announce <channel> <message>`, value: 'Announces the message in the channel mentioned'},
        { name: `${prefix}avatar [user]`, value: 'Shows avatar of user or your\'s mentioned'},
        { name: `${prefix}invite`, value: 'Shows invite links of polar and Support server'},
        { name: `${prefix}poll <question>`, value: 'Starts a new poll with reactions'},
        { name: `${prefix}quote`, value: 'Sends random quotes from authors'},
        { name: `${prefix}say <message>`, value: 'Repeats inputed message sent'},
        { name: `${prefix}userinfo [user]`, value: 'Shows user information'},
        { name: `${prefix}vote`, value: 'Shows vote links for bot'}
        )
         
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
    {
        name: "Moderation",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setFooter('Page 3/13 | Moderation')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .addFields(
        { name: `${prefix}ban <user> [reason]`, value: 'Bans a user out of a guild'},
        { name: `${prefix}kick <user> [reason]`, value: 'Kicks a user out of a guild'},
        { name: `${prefix}mute <user>`, value: 'Mutes a user from a guild'},
        { name: `${prefix}unmute <user>`, value: 'Unmutes a user from a guild'},
        { name: `${prefix}warn <user> [reason]`, value: 'Warns a user from a guild'}
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Server Management",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setFooter('Page 4/13 | Server Management')
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
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Utilities",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setFooter('Page 5/13 | Utilities')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}setprefix <new-prefix>`, value: 'Sets the new prefix to bot'},
        { name: `${prefix}resetprefix`, value: 'Resets the prefix of bot'},
        { name: `${prefix}serverinvite [permanent]`, value: 'Makes a server invite'},
        { name: `${prefix}stealemoji <emoji>`, value: 'Steals the emoji inputted'},
        { name: `${prefix}embed`, value: 'Makes a new embed'},
        { name: `${prefix}covidcases <country/all>`, value: 'Shows how many covid cases is in the country'}
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Reddit",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 6/13 | Reddit')
        .addFields(
        { name: `${prefix}food`, value: 'Sends random food'},
        { name: `${prefix}meme`, value: 'Sends a random meme'},
        { name: `${prefix}pets`, value: 'Sends a random pet'},
        { name: `${prefix}pokemonmeme`, value: 'Sends a random pokemon meme'}
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Economy",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 7/13 | Economy')
        .addFields(
        { name: `${prefix}balance [user]`, value: 'Shows balance of user'},
        { name: `${prefix}beg`, value: 'Begs and get money'},
        { name: `${prefix}daily`, value: 'Get your daily profit'},
        { name: `${prefix}rob <user>`, value: 'Robs the user mentioned'},
        { name: `${prefix}work`, value: 'Work and get your pay'},
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Emoji",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 8/13 | Emoji')
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
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Games",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 9/13 | Games')
        .addFields(
        { name: `${prefix}8ball <question>?`, value: 'Answers your question inputted'},
        { name: `${prefix}amonguscode`, value: 'Sends the game info (amongus)'},
        { name: `${prefix}tictactoe <user>`, value: 'Starts a tictactoe game with the user mentiones'},
        { name: `${prefix}waterdrop`, value: 'Starts a waterdrop game'},
        { name: `${prefix}minecraftserverstatus <ip-of-server>`, value: 'Shows minecraft server status'},
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Leveling",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setColor('RANDOM')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 10/13 | Leveling')
        .addFields(
        { name: `${prefix}level [user]`, value: 'Sends user\'s level'},
        { name: `${prefix}togglelevels`, value: 'Toggles the leveling system on/off'},
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Ratings",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 11/13 | Ratings')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}gay <user>`, value: 'Shows how gay user is'},
        { name: `${prefix}pogmeter <user>`, value: 'Shows how pog the user is'},
        { name: `${prefix}simp <user>`, value: 'Shows how simp the user is'}
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Math",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 12/13 | Math')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .addFields(
        { name: `${prefix}add <num1> <num2>`, value: 'Adds numbers inputted'},
        { name: `${prefix}subtract <num1> <num2>`, value: 'Subtracts number inputted'},
        { name: `${prefix}multiply <num1> <num2>`, value: 'Multiplies number inputted'},
        { name: `${prefix}divide <num1> <num2>`, value: 'Divides number inputted'},
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
{
        name: "Others",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 13/13 | Others')
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
        '⏪': 'first',
        '◀': 'previous', 
        '▶': "next",
        '⏩': "last"
    }
    },
    {
        name: "Anime",
        content: new MessageEmbed()
        .setTitle('Command list')
        .setThumbnail('https://cdn.discordapp.com/attachments/792313563800666125/796522174378541066/image0.png')
        .setDescription(`Do \`${prefix}commandhelp <command>\` to show info about the command`)
        .setFooter('Page 13/13 | Anime')
        .setColor('RANDOM')
        .addFields(
        { name: `${prefix}animetrivia`, value: 'Starts an anime trivia'},
        { name: `${prefix}animemes`, value: 'Sends random anime meme'},
        { name: `${prefix}animequote`, value: 'Sends a random anime quote'},
        { name: `${prefix}waifu`, value: 'Sends random waifu'},
)
        ,
        reactions:{  
        '⏪': 'first',
        '◀': 'previous', 
    }
    },
    ], 300000)
        helpMenu.start()
 }
}