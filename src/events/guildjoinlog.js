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

        const msg = await sendChannel.send({ embeds: [embed], components: [row] }).catch(err => {});
        var time = 86400000;
        const collector = await msg.createMessageComponentCollector({
            ComponentType: ComponentType.Button,
            time
        });

        collector.on('collect', async i => {
            if (i.customId == 'invite') {
                var channel;
                const channels = await guild.channels.cache.filter(c => c.type === ChannelType.GuildText);

                for (const c of channels.values()) {
                    channel = c;
                    break;
                }

                if (!channel) return await i.reply({ content: `<:exclamation:1266823414828765246> Invalid channels`, ephemeral: true });

                const invite = await channel.createInvite().catch(err => {});
                await i.reply({ content: `discord.gg/${invite.code}`, ephemeral: true });
            }
        });

        collector.on('end', async () => {
            button.setDisabled(true);
            await msg.edit({ embeds: [embed], components: [row] });
        })
    }
}