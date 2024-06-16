const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, IntegrationExpireBehavior } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Get info of a user')
    .addUserOption(option => option.setName('user').setDescription('Who you want to get info about')),
    async execute (interaction) {

        const user = interaction.options.getUser('user') || interaction.user;
        const member = await interaction.guild.members.fetch(user.id);
        const icon = user.displayAvatarURL();
        const tag = user.tag;

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: tag, iconURL: icon })
        .setThumbnail(icon)
        .addFields({ name: "Member", value: `${user}`, inline: false})
        .addFields({ name: "Roles", value: `${member.roles.cache.map(r => r).join(' ')}`, inline: false })
        .addFields({ name: "Joined server", value: `<t:${parseInt(member.joinedAt / 1000)}:R>` })
        .addFields({ name: "Joined Discord", value: `<t:${parseInt(member.createdAt / 1000)}:R>` })
        .setFooter({ text: `User ID: ${user.id}` })
        .setTimestamp()

        await interaction.reply({ embeds: [embed] });
    }
}