const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    commands: ['steal', 'rob'],
    description: 'Robs a user',
    usage: '<user>',
callback: async (message, args) => {
    let user = message.mentions.users.first()

    let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let author = await db.fetch(`rob_${message.guild.id}_${message.author.id}`)
    let author2 = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

    let timeout = 300000

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author))
      const youalreadyrobbed = new Discord.MessageEmbed()
      .setTitle('You Already Robbed!')
      .setDescription(`you already robbed you little impatient member, wait ${time.minutes}m, ${time.seconds}s`)
      message.channel.send(youalreadyrobbed)
      return
    } else {
      const getmoremoney = new Discord.MessageEmbed()
      .setTitle('Get More Money')
      .setDescription('HEY! You need atleast 300 coins to rob')
      if (author2 < 300) {
        message.channel.send(getmoremoney)
        return
      }

      if (targetuser < 0) {
        const userdoesnothaveenoughmoney = new Discord.MessageEmbed()
        .setTitle('The User Does Not Have Enough Money')
        .setDescription('the user does not have anything you can rob')
        message.channel.send(userdoesnothaveenoughmoney)
        return
      }

      message.channel.send('ok, robbing...').then(msg => {
        msg.delete({ timeout: 3000 })
      })
      setTimeout(() => {
        let success = Math.floor(Math.random() * 2) + 1
        if (success === 1) {
          let number = Math.floor(Math.random() * author2)
          const gotcaught = new Discord.MessageEmbed()
          .setTitle('You Got Caught!')
          .setDescription(`Get caught, you lost ${number} coins!`)
          message.channel.send(gotcaught)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, number)
          db.add(`money_${message.guild.id}_${user.id}`, number)
          return
        }

        if (success === 2) {
          let number = Math.floor(Math.random() * targetuser)
          let msg = ''

          if (number < 50) msg = 'Wow, that sucks!'
          if (number > 50 && number < 100) msg = 'I don\'t know about that!'
          if (number > 100 && number < 1000) msg = 'Wow, got a ton!'
          if (number > 1000 && number < 10000) msg = 'What the hell...'
          if (number > 10000) msg = 'THAT\'S A SH*T TON!'
          message.channel.send(`${msg} You got ${number} coins from ${user.username}.`)
          db.add(`money_${message.guild.id}_${message.author.id}`, number)
          db.subtract(`money_${message.guild.id}_${user.id}`, number)
        }
      }, 3000)
    }
}
}
