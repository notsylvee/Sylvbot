const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cuddle')
    .setDescription('Cuddle someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to cuddle').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = user.id;
        const link = [
            "https://media1.tenor.com/m/c2SMIhi33DMAAAAC/cuddle-bed-hug.gif",
            "https://media1.tenor.com/m/bLttPccI_I4AAAAC/cuddle-anime.gif",
            "https://media1.tenor.com/m/P54lVoy1FxkAAAAd/kuzu-no-honkai-hug.gif",
            "https://media1.tenor.com/m/S_RwcMaNX3sAAAAC/yuri-cuddle.gif",
            "https://media1.tenor.com/m/ch1kq7TOxlkAAAAC/anime-cuddle.gif",
            "https://media1.tenor.com/m/RR4YJdzCJRMAAAAd/chainsaw-man-hug.gif",
            "https://media1.tenor.com/m/Yf7E7BCC3McAAAAC/cuddle-anime.gif",
            "https://media1.tenor.com/m/9TN_Wmmvh7sAAAAC/anime-cuddle.gif",
            "https://media1.tenor.com/m/Dc5yd05wu_cAAAAC/couple-hug.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} cuddles ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}