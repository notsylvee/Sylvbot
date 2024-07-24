module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().startsWith("cap") && message.content.toLowerCase().endsWith("cap")) {
            message.channel.send("-# 🧢")
        }
    }
}