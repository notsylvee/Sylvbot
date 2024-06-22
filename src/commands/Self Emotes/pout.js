const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pout')
    .setDescription('Sends a pouting gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/iNu8LXx2ECgAAAAC/senko-poute-hmph.gif",
            "https://media1.tenor.com/m/03VCLMyKfL4AAAAC/pout-anime-pout.gif",
            "https://media1.tenor.com/m/nvK39Flu2LwAAAAC/anime-fan27-pout.gif",
            "https://media1.tenor.com/m/L2eobON0t84AAAAC/anime-pout.gif",
            "https://media1.tenor.com/m/hR8XdCeC2psAAAAC/cute-pouting.gif",
            "https://media1.tenor.com/m/wtSs_VCHYmEAAAAC/noela-angry.gif",
            "https://media1.tenor.com/m/5zXUvByrCe8AAAAC/sora-no.gif",
            "https://media1.tenor.com/m/yCR6JOoxS6wAAAAd/anime-angry.gif",
            "https://media1.tenor.com/m/CZGY4W52elwAAAAC/anime-kubo-san.gif",
            "https://media1.tenor.com/m/G_YeALOH-iAAAAAC/mao-amatsuka-mad.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is pouting! Hmph!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}