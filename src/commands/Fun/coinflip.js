const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Flip a coin'),
    
    async execute (interaction) {

        const answers = [ "heads", "tails" ];
        const answer = answers[Math.floor(Math.random() * answers.length)];

        await interaction.reply({ content: `The coin landed on ${answer}!` })
    }
}