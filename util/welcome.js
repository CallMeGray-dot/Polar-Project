const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = (client) => {  
const ChannelID ='793678213884674048' //Channel ID Where you want to send Welcome Message

client.on('guildMemberAdd', (member, guild) => {
    const channel = client.channels.cache.get(ChannelID)
    let avatar = member.user.displayAvatarURL({ dynamic: true })
    const embed = new Discord.MessageEmbed()
    .setTitle('We have a new member!')
    .setThumbnail(avatar)
    .setDescription(`Welcome <@${member.id}>! to the server! Read <#792313562067894290> to get started! And learn about Polar.`)
    if(member.guild.id != '792313562060029972') return;
    channel.send(embed)
    })
client.on('guildMemberRemove', (member, guild) => {
    const channel = client.channels.cache.get(ChannelID) 
    let avatar1 = member.user.displayAvatarURL({ dynamic: true })
    const embed = new Discord.MessageEmbed()
    .setTitle('We lost a member')
    .setThumbnail(avatar1)
    .setDescription(`<@${member.id}> just left the server! i hope he comes back`)
     if(member.guild.id != '792313562060029972') return;
    channel.send(embed) 
    })
}
