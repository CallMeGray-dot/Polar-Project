module.exports = {
    commands: ['poll'],
    description: 'a poll command', 
    permissions: ['MANAGE_MESSAGES'],
    callback: async (message, args) => {
        const { User } = require("discord.js");
        const Discord = require("discord.js");

                    const sayMessage = args.join(" "); 
                    message.delete().catch(err => console.log(err)); 
                    let embed = new Discord.MessageEmbed()
                        .setColor('#FFFFF')
                        .setTitle(`${message.author.tag} Asks:`)
                        .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/185/bar-chart_1f4ca.png`)
                        .setDescription(sayMessage);
        
                        const msg = await message.channel.send(embed);
                        await msg.react ('✅')
                        await msg.react ('❌')

                }
        
            }
         