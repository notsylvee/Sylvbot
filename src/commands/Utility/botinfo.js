const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandIntegerOption, Component } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Sends info about this bot'),
    async execute (interaction, client) {

        const name = "Sylvbot";
        const icon = `${client.user.displayAvatarURL()}`;
        let servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0);

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = Math.floor(totalSeconds % 60)

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`

        let ping = `${Date.now() - interaction.createdTimestamp}ms`

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('Primary Server')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.gg/tYdcFVY6pJ`),

            new ButtonBuilder()
            .setLabel('Bot Invite')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/oauth2/authorize?client_id=953885359668871238&permissions=8&integration_type=0&scope=applications.commands+bot`),
        )

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: name, iconURL: icon })
        .setThumbnail(`${icon}`)
        .addFields({ name: 'Server count', value: `${client.guilds.cache.size}`, inline: true })
        .addFields({ name: 'Server members', value: `${servercount}`, inline: true })
        .addFields({ name: 'Latency', value: `${ping}`, inline: true })
        .addFields({ name: 'Uptime', value: `\`\`\`${uptime}\`\`\`` })
        .setFooter({ text: "Bot ID: 953885359668871238" })
        .setTimestamp()

        await interaction.reply({ embeds: [embed], components: [row] });
    }
}