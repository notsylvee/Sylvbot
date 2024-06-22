const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('suicide')
    .setDescription('Commit suicide'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/3WRKCYqnYEsAAAAC/kermit-suicide.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} commit suicide 💀`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}