module.exports = {
  commands: ['hyperthink'],
  description: 'Shows hyperthink emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:hyperthink:776652687272968213>`)
  }
}