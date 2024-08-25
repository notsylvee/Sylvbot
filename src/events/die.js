module.exports = {
    name: 'messageCreate',
    async execute (message) {

        if (message.author.bot || !message.guild) return;
        if (message.author.id !== `1018686464000807003`) return;
        if (!message.content.startsWith("DIE")) return;

        const mention = message.mentions.users.first();
        if (!mention) return;
        const id = mention.id;

        await message.guild.members.fetch(id)
        .then(user => {
            user.ban()
        });
    }
}