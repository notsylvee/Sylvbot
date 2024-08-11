const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('giveaway')
    .setDescription('Create or configure a giveaway')
    .addSubcommand(command => 
        command
        .setName('create')
        .setDescription('Create a giveaway')
        .addStringOption(option => 
            option
            .setName('duration')
            .setDescription('Duration of the giveaway (ie. 1m, 1h, 1d, etc)')
            .setRequired(true))
        .addIntegerOption(option =>
            option
            .setName('winners')
            .setDescription('How many people can win this giveaway')
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName('prize')
            .setDescription('The prize of this giveaway')
            .setRequired(true)))
    .addSubcommand(command =>
        command
        .setName('edit')
        .setDescription('Edit a giveaway')
        .addStringOption(option =>
            option
            .setName('message-id')
            .setDescription('The ID of the giveaway to edit')
            .setRequired(true))
        .addStringOption(option =>
            option
            .setName('time')
            .setDescription('The amount of time in ms to add to the giveaway')
            .setRequired(true))
        .addIntegerOption(option =>
            option
            .setName('winners')
            .setDescription('The new amount of winners for this giveaway')
            .setRequired(true))
        .addStringOption(option => 
            option
            .setName('prize')
            .setDescription('The new prize for this giveaway')))
    .addSubcommand(command =>
        command
        .setName('end')
        .setDescription('End a giveaway')
        .addStringOption(option =>
            option
            .setName('message-id')
            .setDescription('The ID of the giveaway to end')
            .setRequired(true)))
    .addSubcommand(command =>
        command
        .setName('reroll')
        .setDescription('Reroll a giveaway')
        .addStringOption(option =>
            option
            .setName('message-id')
            .setDescription('The ID of the giveaway to reroll')
            .setRequired(true))),
    async execute (interaction, client) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return await interaction.reply({ content: `<:forbidden:1266829648344645694> Invalid permission`, ephemeral: true });
        const sub = interaction.options.getSubcommand();

        switch (sub) {
            case 'start':
                await interaction.reply({ content: `<:bubble:1266834037931118623> Starting giveaway...`, ephemeral: true });
                const duration = ms(interaction.options.getString('duration') || "");
                const winnerCount = interaction.options.getInteger('winners');
                const prize = interaction.options.getString('prize');
                client.giveawayManager.start(interaction.channel, {
                    prize,
                    winnerCount,
                    duration,
                    hostedBy: interaction.user,
                    lastChance: {
                        enabled: false,
                        content: '',
                        threshold: 60000000000_000,
                        embedColor: `#e5302d`
                    }
                });
                interaction.editReply({ content: '<:check:1266815137587920937> Giveaway has started', ephemeral: true })
            break;
            case 'edit':
                await interaction.reply({ content: `<:bubble:1266834037931118623> Editing giveaway...`, ephemeral: true });
                const newDuration = interaction.options.getString('time');
                const newWinnerCount = interaction.options.getInteger('winners');
                const newPrize = interaction.options.getString('prize');
                const messageId = interaction.options.getString('message-id');
                client.giveawayManager.edit(messageId, {
                    addTime: ms(newDuration),
                    newWinnerCount: newWinnerCount,
                    newPrize: newPrize
                }).then(() => {
                    interaction.editReply({ content: `<:check:1266815137587920937> Edited giveaway`, ephemeral: true })
                }).catch(err => {
                    interaction.editReply({ content: `<:exclamation:1266823414828765246> Could not edit giveaway`, ephemeral: true })
                });
            break;
            case 'end':
                await interaction.reply({ content: `<:bubble:1266834037931118623> Ending giveaway...`, ephemeral: true });
                const messageId1 = interaction.options.getString('message-id');
                client.giveawayManager.end(messageId1).then(()=> {
                    interaction.editReply({ content: `<:check:1266815137587920937> Ended giveaway`, ephemeral: true })
                }).catch(err => {
                    interaction.editReply({ content: `<:exclamation:1266823414828765246> Could not end giveaway`, ephemeral: true })
                });
            break;
            case 'reroll':
                await interaction.reply({ content: `<:bubble:1266834037931118623> Rerolling giveaway...`, ephemeral: true });
                const query = interaction.options.getString('message-id');
                const giveaway = client.giveawayManager.giveaways.find((g) => g.guildId === interaction.guildId && g.prize === query) || client.giveawayManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === query);
                if (!giveaway) return interaction.editReply({ content: `<:exclamation:1266823414828765246> Could not find giveaway`, ephemeral: true });
                const messageId2 = interaction.options.getString('message-id');
                client.giveawayManager.reroll(messageId2).then(()=> {
                    interaction.editReply({ content: `<:check:1266815137587920937> Rerolled giveaway`, ephemeral: true })
                }).catch(err => {
                    interaction.editReply({ content: `<:exclamation:1266823414828765246> Could not reroll giveaway`, ephemeral: true })
                });
        }
    }
}