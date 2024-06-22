const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('spin')
    .setDescription('Sends a spinning gif!'),
    async execute(interaction, client) {

        const link = [
            "https://media1.tenor.com/m/hCfbgMlt0gQAAAAC/anime-spinning.gif",
            "https://media1.tenor.com/m/JCUkBqoE9NsAAAAd/chika-fujiwara-kaguya-sama-love-is-war.gif",
            "https://media1.tenor.com/m/4IqJedBCDo4AAAAC/spin-anime.gif",
            "https://media1.tenor.com/m/CQmfNrX5MT4AAAAC/anime-spinning.gif",
            "https://media1.tenor.com/m/Ob3ZdnEE1aUAAAAC/maya-gochiusa.gif",
            "https://media1.tenor.com/m/1VBwgnE7xTIAAAAC/speeen-anime.gif",
            "https://media1.tenor.com/m/aJcvC4aJvigAAAAC/urara-meirocho.gif",
            "https://media1.tenor.com/m/FFa_xBUaG68AAAAC/hana-anime.gif",
            "https://media1.tenor.com/m/xSVqCQ9wt8oAAAAd/rinne-berlinetta-magical-girl-lyrical-nanoha.gif",
            "https://media1.tenor.com/m/mqAFe5kR2xwAAAAC/anime-girl-rotate-rotate.gif",
            "https://media1.tenor.com/m/xvwaan7QCAYAAAAd/wakaba-girl-anime.gif",
            "https://media1.tenor.com/m/442gjGV-udYAAAAC/speeen-anime.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} spins!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}