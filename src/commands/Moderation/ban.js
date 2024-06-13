const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from this server')
    .addUserOption(option => option.setName('user').setDescription('The user you want to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason for banning this user')),
    async execute(interaction, client) {

        const users = interaction.options.getUser('user');
        const ID = users.id;
        const banUser = client.users.cache.get(ID)

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply({ content: "Invalid permissions", ephemeral: true});
        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot ban yourself", ephemeral: true });

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason provided"

        const dmEmbed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: You have been banned from ${interaction.guild.name} for "${reason}"`)

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: ${users.tag} has been banned for "${reason}"`)

        await banUser.send({ embeds: [dmEmbed] }).catch(err => {
            return;
        });

        await interaction.guild.bans.create(banUser.id, {reason}).catch(err => {
            interaction.reply({ content: "There was an error", ephemeral: true});
        });

        await interaction.reply({ embeds: [embed] });
    }
}