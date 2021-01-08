// Crucial Packages
require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client({ ws: { properties: { $browser: "Discord Android" }} })
const botPrefix = require('discord-prefix')
const welcome = require('./util/welcome')
const { levelSys } = require('./util/features')
const chatbot = require('./util/chatbot')

// Command Handling
const path = require('path')
const fs = require('fs')

const EventEmitter = require('events')
EventEmitter.defaultMaxListeners = 1000

const firstMessage = require('./util/message')

client.on('ready', () => {
		console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
      activity: {
        name: `p!help • ${client.guilds.cache.size} servers`,
        type: 'LISTENING'
      }
    })
    welcome(client)
    levelSys(client)
    chatbot(client)
  })

    
  // Command Reading

  const baseFile = 'base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')

client.on('guildCreate', guild => {
  console.log(`Invited to a Guild: ${guild.name} // Members: ${guild.memberCount} // ID: ${guild.id}`)
  botPrefix.setPrefix('p!', guild.id)
client.user.setPresence({
   activity: {
      name: `p!help • ${client.guilds.cache.size} servers`,
      type: 'LISTENING'
    }
  })
})
  
client.on('guildDelete', guild => {
  console.log(`Kicked from a Guild: ${guild.name} // Members: ${guild.memberCount} // ID: ${guild.id}`)
client.user.setPresence({
    activity: {
      name: `p!help • ${client.guilds.cache.size} servers`,
      type: 'LISTENING',
    }
  })
})    
client.on('guildMemberAdd', (member, guild) => {
  if (member.guild.id === '792313562060029972') {
    const role = member.guild.roles.cache.get('792313562060029975')
    member.roles.add(role)
  }
})
   
    //covid cases, leveling and prefix
const axios = require('axios');
const countries = require("./countries.json");
const url = 'https://api.covid19api.com/total/country/'; 
const WAKE_COMMAND = `!cases`;

client.on('message', async (msg) => {
  const content = msg.content.split(/[ ]+/);
  const prefix = botPrefix.getPrefix(msg.guild.id);
  
  if(content[0] === `${prefix}currentprefix`) {
      const embed = new Discord.MessageEmbed()
      .setTitle('Current Prefix')
      .setDescription(`My current prefix is \`${prefix}\`.\nYou can change the prefix by doing \`${prefix}setprefix <new prefix> | resetprefix\` to reset the prefix.`)
      .setThumbnail(client.user.displayAvatarURL({ size: 4096, dynamic: true }))
      msg.channel.send(embed)
  }
  if(content[0] === `${prefix}servers`) {
      msg.channel.send(`**Currently in ${client.guilds.cache.size} servers**`)
  }
  if(content[0] === `<@!${client.user.id}>`) {
    const embed = new Discord.MessageEmbed()
    .setTitle('Someone Pinged me!')
    .setDescription(`Hello! my prefix is \`${prefix}\`Lost? do \`${prefix}help\` to know all my commands!\nWe are so close to be 80 servers [invite](https://discord.com/oauth2/authorize?client_id=788911823969583175&permissions=8&scope=bot) me to your server!`)
    .setThumbnail(client.user.displayAvatarURL({ size: 4096, dynamic: true }))
    msg.channel.send(embed)
}
  if(content[0] === `currentprefix`) {
      const embed = new Discord.MessageEmbed()
      .setTitle('Current Prefix')
      .setDescription(`My current prefix is \`${prefix}\`.\nYou can change the prefix by doing \`${prefix}setprefix <new prefix> | resetprefix\` to reset the prefix.`)
      .setThumbnail(client.user.displayAvatarURL({ size: 4096, dynamic: true }))
      msg.channel.send(embed)
  }
  if (content[0] === WAKE_COMMAND) {
    if (content.length > 2) {
      msg.reply("Too many arguments...")
    }
    else if (content.length === 1) {
      msg.reply("Not enough arguments")
    }
    else if (!countries[content[1]]) {
      msg.reply("Wrong country format")
    }
    else {
      const slug = content[1]
      const payload = await axios.get(`${url}${slug}`)
      const covidData = payload.data.pop();
      msg.reply(`Confirmed: ${covidData.Confirmed}, Deaths: ${covidData.Deaths}, Recovered: ${covidData.Recovered}, Active: ${covidData.Active} `)
    }
  }
});
client.on('guildCreate', guild =>{
  const channelId = '792314257428971540';
  const channel = client.channels.cache.get(channelId); //This Gets That Channel
  const sowner = guild.owner.user; //This Gets The Guild Owner
  if(!channel) return; //If the channel is invalid it returns
  const embed = new Discord.MessageEmbed()
      .setTitle('I Joined A Guild!')
      .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
      .setTimestamp()
      .setColor('RANDOM')
      .setFooter(`I'm In ${client.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});

client.on('guildDelete', guild =>{
  const channelId = '792314257428971540';
  const channel = client.channels.cache.get(channelId); //This Gets That Channel
  const sowner = guild.owner.user; //This Gets The Guild Owner
  if(!channel) return;  //If the channel is invalid it returns
  const embed = new Discord.MessageEmbed()
      .setTitle('I Left A Guild!')
      .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
      .setTimestamp()
      .setColor('RED')
      .setFooter(`I'm In ${client.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});
const snipes = require("./snipe.json")
const snip = require("./snipes.js")

client.on('messageDelete',async message => {
  const args = message.content.split(" ");
 const author = message.author.id;
 const time = message.createdAt;
  const icon = message.author.displayAvatarURL();
  snip.run(message,args,client,author,time,icon) 
})
client.login(process.env.TOKEN)