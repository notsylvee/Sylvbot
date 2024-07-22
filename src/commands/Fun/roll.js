const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll dice')
    .addStringOption(option => option.setName('type').setDescription('The type of die you want to roll').setRequired(true).addChoices(
        { name: 'D4', value: '60' },
        { name: 'D6', value: '120' },
        { name: 'D8', value: '180' },
        { name: 'D10', value: '240' },
        { name: 'D12', value: '300' },
        { name: 'D20', value: '600' },
        { name: 'D100', value: '900' }
    )),

    async execute (interaction) {
        const value = interaction.options.getString('type');
        const number = Math.floor(Math.random() * `${value}`) + 1
        await interaction.reply({ content: `The D4 landed on ${number}` })
    }
}