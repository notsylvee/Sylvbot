const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sleep')
    .setDescription('Sends a sleep gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/Cj0YvuE94eoAAAAC/onimai-anime-sleep.gif",
            "https://media1.tenor.com/m/HItBOocy6ikAAAAC/umaru-sleeping.gif",
            "https://media1.tenor.com/m/-NDkB_h0KWsAAAAd/sleep-sleeping.gif",
            "https://media1.tenor.com/m/qlxdd9DVMHUAAAAC/willcore-kon.gif",
            "https://media1.tenor.com/m/Q-nEqZ_N2DkAAAAC/anime-sleep.gif",
            "https://media1.tenor.com/m/dOEq7saPTaYAAAAC/honoka-kousaka-hanayo-koizumi.gif",
            "https://media1.tenor.com/m/WBYwQI16uY4AAAAC/willcore-k-on.gif",
            "https://media1.tenor.com/m/w8bVOlSAZkUAAAAC/spy-x-family-anya-spy-x-family.gif",
            "https://media1.tenor.com/m/q1ha-5nykkkAAAAC/shachiku-san-anime-sleep.gif",
            "https://media1.tenor.com/m/mZtNx5uAsgUAAAAC/kanna-kamui-go-to-sleep.gif",
            "https://media1.tenor.com/m/c-M3EdgOiAsAAAAC/kanna-kanna-kamui.gif",
            "https://media1.tenor.com/m/rYfLbmeRUpMAAAAC/kanna-kamui-kanna-chan.gif",
            "https://media1.tenor.com/m/aQ3PeVBpTmsAAAAC/sleep-cute.gif",
            "https://media1.tenor.com/m/Ij1zuvfJsHwAAAAC/loli-dragon.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is sleeping! zzZ`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}