module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().includes("type shit")) {
            message.channel.send("shit")
        }
    }
}