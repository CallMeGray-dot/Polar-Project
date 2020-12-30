const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random

module.exports = {
commands: ['meme', 'memes', 'memepls'],
description: 'Sends a random meme',
callback: (message, args) => {
const subreddits = [
    "meme",
    "memes",
    "dankmemes",
    "meirl"
]
let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)] 
somethingRandom.getMeme(randomSubReddit).then(res => {
    const embed = new MessageEmbed()
    .setTitle(res.title)
    .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
    .setImage(res.img)
    .setFooter(`👍 ${res.upvotes} | 💬 ${res.comments}`)
    .setAuthor(`From ${res.author}`)
    .setColor('RANDOM')
    message.channel.send(embed)
    console.log(res)
}).catch(e => message.channel.send('API Error.'))
 }
}
