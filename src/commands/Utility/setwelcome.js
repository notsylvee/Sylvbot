const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, } = require('discord.js');
const { QuickDB } = require('quick.db')
const db = new QuickDB();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setwelcome')
    .setDescription('Set a channel to send welcome messages in')
    .addChannelOption(option => option.setName('channel').setDescription('The channel you want welcome messages to be sent').setRequired(true)),
    async execute(interaction) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator))return await interaction.reply({ content: "Invalid permissions", ephemeral: true });

        const channel = interaction.option.getChannel('channel');

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setDescription(`:white_check_mark: The welcome channel has been set to ${channel}`)

        await db.set(`welcomechannel_${interaction.guild.id}`, channel.id)

        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
}