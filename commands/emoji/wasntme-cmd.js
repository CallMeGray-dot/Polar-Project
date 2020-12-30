module.exports = {
  commands: ['wasntme'],
  description: 'Shows wasntme emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:wasntme:776789013302476860>`)
  }
}