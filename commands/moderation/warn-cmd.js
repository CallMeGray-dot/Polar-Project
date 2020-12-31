module.exports = {
  commands: ['warn', 'strike'],
  description: 'Warns a user',
  usage: '<user> (reason)',
  minArgs: 1,
  maxArgs: null,
  permissions: ['ADMINISTRATOR'],
  callback: (message, args) => {
      let user = message.mentions.users.first() || message.client.users.cache.get(args[0])
      if(args[0]) user = message.mentions.users.first() || message.client.users.cache.find(u => u.username.toLowerCase().startsWith(args[0].toLowerCase())) || message.client.users.cache.get(args[0])
      
      let reason = args.slice(1).join(' ')
      if(!reason) reason = 'No reason provided'
      
      message.channel.send(`${user.tag} has been warned. Reason: ${reason}`).then(() => {
          user.send(`You have been warned by <@${message.author.id}>. Reason: ${reason}`)
      })
  }
}