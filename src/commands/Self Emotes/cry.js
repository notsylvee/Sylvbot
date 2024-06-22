const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cry')
    .setDescription('Sends a crying gif'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/vEcyUvOTLI4AAAAC/adeus-volte-sempre.gif",
            "https://media1.tenor.com/m/IHVd7sXB66YAAAAC/anime-cry-hinagiku.gif",
            "https://media1.tenor.com/m/EiY1tgZOtQUAAAAC/anime-crying.gif",
            "https://media1.tenor.com/m/V68-MgqFCdEAAAAC/kaoruko-moeta-comic-girls.gif",
            "https://media1.tenor.com/m/u4T7KV53gKEAAAAC/sad-anime.gif",
            "https://media1.tenor.com/m/YJi8dRPoAFcAAAAC/sailor-moon-crying.gif",
            "https://media1.tenor.com/m/zTfldsDR0j4AAAAd/aikatsu-aikatsu-stars.gif",
            "https://media1.tenor.com/m/ZNu-H1ww2swAAAAC/ellenoar-seiran.gif",
            "https://media1.tenor.com/m/dlTfWGczs5IAAAAC/homura-chika.gif",
            "https://media1.tenor.com/m/bsCeGzjTHs0AAAAC/onimai-onaka.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is crying :(`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}