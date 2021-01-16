module.exports = {
  commands: ['pepehug'],
  description: 'Shows pepe hug emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:hug:776689512041938974>`)
  }
}