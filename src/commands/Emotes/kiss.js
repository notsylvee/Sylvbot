const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('Give someone a kiss!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to kiss').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = users.id;
        const link = [
            "https://media1.tenor.com/m/ye6xtORyw_8AAAAC/2.gif",
            "https://media1.tenor.com/m/BZyWzw2d5tAAAAAC/hyakkano-100-girlfriends.gif",
            "https://media1.tenor.com/m/b7DWF8ecBkIAAAAC/kiss-anime-anime.gif",
            "https://media1.tenor.com/m/9u2vmryDP-cAAAAC/horimiya-animes.gif",
            "https://media1.tenor.com/m/2ufYUI2sVFoAAAAC/kiss.gif",
            "https://media1.tenor.com/m/SYwRyd6N1UIAAAAC/anime-kiss.gif",
            "https://media1.tenor.com/m/9OV4Q-nMTxsAAAAC/yosuga-no-sora-anime-kiss.gif",
            "https://media1.tenor.com/m/APN_rYYwVCQAAAAC/runa-shirakawa-ryuuto-kashima.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} gives ${user.displayName} a kiss!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}