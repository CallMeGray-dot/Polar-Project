module.exports = {
  commands: ['heheboi'],
  description: 'Shows heheboi emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:heheboi:776652414849384468>`)
  }
}