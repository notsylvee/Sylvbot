const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('plead')
    .setDescription('Sends a pleading gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/4q5OwnFZJdEAAAAC/adorable-pleading.gif",
            "https://media1.tenor.com/m/TgtTEClE92gAAAAd/crying-face-appeal.gif",
            "https://media1.tenor.com/m/puJHeOtbn8UAAAAC/konasuba-tears.gif",
            "https://media1.tenor.com/m/Y9g7q5u4W8IAAAAC/girl-please.gif",
            "https://media1.tenor.com/m/4LQ38wHjsL0AAAAC/anime-girl.gif",
            "https://media1.tenor.com/m/79G0dJYpf4EAAAAC/kiriya-evi-kiriya.gif",
            "https://media1.tenor.com/m/ejVAMxHwW68AAAAC/please-begging.gif",
            "https://media1.tenor.com/m/4-Wcadun8mIAAAAC/shiro-anime.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} pleads! 🥺`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}