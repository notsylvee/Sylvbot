const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed, PermissionsBitField, ChannelType, AutoModerationActionExecution } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mod')
    .setDescription('Run a moderation command')
    .addSubcommand(command =>
        command
        .setName('ban')
        .setDescription('Ban a user from this server')
        .addUserOption(option => option.setName('user').setDescription('The user you want to ban').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for banning this user')))
    .addSubcommand(command => 
        command
        .setName('clear')
        .setDescription('Clear messages from this channel')
        .addIntegerOption(option => option.setName('amount').setDescription('Amount of messages to clear (1-100)').setMinValue(1).setMaxValue(100).setRequired(true)))
    .addSubcommand(command =>
        command
        .setName('kick')
        .setDescription('Kick a user from this server')
        .addUserOption(option => option.setName('user').setDescription('The user you want to kick').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for kicking this user')))
    .addSubcommand(command =>
        command
        .setName('slowmode')
        .setDescription('Enable slowmode in a channel')
        .addIntegerOption(option => option.setName('duration').setDescription('The slowmode cooldown duration (seconds)').setRequired(true))
        .addChannelOption(option => option.setName('channel').setDescription('The channel to enable slowmode in').addChannelTypes(ChannelType.GuildText)))
    .addSubcommand(command =>
        command
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
            { name: '1 Month', value: '2332800' }
        ))
        .addStringOption(option => option.setName('reason').setDescription('Reason for putting this user in timeout')))
    .addSubcommand(command =>
        command
        .setName('unban')
        .setDescription('Unban a user from this server')
        .addUserOption(option => option.setName('user').setDescription('The user you want to unban').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason for unbanning this user')))
    .addSubcommand(command =>
        command
        .setName('untimeout')
        .setDescription('Remove timeout a user in this server')
        .addUserOption(option => option.setName('user').setDescription('The user you want to untimeout').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Reason for removing this users timeout')))
    .addSubcommand(command =>
        command
        .setName('lock')
        .setDescription('Lock a channel')
        .addChannelOption(option => option.setName('channel').setDescription('The channel you want to lock').addChannelTypes(ChannelType.GuildText)))
    .addSubcommand(command => 
        command
        .setName('unlock')
        .setDescription('Unlock a channel')
        .addChannelOption(option => option.setName('channel').setDescription('The channel you want to unlock').addChannelTypes(ChannelType.GuildText))),

    async execute (interaction, client) {

        const command = interaction.options.getSubcommand();
            
        switch (command) {
            case 'ban':
            const users = interaction.options.getUser('user');
            const ID = users.id;
            const banUser = client.users.cache.get(ID)

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply({ content: "⚠️ Invalid permissions", ephemeral: true});
            if (interaction.member.id === ID) return await interaction.reply({ content: "⚠️ You cannot ban yourself", ephemeral: true });

            let reason = interaction.options.getString('reason');
            if (!reason) reason = "No reason provided"

            const dmEmbed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`✅ You have been banned from ${interaction.guild.name} for "${reason}"`)

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`✅ ${users.tag} has been banned for "${reason}"`)

            await banUser.send({ embeds: [dmEmbed] }).catch(err => {
                return;
            });

            await interaction.guild.bans.create(banUser.id, {reason}).catch(err => {
                interaction.reply({ content: "⚠️ There was an error", ephemeral: true});
            });

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'clear':
            const amount = interaction.options.getInteger('amount');
            const channel = interaction.channel;

            if (!interaction.member.permissions.has(PermissionsBitField.ManageMessages)) return await interaction.reply({ content: "⚠️ Invalid permission", ephemeral: true });
            if (!amount) return await interaction.reply({ content: "⚠️ Invalid amount", ephemeral: true });
            if (amount > 100 || amount < 1) return await interaction.reply({ content: "⚠️ Invalid amount", ephemeral: true });

            await interaction.channel.bulkDelete(amount).catch(err => {
                return;
            });

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`✅ Deleted ${amount} message(s)`)

            await interaction.reply({ embeds: [embed] }).catch(err => {
                return;
            })
        }

        switch (command) {
            case 'kick':
            const kickUser = interaction.options.getUser('user');
            const kickMember = await interaction.guild.members.fetch(kickUser.id);
            const channel = interaction.channel;
            const ID = kickUser.id;

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({ content: "⚠️ Invalid permissions", ephemeral: true});
            if (!kickMember) return await interaction.reply({ content: "⚠️ Invalid user", ephemeral: true });
            if (!kickMember.kickable) return await interaction.reply({ content: "⚠️ Invalid permissions", ephemeral: true });
            if (interaction.member.id === ID) return await interaction.reply({ content: "⚠️ You cannot kick yourself", ephemeral: true });

            let reason = interaction.options.getString('reason');
            if (!reason) reason = "No reason provided";

            const dmEmbed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`✅ You have been kicked from ${interaction.guild.name} for "${reason}"`)

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`✅ ${kickUser.tag} has been kicked for "${reason}"`)

            await kickMember.send({ embeds: [dmEmbed] }).catch(err => {
                return;
            });

            await kickMember.kick({ reason: reason }).catch(err => {
            interaction.reply({ content: "⚠️ There was an error", ephemeral: true});
            });

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'slowmode':
            const { options } = interaction;
            const duration = options.getInteger('duration');
            const channel = options.getChannel('channel') || interaction.channel;

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return await interaction.reply({ content: "⚠️ Invalid permissions", ephemeral: true});

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`✅ Slowmode has been enabled in ${channel} with a cooldown of ${duration} second(s)`)

            channel.setRateLimitPerUser(duration).catch(err => {
                return;
            });

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'timeout':
            const user = interaction.options.getUser('user');
            const member = await interaction.guild.members.fetch(user.id);
            const duration = interaction.options.getString('duration');

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return await interaction.reply({ content: '⚠️ Invalid permissions', ephemeral: true});
            if (!member) return await interaction.reply({ content: '⚠️ Invalid user', ephemeral: true });
            if (!member.kickable) return await interaction.reply({ content: '⚠️ Invalid user', ephemeral: true });
            if (interaction.member.id === member.id) return await interaction.reply({ content: '⚠️ You cannot timeout yourself', ephemeral: true });
            if (member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: '⚠️ Invalid user', ephemeral: true });

            let reason = interaction.options.getString('reason') || 'No reason provided';

            await member.timeout(duration * 1000, reason);

            const embed = new EmbedBuilder()
            .setColor('Blue')
            .setDescription(`✅ ${user.tag} has been timed out for ${duration / 60} minute(s) for "${reason}"`)

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'unban':
            const userID = interaction.options.getUser('user');

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply({ content: "⚠️ Invalid permissions", ephemeral: true});
            if (interaction.member.id === userID) return await interaction.reply({ content: "⚠️ You cannot unban yourself", ephemeral: true });

            let reason = interaction.options.getString('reason');
            if (!reason) reason = "No reason provided"

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`✅ ${userID} has been unbanned for "${reason}"`)

            await interaction.guild.bans.fetch()
            .then(async bans => {

                if (bans.size == 0) return await interaction.reply({ content: "⚠️ No users are banned from this server", ephemeral: true })
                let bannedID = bans.find(ban => ban.user.id == userID);
                if (!bannedID) return await interaction.reply({ content: "⚠️ That user is not banned", ephemeral: true })

                await interaction.guild.bans.remove(userID, reason).catch(err => {
                    return interaction.reply({ content: "⚠️ User could not be unbanned" })
                })
            })

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'untimeout':
            const user = interaction.options.getUser('user');
            const member = await interaction.guild.members.fetch(user.id);

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return await interaction.reply({ content: '⚠️ Invalid permissions', ephemeral: true});
            if (!member) return await interaction.reply({ content: '⚠️ Invalid user', ephemeral: true });
            if (!member.kickable) return await interaction.reply({ content: '⚠️ Invalid user', ephemeral: true });
            if (interaction.member.id === member.id) return await interaction.reply({ content: '⚠️ You cannot untimeout yourself', ephemeral: true });
            if (member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: '⚠️ Invalid user', ephemeral: true });

            let reason = interaction.options.getString('reason') || 'No reason provided';

            await member.timeout(null, reason);

            const embed = new EmbedBuilder()
            .setColor('Blue')
            .setDescription(`✅ ${user.tag} has been untimed out for "${reason}"`)

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'lock':
            if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return await interaction.reply({ content: '⚠️ Invalid permissions', ephemeral: true});
            
            let channel = interaction.options.getChannel('channel') || interaction.channel;

            channel.permissionOverwrites.edit(interaction.guild.id, {SendMessages: false })

            const embed = new EmbedBuilder()
            .setColor('Blue')
            .setDescription(`✅ ${channel} has been **locked**`)

            await interaction.reply({ embeds: [embed] })
        }

        switch (command) {
            case 'unlock':
            if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return await interaction.reply({ content: '⚠️ Invalid permissions', ephemeral: true});
            
            let channel = interaction.options.getChannel('channel') || interaction.channel;

            channel.permissionOverwrites.edit(interaction.guild.id, {SendMessages: true })

            const embed = new EmbedBuilder()
            .setColor('Blue')
            .setDescription(`✅ ${channel} has been **unlocked**`)

            await interaction.reply({ embeds: [embed] })
        }
    }
}