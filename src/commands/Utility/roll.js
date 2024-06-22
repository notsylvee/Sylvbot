const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll some dice')
    .addSubcommand(command =>
        command
        .setName('d4')
        .setDescription('Roll a D4'))
    .addSubcommand(command =>
        command
        .setName('d6')
        .setDescription('Roll a D6'))
    .addSubcommand(command =>
        command
        .setName('d8')
        .setDescription('Roll a D8'))
    .addSubcommand(command =>
        command
        .setName('d10')
        .setDescription('Roll a D10'))
    .addSubcommand(command =>
        command
        .setName('d12')
        .setDescription('Roll a D12'))
    .addSubcommand(command =>
        command
        .setName('d20')
        .setDescription('Roll a D20'))
    .addSubcommand(command =>
        command
        .setName('d100')
        .setDescription('Roll a D100')),

    async execute (interaction) {

        const command = interaction.options.getSubcommand();
        switch (command) {
            case 'd4':
            const number = Math.floor(Math.random() * 4) + 1
            await interaction.reply({ content: `The D4 landed on ${number}` })
        }

        switch (command) {
            case 'd6':
            const number = Math.floor(Math.random() * 6) + 1
            await interaction.reply({ content: `The D6 landed on ${number}` })
        }

        switch (command) {
            case 'd8':
            const number = Math.floor(Math.random() * 8) + 1
            await interaction.reply({ content: `The D8 landed on ${number}` })
        }

        switch (command) {
            case 'd10':
            const number = Math.floor(Math.random() * 10) + 1
            await interaction.reply({ content: `The D10 landed on ${number}` })
        }

        switch (command) {
            case 'd12':
            const number = Math.floor(Math.random() * 12) + 1
            await interaction.reply({ content: `The D12 landed on ${number}` })
        }

        switch (command) {
            case 'd20':
            const number = Math.floor(Math.random() * 20) + 1
            await interaction.reply({ content: `The D20 landed on ${number}` })
        }
        
        switch (command) {
            case 'd100':
            const number = Math.floor(Math.random() * 100) + 1
            await interaction.reply({ content: `The D100 landed on ${number}` })
        }
    }
}