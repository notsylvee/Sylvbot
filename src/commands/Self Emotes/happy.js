const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('happy')
    .setDescription('Sends a happy gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/jxoSU-VpuzQAAAAC/anime-anime-girl.gif",
            "https://media1.tenor.com/m/NACzM0o4iv4AAAAC/happy-easter.gif",
            "https://media1.tenor.com/m/MM3La2Dx0c4AAAAC/onimai-cute-anime-girl-smile-smiling.gif",
            "https://media1.tenor.com/m/jAv5rzpUcc8AAAAC/anime-anime-happy.gif",
            "https://media1.tenor.com/m/g8rtlSwFcdEAAAAd/slow-loop-koharu-minagi.gif",
            "https://media1.tenor.com/m/pNUbjbQ6lCgAAAAC/happysugarlife-goodnight.gif",
            "https://media1.tenor.com/m/ruU09sGPcCwAAAAd/happy-anime.gif",
            "https://media1.tenor.com/m/lAfLMj3TnCYAAAAC/noela-fox-girl.gif",
            "https://media1.tenor.com/m/ZQx1GOXHa68AAAAC/happy-anime.gif",
            "https://media1.tenor.com/m/cDCkQ6BPlF4AAAAC/pat-pat-anime.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is happy!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}