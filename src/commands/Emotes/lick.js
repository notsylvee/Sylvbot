const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('lick')
    .setDescription('Lick someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to lick').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = users.id;
        const link = [
            "https://media1.tenor.com/m/0LMxPQdFBKAAAAAC/nekopara-kiss.gif",
            "https://media1.tenor.com/m/30jarFTFk5kAAAAC/anime-girl.gif",
            "https://media1.tenor.com/m/c833DFWYQPcAAAAC/wtf-lick-face.gif",
            "https://media1.tenor.com/m/Mwz2ih3-a-cAAAAC/anime-anime-kasumi.gif",
            "https://media1.tenor.com/m/Go7wnhOWjSkAAAAC/anime-lick-face.gif",
            "https://media1.tenor.com/m/WEV6KvZIoAIAAAAC/anime-hybrid-heart.gif",
            "https://media1.tenor.com/m/zoPOIvogEpwAAAAC/lick.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} licks ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}