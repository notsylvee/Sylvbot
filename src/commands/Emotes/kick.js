const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to kick').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = users.id;
        const link = [
            "https://media1.tenor.com/m/Lyqfq7_vJnsAAAAC/kick-funny.gif",
            "https://media1.tenor.com/m/o52AZQZ_PloAAAAC/kick-anime.gif",
            "https://media1.tenor.com/m/QxoBMmf2bRwAAAAC/jormungand-anime.gif",
            "https://media1.tenor.com/m/NYZq5QT9o-UAAAAC/chuunibyou-nibutani.gif",
            "https://media1.tenor.com/m/mEgexCY-65QAAAAC/toradora-taiga.gif",
            "https://media1.tenor.com/m/6JTiWrb8oOYAAAAC/kick.gif",
            "https://media1.tenor.com/m/bpgPEPfFlnIAAAAd/yeet-anime.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} kicks ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}