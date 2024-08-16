module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        const msg = [
            `Good night ${message.member.displayName}!`,
            `Night ${message.member.displayName}!`,
            `Good night ${message.member.displayName}! Dont let the bed bugs bite!`,
            `Night ${message.member.displayName}! Dont let the bed bugs bite!`,
            `Night night ${message.member.displayName}!`,
            `Night night ${message.member.displayName}! Dont let the bed bugs bite!`,
            `Nini ${message.member.displayName}!`,
            `Nini ${message.member.displayName}! Dont let the bed bugs bite!`,
            `Nighty ${message.member.displayName}!`,
            `Nighty ${message.member.displayName}! Dont let the bed bugs bite!`,
            `Nighty night ${message.member.displayName}!`,
            `Nighty night ${message.member.displayName}! Dont let the bed bugs bite!`
        ];
        const response = msg[Math.floor(Math.random() * msg.length)];

        if (message.content.toLowerCase().startsWith("good night") && message.content.toLowerCase().endsWith("good night")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("night") && message.content.toLowerCase().endsWith("night")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("gn") && message.content.toLowerCase().endsWith("gn")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("night night") && message.content.toLowerCase().endsWith("night night")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("nini") && message.content.toLowerCase().endsWith("nini")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("goodnight") && message.content.toLowerCase().endsWith("goodnight")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("nighty") && message.content.toLowerCase().endsWith("y")) {
            message.channel.send(`${response}`)}
        
        if (message.content.toLowerCase().startsWith("nighty night") && message.content.toLowerCase().endsWith("nighty night")) {
            message.channel.send(`${response}`)}
    }
}