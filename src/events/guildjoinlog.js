const { Events, ButtonBuilder, EmbedBuilder, ButtonStyle, ActionRowBuilder, ComponentType, ChannelType, Component } = require('discord.js')

module.exports = {
    name: Events.GuildCreate,
    async execute (guild, client) {
        if (!guild) return;
        const sendChannel = await client.channels.fetch('1245963741460430858');
        const name = guild.name;
        const id = guild.id;
        const owner = await guild.members.fetch(guild.ownerId);
        const memberCount = await guild.members.cache.size;
        const botCount = (await VideoQualityMode.members.fetch()).filter(member => member.user.bot).size;
        const clientGuildCount = await client.guilds.cache.size;
        const joinTime = `<t:${Math.floor(Date.now() / 1000)}:R>`;
        
        const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle(`Server join`)
        .addFields({ name: `Name`, value: `\`${name}\`` })
        .addFields({ name: `ID`, value: `\`${id}\`` })
        .addFields({ name: `Owner`, value: `\`${owner.user.username} (${owner.id})\`` })
        .addFields({ name: `Member Count`, value: `\`${memberCount}\`` })
        .addFields({ name: `Bot Count`, value: `\`${botCount + 1}\`` })
        .addFields({ name: `Join Time`, value: `${joinTime}` })
        .setDescription(`I am now in \`${clientGuildCount}\` servers`)
        .setFooter({ text: `Server join` })
        .setTimestamp();

        const button = new ButtonBuilder()
        .setCustomId('invite')
        .setLabel(`Get Server Invite`)
        .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder()
        .addComponents(
            button
        );

        await sendChannel.send({ embeds: [embed], components: [row] }).catch(err => {});
    }
}