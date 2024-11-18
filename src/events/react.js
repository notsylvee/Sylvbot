module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.id !== `1018686464000807003`) return;
        if (!message.reference) return;
        
        const msg = await message.channel.messages.fetch(message.reference.messageId);

        if (message.content.toLowerCase() === "nerd") {msg.react('🤓')}
        if (message.content.toLowerCase() === "skull") {msg.react('💀')}
        if (message.content.toLowerCase() === "clown") {msg.react('🤡')}
        if (message.content.toLowerCase() === "troll") {msg.react('<:troll:1307915740975861762>')}
        if (message.content.toLowerCase() === "upvote") {msg.react('<:upvote:1307915685342482555>')}
        if (message.content.toLowerCase() === "downvote") {msg.react('<:downvote:1307915712316178432>')}
    },
};