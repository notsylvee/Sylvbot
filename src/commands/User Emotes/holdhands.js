const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('holdhands')
    .setDescription('Hold someones hand!')
    .addUserOption(option => option.setName('user').setDescription('Who hand you want to hold').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = user.id;
        const link = [
            "https://media1.tenor.com/m/WUZAwo5KFdMAAAAd/love-holding-hands.gif",
            "https://media1.tenor.com/m/qZ5UWbLAEBAAAAAC/val-ally-anime.gif",
            "https://media1.tenor.com/m/s-yu5FESSfwAAAAC/we-never-know-xiaorinajin-au.gif",
            "https://media1.tenor.com/m/4aRC-mZsSFsAAAAC/asthetic-anime.gif",
            "https://media1.tenor.com/m/-76rfR0BNTAAAAAC/anime-couple-hand-holding.gif",
            "https://media1.tenor.com/m/by71aaUwdkYAAAAC/anime-holding-hands.gif",
            "https://media1.tenor.com/m/yVU0CGpQuYsAAAAd/holding-hands.gif",
            "https://media1.tenor.com/m/K72S4MlYBjAAAAAd/sumi-sakurasawa-kazuya-kinoshita.gif",
            "https://media1.tenor.com/m/Nl7fSSTzc5IAAAAC/anime-yama-no-susume.gif",
            "https://media1.tenor.com/m/6WLc223yIA4AAAAC/noel-anime.gif",
            "https://media1.tenor.com/m/vyVrakxE8swAAAAC/anime-love.gif",
            "https://media1.tenor.com/m/4wqTSH9Ep30AAAAC/couple-anime.gif",
            "https://media1.tenor.com/m/9wGMPNAAnewAAAAd/horimiya-hand-holding.gif",
            "https://media1.tenor.com/m/QO3T5tZ4Ia4AAAAd/mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} holds ${user.displayName}'s hand!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}