module.exports = {
  commands: ['thonk'],
  description: 'Shows thonk emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:thonk:776652534797959188>`)
  }
}