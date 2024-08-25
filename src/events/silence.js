module.exports = {
    name: 'messageCreate',
    async execute (message) {

        if (message.author.bot || !message.guild) return;
        if (message.author.id !== `1018686464000807003`) return;
        if (!message.content.startsWith("SILENCE")) return;

        const mention = message.mentions.users.first();
        const id = mention.id;

        message.guild.members.fetch(id)
        .then(user => {
            user.timeout(30000, '')
        });
    }
}