const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed, PermissionsBitField, ChannelType, AutoModerationActionExecution } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('util')
    .setDescription('Run a utility command')
    .addSubcommand(command =>
        command
        .setName('ping')
        .setDescription('Pong! Get the bots ping'))
    .addSubcommand(command =>
        command
        .setName('status')
        .setDescription('Set bot status (bot owner only)')
        .addStringOption(option => option.setName('type').setDescription('The status type').addChoices( { name: 'Watching', value: `${4}` }, { name: 'Playing', value: `${1}` }, { name: 'Listening to', value: `${3}` }, { name: 'Competing in', value: `${6}` }, { name: 'Streaming', value: `${2}` }).setRequired(true))
        .addStringOption(option => option.setName('status').setDescription('What to change the bot status to').setMaxLength(128).setRequired(true))),
    
    async execute (interaction, client) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'ping':
            const ping = `${Date.now() - interaction.createdTimestamp}`

            interaction.reply(`🏓 Pong! Client latency is ${ping}ms`)
        }

        switch (command) {
            case 'status':
            const { options } = interaction;
            const status = options.getString('status');
            const type = options.getString('type');
            const id = [
                "1018686464000807003",
                "431220802797568001"
            ]

            if (!id.includes(interaction.user.id)) return await interaction.reply({ content: "Invalid permission", ephemeral: true });
            else {

            client.user.setActivity({
                name: status,
                type: type-1,
                url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
            })

            const embed = new EmbedBuilder()
            .setColor('Green')
            .setDescription(`:white_check_mark: The bots status has been set to \`${status}\``)

            await interaction.reply({ embeds: [embed], ephemeral: true });
            }
        }
    }
}