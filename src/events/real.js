module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().includes("real")) {
            message.channel.send("-# is this real chat?")
        }
    }
}