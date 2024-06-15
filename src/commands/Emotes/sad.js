const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sad')
    .setDescription('Sends a sad gif'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/_z0gtWtWHVEAAAAC/anime-kanna.gif",
            "https://media1.tenor.com/m/FAE3AVLkjY4AAAAC/anime-sad.gif",
            "https://media1.tenor.com/m/6Q-p7sIIFjkAAAAC/juvia-depressed.gif",
            "https://media1.tenor.com/m/HPdVPFR-BasAAAAC/anime-sad.gif",
            "https://media1.tenor.com/m/ecV_fJDGXoAAAAAC/anime-girl.gif",
            "https://media1.tenor.com/m/sUDkbpP6WgsAAAAC/kon-azusa.gif",
            "https://media1.tenor.com/m/QmGTdQZ0KnIAAAAd/fuuka-miyazawa-anime.gif",
            "https://media1.tenor.com/m/Tn9mzxqYNs4AAAAd/kukuru-misakino-anime.gif",
            "https://media1.tenor.com/m/L4uSxTj5a9sAAAAC/steins-gate-kurisu-makise.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is sad :(`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}