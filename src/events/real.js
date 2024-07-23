module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().startsWith("real") && message.content.toLowerCase().endsWith("real")) {
            message.channel.send("-# chat, is this real?")
        }
    }
}