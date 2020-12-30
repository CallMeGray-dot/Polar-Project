module.exports = {
  commands: ['say'],
  description: 'Repeats What u say.',
  usage: '<message>',
  minArgs: 0,
  maxArgs: null,
  permissions: ['MANAGE_MESSAGES'],
  requiredRoles: [],
  callback: (message, args) => {
  const content = args.join(' ')
  message.channel.send(content)
  }
}