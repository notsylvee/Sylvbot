const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong!'),
    async execute(interaction, client) {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();
        const ping = reply.createdTimestamp - interaction.createdTimestamp

        interaction.editReply(`🏓 Pong! Client latency is ${ping}ms`)
    }
}