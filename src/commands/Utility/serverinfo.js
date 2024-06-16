const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, IntegrationExpireBehavior } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Get info about this server'),
    async execute (interaction) {

        const { guild } = interaction;
        const { mmebers } = guild;
        const { name, ownerId, createdTimestamp, memberCount } = guild;
        const icon = guild.iconURL() || 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg';
        const roles = guild.roles.cache.size;
        const emojis = guild.emojis.cache.size;
        const id = guild.id;

        let baseVerification = guild.VerificationLevel;

        if (baseVerification == 0) baseVerification = "None"
        if (baseVerification == 1) baseVerification = "Low"
        if (baseVerification == 2) baseVerification = "Medium"
        if (baseVerification == 3) baseVerification = "High"
        if (baseVerification == 4) baseVerification = "Highest"

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: name, iconURL: icon })
        .setThumbnail(icon)
        .addFields({ name: "Name", value: `${name}`, inline: false})
        .addFields({ name: "Date created", value: `<t:${parseInt(createdTimestamp / 1000)}:R>`, inline: true })
        .addFields({ name: "Server owner", value: `<@${ownerId}>`, inline: true })
        .addFields({ name: "Members", value: `${memberCount}`, inline: true })
        .addFields({ name: "Roles", value: `${roles}`, inline: true })
        .addFields({ name: "Emojis", value: `${emojis}`, inline: true })
        .addFields({ name: "Server boosts", value: `${guild.premiumSubscriptionCount}`, inline: true })
        .addFields({ name: "Verification level", value: `${baseVerification}`, inline: true })
        .setFooter({ text: `Server ID: ${id}` })
        .setTimestamp()

        await interaction.reply({ embeds: [embed] });
    }
}