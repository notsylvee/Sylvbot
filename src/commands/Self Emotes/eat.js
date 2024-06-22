const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('eat')
    .setDescription('Sends an eating gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/ZBO4pyuseVcAAAAC/engage-kiss-kanna.gif",
            "https://media1.tenor.com/m/uk9xO0xpWoIAAAAC/burger-eating.gif",
            "https://media1.tenor.com/m/ZJltjT6QMBwAAAAC/eating-anime.gif",
            "https://media1.tenor.com/m/p5DGewKTyQAAAAAC/loli-dragon.gif",
            "https://media1.tenor.com/m/rL9bf5nEuFUAAAAC/dragon-ball-eating.gif",
            "https://media1.tenor.com/m/gQjxza31pxIAAAAd/my-dress-up-darling-anime-eat.gif",
            "https://media1.tenor.com/m/v2Y1s3etfDUAAAAC/charlotte-anime.gif",
            "https://media1.tenor.com/m/4XzCV-yPOroAAAAC/anime-eating.gif",
            "https://media1.tenor.com/m/52qdiySrhQwAAAAd/yui-burger.gif",
            "https://media1.tenor.com/m/twZc5kf2RT0AAAAC/kanna-kobayashi.gif",
            "https://media1.tenor.com/m/eleW2f2bhI8AAAAC/aihara-enju.gif",
            "https://media1.tenor.com/m/AxM95qw3wwAAAAAC/eating-anime.gif",
            "https://media1.tenor.com/m/EJfXvrfjicQAAAAC/yuru-yuri-chinatsu.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} is eating! nom nom nom`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}