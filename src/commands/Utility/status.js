const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Set bot status (bot owner only)')
    .addStringOption(option => option.setName('type').setDescription('The status type').addChoices( { name: 'Watching', value: `${4}` }, { name: 'Playing', value: `${1}` }, { name: 'Listening', value: `${3}` }, { name: 'Competing', value: `${6}` }, { name: 'Streaming', value: `${2}` }).setRequired(true))
    .addStringOption(option => option.setName('status').setDescription('What to change the bot status to').setMaxLength(128).setRequired(true)),
    async execute (interaction, client) {

        const { options } = interaction;
        const status = options.getString('status');
        const type = options.getString('type');

        if (interaction.user.id != "1018686464000807003" || "431220802797568001") return await interaction.reply({ content: "Invalid permission", ephemeral: true });
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