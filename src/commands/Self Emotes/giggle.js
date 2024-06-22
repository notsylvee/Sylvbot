const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('giggle')
    .setDescription('Sends a giggling gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/K6WDm9L78mgAAAAC/rezero-rem.gif",
            "https://media1.tenor.com/m/SSErNdBhb8YAAAAC/hajimete-no-gal-gal.gif",
            "https://media1.tenor.com/m/gRzf7IcsGj8AAAAC/laugh-tale.gif",
            "https://media1.tenor.com/m/aRU6Zrm3LlQAAAAC/anime-cuteness.gif",
            "https://media1.tenor.com/m/m0F-F4kmlYUAAAAC/the-100-girlfriends-that-really-really-really-really-really-love-you-100-girlfriends.gif",
            "https://media1.tenor.com/m/MMcJXAHw1wwAAAAC/redhead-girl.gif",
            "https://media1.tenor.com/m/UAUxINWYDnIAAAAC/kon.gif",
            "https://media1.tenor.com/m/hhlvyrBNHoIAAAAC/anime-funny.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is giggling! Tehe!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}