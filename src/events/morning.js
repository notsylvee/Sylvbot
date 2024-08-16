module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        const msg = [
            `Good morning ${message.member.displayName}!`,
            `Morning ${message.member.displayName}!`,
            `Good morning ${message.member.displayName}! How did you sleep?`,
            `Morning ${message.member.displayName}! How did you sleep?`
        ];
        const response = msg[Math.floor(Math.random() * msg.length)];

        if (message.content.toLowerCase().startsWith("good morning") && message.content.toLowerCase().endsWith("good morning")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("morning") && message.content.toLowerCase().endsWith("morning")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("gm") && message.content.toLowerCase().endsWith("gm")) {
            message.channel.send(`${response}`)}
    }
}