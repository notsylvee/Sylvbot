const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dance')
    .setDescription('Sends a dancing gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/GOYRQva4UeoAAAAd/anime-dance.gif",
            "https://media1.tenor.com/m/rRgs6XtH5kEAAAAd/hi-oomf-cute-anime-girl-vtuber.gif",
            "https://media1.tenor.com/m/BgjMvz_ELtsAAAAd/anime-dance.gif",
            "https://media1.tenor.com/m/xPVZSL9EE80AAAAC/anime-dance.gif",
            "https://media1.tenor.com/m/db0yF9G7qn4AAAAC/cat-dance.gif",
            "https://media1.tenor.com/m/fim-ddZD7c8AAAAC/dance-anime.gif",
            "https://media1.tenor.com/m/DT4TI5l1B-kAAAAd/mashiro-mikakunin.gif",
            "https://media1.tenor.com/m/imB5U5W-RTkAAAAC/dance-anime.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} dances!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}