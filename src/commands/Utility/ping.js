const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong! Get the bots ping (ms)'),
    async execute(interaction, client) {

        const ping = `${Date.now() - interaction.createdTimestamp}`

        interaction.editReply(`🏓 Pong! Client latency is ${ping}ms`)
    }
}