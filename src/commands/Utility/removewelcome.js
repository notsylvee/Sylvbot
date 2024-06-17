const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, } = require('discord.js');
const { QuickDB } = require('quick.db')
const db = new QuickDB();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('removewelcome')
    .setDescription('Remove the welcome channel'),
    async execute(interaction) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator))return await interaction.reply({ content: "Invalid permissions", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setDescription(`:white_check_mark: Welcome channel has been removed`)

        await db.delete(`welcomechannel_${interaction.guild.id}`)

        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
}