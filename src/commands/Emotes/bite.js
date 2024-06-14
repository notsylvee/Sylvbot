const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bite')
    .setDescription('Bite someone!')
    .addUserOption(option => option.setName('user').setDescription('Who you want to bite').setRequired(true)),
    async execute(interaction, client) {

        const user = interaction.options.getUser('user');
        const ID = user.id;
        const link = [
            "https://media1.tenor.com/m/5mVQ3ffWUTgAAAAC/anime-bite.gif",
            "https://media1.tenor.com/m/ECCpi63jZlUAAAAC/anime-bite.gif",
            "https://media1.tenor.com/m/jQ1anSa1FekAAAAC/bite-me.gif",
            "https://media1.tenor.com/m/diRQGFt9T1EAAAAC/nom-kiwi-nom.gif",
            "https://media1.tenor.com/m/QvLlkNlsRDAAAAAC/nom-nom-anime-love.gif",
            "https://media1.tenor.com/m/1LtA9dSoAIQAAAAC/zero-no-tsukaima-bite.gif",
            "https://media1.tenor.com/m/TX6YHUnHJk4AAAAC/mao-amatsuka-gj-bu.gif",
            "https://media1.tenor.com/m/BVFbvCZKNEsAAAAC/princess-connect-anime-bite.gif",
            "https://media1.tenor.com/m/gVab5HFISIwAAAAC/lesbian-yuri.gif",
            "https://media1.tenor.com/m/2LQyH42t1CgAAAAC/anime-funny.gif"
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID) return await interaction.reply({ content: "You cannot use this command on yourself", ephemeral: true });

        const embed = new EmbedBuilder()
        .setColor("Fuchsia")
        .setAuthor({ name: `${interaction.member.displayName} bites ${user.displayName}!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
        .setImage(gif)

        await interaction.reply({ embeds: [embed] });
    }
}