const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('poke')
    .setDescription('Poke someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to poke').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = users.id;
        const link = [
            "https://media1.tenor.com/m/4OHxyGd4qp0AAAAC/boop-nose.gif",
            "https://media1.tenor.com/m/1YMrMsCtxLQAAAAC/anime-poke.gif",
            "https://media1.tenor.com/m/RmQElPHERIoAAAAC/boop-anime.gif",
            "https://media1.tenor.com/m/QDNTqOInK5MAAAAC/anime-poke.gif",
            "https://media1.tenor.com/m/_vVL5fuzj4cAAAAC/nagi-no.gif",
            "https://media1.tenor.com/m/iu_Lnd86GxAAAAAC/nekone-utawarerumono.gif",
            "https://media1.tenor.com/m/BRiG6X6tYtEAAAAC/poke.gif",
            "https://media1.tenor.com/m/0i9CGM3SQsYAAAAC/anime-poke.gif",
            "https://media1.tenor.com/m/vu1AUXE8wtsAAAAd/anime-sleep.gif",
            "https://media1.tenor.com/m/jNx0V84WbqkAAAAC/anime-anime-poke.gif",
            "https://media1.tenor.com/m/5j7eivfftw8AAAAC/poke.gif",
            "https://media.tenor.com/W5Sqx8YavwYAAAAM/chtholly-nota-seniorious-suka-suka.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} pokes ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}