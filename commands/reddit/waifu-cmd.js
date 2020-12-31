const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random

module.exports = {
commands: ['waifupls', 'w', 'waifu'],
description: 'Sends a random waifu',
callback: (message, args) => {
const subreddits = [
    "animewaifus"
]
let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)] 
somethingRandom.getMeme(randomSubReddit).then(res => {
    const embed = new MessageEmbed()
    .setTitle(res.title)
    .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
    .setImage(res.img)
    .setFooter(`👍 ${res.upvotes} | 👎 ${res.downvotes} | 💬 ${res.comments}`)
    .setAuthor(`From ${res.author}`)
    .setColor('RANDOM')
    message.channel.send(embed)
    console.log(res)
}).catch(e => message.channel.send('API Error.'))
 }
}
