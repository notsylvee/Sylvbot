const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('emoji-list')
    .setDescription('Get a list of this servers emojis'),
    async execute (interaction) {
        async function chunkArray (array, size) {
            let chunks = [];
            for (let i = 0; i < array.length; i += size) {
                const chunk = array.slice(i, i+ size);
                chunkd.push(chunk);
            }
            return chunks;
        }
        async function send (chunked) {
            var intResponse;
            await chunked.forEach(async emoji => {
                if (intResponse == 1) {
                    embed.setDescription(emoji.join(' ')).setTitle(' ');
                    await interaction.channel.send({ embeds: [embed] })
                } else {
                    intResponse = 1;
                    var total = cache.size;
                    var animated = cache.filter(emoji => emoji.animated).size;
                    embed
                    .setTitle(`${total - animated} regular, ${animated} animated, and ${total} total`)
                    .setDescription(emoji.join(' '));
                    await interaction.reply({ embeds: [embed] });
                }
            });
        }
        var emojis = [];
        var cache = await interaction.guild.emojis.fetch();
        await cache.forEach(async emoji => {
            if (emojis.animated) {
                emojis.push(`<a:${emoji.name}:${emoji.id}>`);
            } else {
                emojis.push(`<:${emoji.name}:${emoji.id}>`)
            }
        });
        var chunked = await chunkArray(emojis, 50);
        const embed = new EmbedBuilder().setColor('Green')
        var redo;
        await chunked.forEach(async chunk => {
            if (chunk.join(' ').length > 2000) redo = true;
            else redo = false;
        });
        if (redo) {
            var newChunk = await chunkArray(emojis, 20);
            send(newChunk);
        } else {
            send(chunked);
        }
    }
}