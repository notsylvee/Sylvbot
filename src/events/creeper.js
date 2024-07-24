module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().startsWith("aw man") && message.content.toLowerCase().endsWith("aw man")) {
            message.channel.send("-# creeper! aw man")
        }
    }
}