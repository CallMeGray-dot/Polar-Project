module.exports = {
  commands: ['pog'],
  description: 'Shows pog emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:POG:775530651553497110>`)
  }
}