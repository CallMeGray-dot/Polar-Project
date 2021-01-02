const Discord = require("discord.js");
const alexa = require('alexa-bot-api');

let chatbot = new alexa("aw2plm")

module.exports = async (bot) => {

    bot.on('message', message => {

         if (message.author.bot) return; //so it dont replys to itself or other bots
         
            let channel = '794173769048129566'

            if (message.channel.id === channel) { //checks for channel id 

                let content = message.content //gets the message content to reply to
                chatbot.getReply(content).then(reply => message.guild.channels.cache.get(channel).send(reply)) //sends  message to the channel u locked it to 
            }
    })
}