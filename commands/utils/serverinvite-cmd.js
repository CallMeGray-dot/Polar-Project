const Discord = require('discord.js')
const {
    collapseTextChangeRangesAcrossMultipleVersions
} = require('typescript')

module.exports = {
    commands: ['serverinvite', 'serverinv'],
    description: 'Generate an invite link!',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, args) => {
        let time;
        let timeInfo;
        if (args[0] == 'permanent' || args[0] == 'perm') {
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You must have the Administrator permission to make a permanent invite link!')
            time = 0
            timeInfo = 'is permanent!'
        } else {
            time = 86400
            timeInfo = 'will expire in 1 day!'
        }

        message.channel.createInvite({
                unique: true,
                maxAge: time
            })
            .then(invite => {
                const Embed = new Discord.MessageEmbed()
                    .setTitle('Invite Link Generated')
                    .setDescription('Hi there!\nHere\'s your invite link: https://discord.gg/' + invite.code)
                    .setFooter(`This link ${timeInfo}`)
                    .setColor(3426654)
                message.channel.send(Embed)
            })
            .catch(console.error)
    }
}