const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('tickle')
    .setDescription('Tickle someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to tickle').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const link = [
            "https://media1.tenor.com/m/l3c7tV1zYD4AAAAC/date-a-live-date-a-live-iv.gif",
            "https://media1.tenor.com/m/UCHNhsWSF-gAAAAC/classroom-of-the-elite-youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu.gif",
            "https://media1.tenor.com/m/dC1HN-p-z1YAAAAd/onimai-momiji-hozuki.gif",
            "https://media1.tenor.com/m/Li-ya799Ni4AAAAC/onimai-oniichan-wa-oshimai.gif",
            "https://media1.tenor.com/m/TZZrlveuFmQAAAAC/nezuko-mitsuri.gif",
            "https://media1.tenor.com/m/YhS9TU4Ig40AAAAC/dragon-maid-tickling.gif",
            "https://media1.tenor.com/m/sa1QuA9GFaoAAAAC/anime-tickle.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} tickles ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}