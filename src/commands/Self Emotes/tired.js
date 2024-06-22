const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('tired')
    .setDescription('Sends a tired gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/AH5Z8hQe-fIAAAAC/mission-yozakura.gif",
            "https://media1.tenor.com/m/urs-gwqkOV8AAAAd/juvia-juvia-lockser.gif",
            "https://media1.tenor.com/m/BV0xBnKK6VIAAAAd/anime-sofa.gif",
            "https://media1.tenor.com/m/1UjVG4tHsPQAAAAC/lucky-star-yawn.gif",
            "https://media1.tenor.com/m/KsASo3twwLUAAAAC/tired-loli.gif",
            "https://media1.tenor.com/m/-2mSlbqgBlwAAAAC/sleepy-anime.gif",
            "https://media1.tenor.com/m/XMtczN4xPgEAAAAd/the-demon-girl-next-door-shamiko.gif",
            "https://media1.tenor.com/m/XbwMjHt1_fUAAAAC/taiga-sleep.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is tired 😴`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}