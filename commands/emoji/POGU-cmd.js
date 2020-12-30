module.exports = {
  commands: ['POGU'],
  description: 'Shows POGU emoji.',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: (message) => {
  message.channel.send(`<:POGU:775530743945625610>`)
  }
}