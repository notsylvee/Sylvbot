const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
    name: Events.MessageReactionAdd,
    async execute (reaction, user, client) {

        if (!reaction.message.guildId) return;

        if (reaction._emoji.name !== '⭐') return;

        var guild = await client.guilds.cache.get(reaction.message.guildId);
        var sendChannel = 1219141107162550382;
        var channel = await guild.channels.fetch(reaction.message.channelId);
        var message = await channel.messages.fetch(reaction.message.id);

        if (message.author.id == client.user.id) return;

        var newReaction = await message.reactions.cache.find(reaction => reaction.emoji.id === reaction._emoji.id);

        if (newReaction.count >= 3) {
            var msg = message.content || 'No content';

            const embed = new EmbedBuilder()
            .setColor("Blurple")
            .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.avatarURL()}` })
            .setDescription(`${msg}`)
            .setTimestamp();

            await sendChannel.send({ content: `**⭐ ${newReaction.count} | https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`, embeds: [embed] }).then(async m => {
                await m.react('⭐').catch(err => {});
            });
        }
    }
}