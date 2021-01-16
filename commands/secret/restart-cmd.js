module.exports = {
    commands: ['restart'],
    description: "Restarts the bot",
    callback: async (msg, args) => {
       if(msg.author.id != "697382470529843252") return msg.channel.send("ERROR 404")
    try {
        await msg.channel.send("Bot is restarting...")
        process.exit(1)
    } catch(e) {
        msg.channel.send(`ERROR: ${e.message}`)
    }

    }
}