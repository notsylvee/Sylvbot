const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('untimeout')
    .setDescription('Remove timeout a user in this server')
    .addUserOption(option => option.setName('user').setDescription('The user you want to untimeout').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason for removing this users timeout')),
    async execute (interaction) {

        const user = interaction.options.getUser('user');
        const member = await interaction.guild.members.getch(user.id);

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return await interaction.reply({ content: 'Invalid permissions', ephemeral: true});
        if (!member) return await interaction.reply({ content: 'Invalid user', ephemeral: true });
        if (!member.kickable) return await interaction.reply({ content: 'Invalid user', ephemeral: true });
        if (interaction.member.id === member.id) return await interaction.reply({ content: 'You cannot untimeout yourself', ephemeral: true });
        if (member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: 'Invalid user', ephemeral: true });

        let reason = interaction.options.getString('reason') || 'No reason provided';

        await member.timeout(null, reason);

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setDescription(`:white_check_mark: ${user.tag} has been untimed out for "${reason}"`)

        await interaction.reply({ embeds: [embed] });
    }
}