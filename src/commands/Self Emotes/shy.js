const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('shy')
    .setDescription('Sends a shy gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/VrfSZUjiWn4AAAAC/shy-anime.gif",
            "https://media1.tenor.com/m/C9uLsw79b1sAAAAC/anime-girl.gif",
            "https://media1.tenor.com/m/Lr8FFeI5n3sAAAAC/kitsune-shy.gif",
            "https://media1.tenor.com/m/laI7gaNmNQIAAAAd/seishun-buta-yarou-anime.gif",
            "https://media1.tenor.com/m/33eZ88r_jC8AAAAC/blushing-anime-girl-hides.gif",
            "https://media1.tenor.com/m/ojKYOiAuNyIAAAAC/azur-lane-shy.gif",
            "https://media1.tenor.com/m/xEWvSOrPpWIAAAAC/miyuki-takara.gif",
            "https://media1.tenor.com/m/Gps0S9hBnbgAAAAC/to-love-ru-golden-darkness.gif",
            "https://media1.tenor.com/m/HfmV7nPyesAAAAAC/anime-tamako-market.gif",
            "https://media1.tenor.com/m/B66MWZE1G4YAAAAC/anime-anime-shy.gif",
            "https://media1.tenor.com/m/ojKYOiAuNyIAAAAC/azur-lane-shy.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is shy! >///<`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}