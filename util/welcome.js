module.exports = (client) => {  
const ChannelID ='793678213884674048' //Channel ID Where you want to send Welcome Message

client.on('guildMemberAdd', (member) => {
    
    const channel = client.channels.cache.get(ChannelID)
     if(member.guild.id != ChannelID) return;
    channel.send(`Welcome to Polar support server, <@${member.id}> Please read rules in <#792313562067894290>`)
    }) //You Can Any Cutom Message Here Above^
client.on('guildMemberRemove', (member) => {
    
    const channel = client.channels.cache.get(ChannelID)
     if(member.guild.id != ChannelID) return;
    channel.send(`<@${member.id}> just left i hope he comes back`)
    }) //You Can Any Cutom Message Here Above^
}
