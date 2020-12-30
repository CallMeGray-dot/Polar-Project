module.exports = {
  commands: ['abuse'],
  description: 'Shows abuse emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:ABUSE:775529189864243220>`)
  }
}