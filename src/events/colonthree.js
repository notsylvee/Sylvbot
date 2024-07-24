module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().includes(":3")) {
            message.channel.send("-# :3")
        }
    }
}