module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().includes("chat")) {
            message.channel.send("-# chat is this real?")
        }
    }
}