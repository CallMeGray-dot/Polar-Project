module.exports = {
  commands: ['suicide'],
  description: 'Shows suicide emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:suicide:776679007533268993>`)
  }
}