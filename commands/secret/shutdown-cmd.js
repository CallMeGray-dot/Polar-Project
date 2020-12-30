module.exports = {
    commands: ['shut-down', 'shutdown', 'shutoff'],
    description: "Shuts the bot down",
    callback: async (msg, args) => {
       if(msg.author.id != "697382470529843252") return msg.channel.send("ERROR 404")
    try {
        await msg.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        msg.channel.send(`ERROR: ${e.message}`)
    }

    }
}