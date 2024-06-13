const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('slowmode')
    .setDescription('Enable slowmode in a channel')
    .addIntegerOption(option => option.setName('duration').setDescription('The slowmode cooldown duration (seconds)').setRequired(true))
    .addChannelOption(option => option.setName('channel').setDescription('The channel to enable slowmode in').addChannelTypes(ChannelType.GuildText).setRequired(false)),
    async execute (interaction) {

        const { options } = interaction;
        const duration = options.getInteger('duration');
        const channel = options.getChannel('channel') || interaction.channel;

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return await interaction.reply({ content: "Invalid permissions", ephemeral: true});

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark: Slowmode has been enabled in ${channel} with a cooldown of ${duration} second(s)`)

        channel.setRateLimitPerUser(duration).catch(err => {
            return;
        });

        await interaction.reply({ embeds: [embed] });
    }
}