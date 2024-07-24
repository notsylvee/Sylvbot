module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        const msg = [ "hi", "hello", "hey", "howdy", "hai", "hewwo", "whats up", "yo", "hallo", "sup", "aloha", "greetings" ];
        const response = msg[Math.floor(Math.random() * msg.length)];

        if (message.content.toLowerCase().startsWith("hi") && message.content.toLowerCase().endsWith("i")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("hello") && message.content.toLowerCase().endsWith("hello")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("hey") && message.content.toLowerCase().endsWith("hey")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("howdy") && message.content.toLowerCase().endsWith("howdy")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("hai") && message.content.toLowerCase().endsWith("hai")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("hewwo") && message.content.toLowerCase().endsWith("hewwo")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("whats up") && message.content.toLowerCase().endsWith("whats up")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("yo") && message.content.toLowerCase().endsWith("yo")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("hallo") && message.content.toLowerCase().endsWith("hallo")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("sup") && message.content.toLowerCase().endsWith("sup")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("aloha") && message.content.toLowerCase().endsWith("aloha")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        } else if (message.content.toLowerCase().startsWith("greetings") && message.content.toLowerCase().endsWith("greetings")) {
            message.channel.send(`-# ${response} ${message.member.displayName}`)
        }
    }
}