const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Give someone a hug!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to hug').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const link = [
            "https://media1.tenor.com/m/kCZjTqCKiggAAAAC/hug.gif",
            "https://media1.tenor.com/m/9e1aE_xBLCsAAAAC/anime-hug.gif",
            "https://media1.tenor.com/m/udohH7XQDHEAAAAC/hug.gif",
            "https://media1.tenor.com/m/IpGw3LOZi2wAAAAC/hugtrip.gif",
            "https://media1.tenor.com/m/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif",
            "https://media1.tenor.com/m/P-8xYwXoGX0AAAAC/anime-hug-hugs.gif",
            "https://media1.tenor.com/m/Qe6rYPM-FMkAAAAC/prsk-pjsekai.gif",
            "https://media1.tenor.com/m/TsEh_PJhTKwAAAAC/pjsk-pjsk-anime.gif",
            "https://media1.tenor.com/m/g7bSW61_zQEAAAAC/anime-hug.gif",
            "https://media1.tenor.com/m/YuwEoQvncPgAAAAC/hug.gif",
            "https://media1.tenor.com/m/lrLGwMxjIMMAAAAC/shio-anime.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} gives ${user.displayName} a hug!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}