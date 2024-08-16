module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        if (message.content.toLowerCase().includes("crazy")) {
            message.channel.send("-# crazy? i was crazy once")}

        if (message.content.toLowerCase().includes("cwazy")) {
            message.channel.send("-# cwazy? i was cwazy once")}
    }
}