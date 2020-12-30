module.exports = {
  commands: ['angry'],
  description: 'Shows angry emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:angry:776689583214690324>`)
  }
}