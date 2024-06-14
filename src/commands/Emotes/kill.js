const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Kill someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to hug').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = users.id;
        const link = [
            "https://media1.tenor.com/m/NbBCakbfZnkAAAAC/die-kill.gif",
            "https://media1.tenor.com/m/UCQAbj2zULQAAAAC/anime-smash.gif",
            "https://media1.tenor.com/m/jrnH6CdNne0AAAAC/2s.gif",
            "https://media1.tenor.com/m/b7UhYIWfmXEAAAAC/yumeko-mirai-nikki.gif",
            "https://media1.tenor.com/m/Gg4wSkuH6b4AAAAC/anime-manga.gif",
            "https://media1.tenor.com/m/Mn4W4D899WEAAAAC/ira-gamagoori-attack.gif",
            "https://media1.tenor.com/m/CWsbJDl70tsAAAAC/shimoneta.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} kills ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}