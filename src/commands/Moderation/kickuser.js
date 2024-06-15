const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kickuser')
    .setDescription('Kick a user from this server')
    .addUserOption(option => option.setName('user').setDescription('The user you want to kick').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason for kicking this user')),
    async execute(interaction, client) {

        const kickUser = interaction.options.getUser('user');
        const kickMember = await interaction.guild.members.fetch(kickUser.id);
        const channel = interaction.channel;
        const ID = kickUser.id;

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({ content: "Invalid permissions", ephemeral: true});
        if (!kickMember) return await interaction.reply({ content: "Invalid user", ephemeral: true });
        if (!kickMember.kickable) return await interaction.reply({ content: "Invalid permissions", ephemeral: true });
        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot kick yourself", ephemeral: true });

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason provided";

        const dmEmbed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: You have been kicked from ${interaction.guild.name} for "${reason}"`)

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: ${kickUser.tag} has been kicked for "${reason}"`)

        await kickMember.send({ embeds: [dmEmbed] }).catch(err => {
            return;
        });

        await kickMember.kick({ reason: reason }).catch(err => {
            interaction.reply({ content: "There was an error", ephemeral: true});
        });

        await interaction.reply({ embeds: [embed] });

    }
}