const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pat')
    .setDescription('Pat someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to pat').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = user.id;
        const link = [
            "https://media1.tenor.com/m/kIh2QZ7MhBMAAAAC/tsumiki-anime.gif",
            "https://media1.tenor.com/m/E6fMkQRZBdIAAAAC/kanna-kamui-pat.gif",
            "https://media1.tenor.com/m/wLqFGYigJuIAAAAC/mai-sakurajima.gif",
            "https://media1.tenor.com/m/Dbg-7wAaiJwAAAAC/aharen-aharen-san.gif",
            "https://media1.tenor.com/m/RDfGm9ftwx0AAAAC/anime-pat.gif",
            "https://media1.tenor.com/m/8DaE6qzF0DwAAAAC/neet-anime.gif",
            "https://media1.tenor.com/m/fro6pl7src0AAAAC/hugtrip.gif",
            "https://media1.tenor.com/m/9EVQq2GdJU0AAAAC/wataten-watashi-ni-tenshi-ga-maiorita.gif",
            "https://media1.tenor.com/m/2oOTpioZ_j4AAAAC/pet-cute.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} pats ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}