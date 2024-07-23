module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().includes("crazy")) {
            message.channel.send("-# crazy? i was crazy once")
        }
    }
}