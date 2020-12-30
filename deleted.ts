//Leveling
client.on('message', message => {
  const db = require('quick.db')
  if (message.channel.type === 'dm' || message.author.bot) return
  db.add(`messages_${message.guild.id}_${message.author.id}`, 1)
  let fetchMessages = db.fetch(`messages_${message.guild.id}_${message.author.id}`)

  let messages
  if (fetchMessages == 25) messages = 25
  if (fetchMessages == 50) messages = 50
  if (fetchMessages == 100) messages = 100
  if (fetchMessages == 300) messages = 300
  if (fetchMessages == 500) messages = 500
  if (fetchMessages == 800) messages = 800
  if (fetchMessages == 1300) messages = 1300
  if (fetchMessages == 1700) messages = 1700
  if (fetchMessages == 2500) messages = 2500
  if (fetchMessages == 4000) messages = 4000
  if (fetchMessages == 5100) messages = 5100
  if (fetchMessages == 6300) messages = 6300
  if (fetchMessages == 7700) messages = 7700
  if (fetchMessages == 9000) messages = 9000
  if (fetchMessages == 11100) messages = 11100
  if (fetchMessages == 13000) messages = 13000
  if (fetchMessages == 16000) messages = 16000

  if(!isNaN(messages)) {
    db.add(`level_${message.guild.id}_${message.author.id}`, 1)
    let fetchLevel = db.fetch(`level_${message.guild.id}_${message.author.id}`)

    message.channel.send(`${message.author.username}, you leveled up to ${fetchLevel}! chat more and gain more levels.`)
  }
 }
)

if (args[0] === "levels") {
      const level = new MessageEmbed()
        .setTitle('<a:goingupupup:785287982134984704> Level Commands')
        .setDescription('Here are the level commands!')
        .setThumbnail(icon)
        .setColor('RANDOM')
        .setFooter('Level commands')
        .setTimestamp()
        .addFields(
          { name: `${prefix}level <user>`, value: '`Shows level info`', inline: false },
          )

    message.channel.send(level)
    }
    
              { name: `<a:goingupupup:785287982134984704> Levels`, value: `\`${prefix}help levels\``, inline: true },