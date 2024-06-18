const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('timeout')
    .setDescription('Timeout a user in this server')
    .addUserOption(option => option.setName('user').setDescription('The user you want to timeout').setRequired(true))
    .addStringOption(option => option.setName('duration').setDescription('The duration of the timeout').setRequired(true).addChoices(
        { name: '1 Minute', value: '60' },
        { name: '2 Minutes', value: '120' },
        { name: '3 Minutes', value: '180' },
        { name: '4 Minutes', value: '240' },
        { name: '5 Minutes', value: '300' },
        { name: '10 Minutes', value: '600' },
        { name: '15 Minutes', value: '900' },
        { name: '30 Minutes', value: '1800' },
        { name: '45 Minutes', value: '2700' },
        { name: '1 Hour', value: '3600' },
        { name: '2 Hours', value: '7200' },
        { name: '3 Hours', value: '10800' },
        { name: '4 Hours', value: '14400' },
        { name: '5 Hours', value: '18000' },
        { name: '10 Hours', value: '36000' },
        { name: '1 Day', value: '86400' },
        { name: '2 Days', value: '172800' },
        { name: '3 Days', value: '259200' },
        { name: '4 Days', value: '345600' },
        { name: '5 Days', value: '432000' },
        { name: '6 Days', value: '518400' },
        { name: '1 Week', value: '604800' },
        { name: '2 Weeks', value: '1209600' },
        { name: '3 Weeks', value: '1814400' },
        { name: '1 Month', value: '2419200' }
    ))
    .addStringOption(option => option.setName('reason').setDescription('Reason for putting this user in timeout')),
    async execute (interaction) {

        const user = interaction.options.getUser('user');
        const member = await interaction.guild.members.getch(user.id);
        const duration = interaction.options.getString('durations');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return await interaction.reply({ content: 'Invalid permissions', ephemeral: true});
        if (!member) return await interaction.reply({ content: 'Invalid user', ephemeral: true });
        if (!member.kickable) return await interaction.reply({ content: 'Invalid user', ephemeral: true });
        if (interaction.member.id === member.id) return await interaction.reply({ content: 'You cannot timeout yourself', ephemeral: true });
        if (member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: 'Invalid user', ephemeral: true });

        let reason = interaction.options.getString('reason') || 'No reason provided';

        await member.timeout(duration * 1000, reason);

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setDescription(`:white_check_mark: ${user.tag} has been timed out for ${duration / 60} minute(s) for ${reason}`)

        await interaction.reply({ embeds: [embed] });
    }
}