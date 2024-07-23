module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().startsWith("ligma") && message.content.toLowerCase().endsWith("ligma")) {
            message.channel.send("-# balls")
        }
    }
}