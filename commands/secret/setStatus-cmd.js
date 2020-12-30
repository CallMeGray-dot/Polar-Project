const Discord = require('discord.js')

module.exports = {
    commands: ['setstatus'],
    description: 'Sets status for bot',
    minArgs: 0,
    maxArgs: 1,
    callback: (client, message, args) => {
        callback: (message, args) => {
    if(message.author.id !== '697382470529843252') return;
if(args[0] !== 'online' || args[0] !== 'idle' || args[0] !== 'dnd' || args[0] !== 'streaming') return message.channel.send('Sorry, only `online`, `idle`, `dnd` and `streaming` only.')
client.user.setPresence({
  status: args[0]
})

message.channel.send('i changed the status, you may have to wait for a few seconds to a few minutes')
}
    }
}