module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().startsWith("type shit") && message.content.toLowerCase().endsWith("type shit")) {
            message.channel.send("-# shit")
        }
    }
}