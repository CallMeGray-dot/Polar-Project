const figlet = require('figlet');

module.exports = {
    commands: ['ascii'],
    description: 'Transform text to ASCII.',
    usage: '<message>',
    callback: async (message, args) => {
        const textToTurnASCII = args.join(" ");

        figlet.text(textToTurnASCII, (err, text) => {
            if (err) return msg.channel.send(err);
            message.channel.send(`\`\`\` ${text.trimRight()} \`\`\``);
        })
    }
}