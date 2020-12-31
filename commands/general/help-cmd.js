const Discord = require('discord.js')
const botPrefix = require('discord-prefix')

module.exports = {
  commands: ['help', 'cmds', 'commands', 'h'],
  description: 'Displays help menu',
  callback: (message, args) => {

      const help = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setDescription(`Do \`p!commandhelp <command>\` to show info about the command! [(i)](${message.url} "There are a lot of commands than you think")`)
        .setColor('RANDOM')
        .setFooter(`Here are the commands!`)
        .addFields(
          { name: `General`, value: '`help`, `minecraftip`, `ping`, `serverinfo`, `sourcecode`, `botinfo`, `website`', inline: false },
          { name: `Community`, value: '`advice`, `announce`, `avatar`, `invite`, `poll`, `quote`, `say` `userinfo`', inline: false },
          { name: `Moderation`, value: '`ban`, `kick`, `mute`, `unmute`, `warn`', inline: false },
          { name: `Server Management`, value: '`addrole`, `removerole`, `giveaway`, `lock`, `unlock`, `purge`, `voicechannelgenerator`', inline: false },
          { name: `Utilities`, value: '`setprefix`, `resetprefix`, `severinvite`, `stealemoji`', inline: false },
          { name: `Reddit`, value: '`animemes`, `food`, `meme`, `pets`, `pokemonmeme`, `waifu`', inline: false },
          { name: `Economy`, value: '`balance`, `beg`, `daily`, `rob`, `work`', inline: false },
          { name: `Emoji`, value: '`abuse`, `angry`, `heheboi`, `hug`, `hyperthink`, `pog`, `POGU`, `suicide`, `thonk`, `wasntme`', inline: false },
          { name: `Games`, value: '`8ball`, `amonguscode`, `tictactoe`, `waterdrop`', inline: false },
          { name: `Leveling`, value: '`togglelevels`, `level`', inline: false },
          { name: `Math`, value: '`add`, `subtract`, `multiply`, `divide`', inline: false },
          { name: `Others`, value: '`ascii`, `clydetext`, `hug`, `slap`, `spank`', inline: false },
        );
      
    message.author.send(help)
    }
  }
