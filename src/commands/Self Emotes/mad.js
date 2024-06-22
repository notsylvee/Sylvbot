const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mad')
    .setDescription('Sends a mad gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/cYRAeQqpaUMAAAAC/anime-angry-slow-loop.gif",
            "https://media1.tenor.com/m/tx3x8ANgbBwAAAAC/the-dreaming-boy-is-a-realist-yumemiru-danshi.gif",
            "https://media1.tenor.com/m/MvKZZ7JCkUMAAAAC/anime-angry.gif",
            "https://media1.tenor.com/m/LwIS8XNh7pkAAAAC/i-want-cokie.gif",
            "https://media1.tenor.com/m/uctXlnLUN0sAAAAC/anime-mutsumi.gif",
            "https://media1.tenor.com/m/-qfnP6F_EtIAAAAC/yuru-yuri-chinatsu-yoshikawa.gif",
            "https://media1.tenor.com/m/1oyFbLZFQacAAAAC/food-wars.gif",
            "https://media1.tenor.com/m/paEqWTjFrsMAAAAC/angry-mad.gif",
            "https://media1.tenor.com/m/hvd1qmceqqEAAAAC/mad-anime.gif",
            "https://media1.tenor.com/m/Fqbq1RaAwt0AAAAC/anime-angry.gif",
            "https://media1.tenor.com/m/u7Ub8seOA9kAAAAC/angry-defensive.gif",
            "https://media1.tenor.com/m/7XcetqnNz70AAAAC/red-hair.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is mad! >:(`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}