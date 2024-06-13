const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('Unban a user from this server')
    .addUserOption(option => option.setName('user').setDescription('The user you want to unban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason for unbanning this user')),
    async execute(interaction, client) {

        const userID = interaction.options.getUser('user');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply({ content: "Invalid permissions", ephemeral: true});
        if (interaction.member.id === userID) return await interaction.reply({ content: "You cannot ban yourself", ephemeral: true });

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason provided"

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: ${userID} has been unbanned for "${reason}"`)

        await interaction.guild.bans.fetch()
        .then(async bans => {

            if (bans.size == 0) return await interaction.reply({ content: "No users are banned from this server", ephemeral: true })
            let bannedID = bans.find(ban => ban.user.id == userID);
            if (!bannedID) return await interaction.reply({ content: "That user is not banned", ephemeral: true })

            await interaction.guild.bans.remove(userID, reason).catch(err => {
                return interaction.reply({ content: "User could not be unbanned" })
            })
        })

        await interaction.reply({ embeds: [embed] });
    }
}