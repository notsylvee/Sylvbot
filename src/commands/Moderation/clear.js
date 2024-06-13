const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, Embed, AutoModerationActionExecution } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Clear messages from this channel')
    .addIntegerOption(option => option.setName('amount').setDescription('Amount of messages to clear (1-100)').setMinValue(1).setMaxValue(100).setRequired(true)),
    async execute (interaction, client) {

        const amount = interaction.options.getInteger('amount');
        const channel = interaction.channel;

        if (!interaction.member.permissions.has(PermissionsBitField.ManageMessages)) return await interaction.reply({ content: "Invalid permission", ephemeral: true });
        if (!amount) return await interaction.reply({ content: "Invalid amount", ephemeral: true });
        if (amount > 100 || amount < 1) return await interaction.reply({ content: "Invalid amount", ephemeral: true });

        await interaction.channel.bulkDelete(amount).catch(err => {
            return;
        });

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: Deleted ${amount} message(s)`)

        await interaction.reply({ embeds: [embed] }).catch(err => {
            return;
        })
    }
}