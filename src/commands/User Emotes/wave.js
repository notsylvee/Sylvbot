const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('wave')
    .setDescription('Sends a waving gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/nQOSTbcTKZcAAAAC/anime-waves-hi.gif",
            "https://media1.tenor.com/m/1MfQk9vFF7MAAAAC/anime-bye-bye-maki.gif",
            "https://media1.tenor.com/m/tzbVcnK8iGsAAAAC/keai-cute.gif",
            "https://media1.tenor.com/m/dCTUyNt499gAAAAC/kobayashi-dragon.gif",
            "https://media1.tenor.com/m/arRLkSbIcJQAAAAC/waving-cat.gif",
            "https://media1.tenor.com/m/AJrPXQyoNCQAAAAC/kanokari-anime-wave.gif",
            "https://media1.tenor.com/m/vNapCUP0d3oAAAAC/pjsk-pjsk-anime.gif",
            "https://media1.tenor.com/m/4iwQ12BEPzYAAAAC/wave-blushing.gif",
            "https://media1.tenor.com/m/BfOaQrPTl4YAAAAC/wataten-watashi-ni-tenshi-ga-maiorita.gif",
            "https://media1.tenor.com/m/bwkDOmCtqTEAAAAC/wave-cute.gif",
            "https://media1.tenor.com/m/NplHmWoUid0AAAAC/anime-girl.gif",
            "https://media1.tenor.com/m/AuBOgaPV41cAAAAC/shinya-shinyahiragi.gif",
            "https://media1.tenor.com/m/ILT5-vuNzB8AAAAC/anime-anime-wave-bye.gif",
            "https://media1.tenor.com/m/bGS2OhhN9tsAAAAC/hello-gojo-satoru.gif",
            "https://media1.tenor.com/m/TQ3Jul8r2DwAAAAC/anime-boy.gif",
            "https://media1.tenor.com/m/SPkUmWsvnGIAAAAd/sumi-sakurasawa-rent-a-girlfriend.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} waves!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}