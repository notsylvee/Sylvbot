const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Slap someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to slap').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const link = [
            "https://media1.tenor.com/m/Ws6Dm1ZW_vMAAAAC/girl-slap.gif",
            "https://media1.tenor.com/m/XiYuU9h44-AAAAAC/anime-slap-mad.gif",
            "https://media1.tenor.com/m/7xFcP1KWjY0AAAAC/no.gif",
            "https://media1.tenor.com/m/cpWuWnOU64MAAAAC/bofetada.gif",
            "https://media1.tenor.com/m/p-RMgSXHMCIAAAAC/diosa-bocchi.gif",
            "https://media1.tenor.com/m/e4IGgnBm9ZIAAAAC/anime-anime-blush.gif",
            "https://media1.tenor.com/m/8Oh_VMwp8k0AAAAC/slap.gif",
            "https://media1.tenor.com/m/-JKgXtlAQo8AAAAC/slap-anime.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} slaps ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}