const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll dice')
    .addStringOption(option => option.setName('type').setDescription('The type of die you want to roll').setRequired(true).addChoices(
        { name: 'D4', value: '4' },
        { name: 'D6', value: '6' },
        { name: 'D8', value: '8' },
        { name: 'D10', value: '10' },
        { name: 'D12', value: '12' },
        { name: 'D20', value: '20' },
        { name: 'D100', value: '100' }
    )),

    async execute (interaction) {
        const value = interaction.options.getString('type');
        const number = Math.floor(Math.random() * `${value}`) + 1
        await interaction.reply({ content: `The D4 landed on ${number}` })
    }
}