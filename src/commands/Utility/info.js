const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandIntegerOption, Component } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user, the bot, or this server')
    .addSubcommand(command =>
        command
        .setName('bot')
        .setDescription('Sends info about this bot'))
    .addSubcommand(command =>
        command
        .setName('server')
        .setDescription('Sends info about this server'))
    .addSubcommand(command =>
        command
        .setName('user')
        .setDescription('Send info about a user')
        .addUserOption(option => option.setName('user').setDescription('Who you want to get info about')))
    .addSubcommand(command =>
        command
        .setName('serverlist')
        .setDescription('Get a list of all the servers this bot is in (bot owner only)')),

    async execute (interaction, client) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'bot':
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
        
                const embed = new EmbedBuilder()
                .setColor("f3b3a2")
                .setAuthor({ name: name, iconURL: icon })
                .setThumbnail(`${icon}`)
                .addFields({ name: 'Server count', value: `${client.guilds.cache.size}`, inline: true })
                .addFields({ name: 'Server members', value: `${servercount}`, inline: true })
                .addFields({ name: 'Latency', value: `${ping}`, inline: true })
                .addFields({ name: 'Uptime', value: `\`\`\`${uptime}\`\`\`` })
                .setFooter({ text: "Bot ID: 953885359668871238" })
                .setTimestamp()
        
                const row =  new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel('Support Server')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.gg/cYedAMBrfN'),

                    new ButtonBuilder()
                    .setLabel('Bot Invite')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.com/oauth2/authorize?client_id=953885359668871238')
                )

                await interaction.reply({ embeds: [embed], components: [row] });
        }

        switch (command) {
            case 'server':
                const { guild } = interaction;
                const { members } = guild;
                const { name, ownerId, createdTimestamp, memberCount } = guild;
                const icon = guild.iconURL() || 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg';
                const roles = guild.roles.cache.size;
                const emojis = guild.emojis.cache.size;
                const id = guild.id;
        
                let baseVerification = guild.verificationLevel;
        
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
        
        switch (command) {
            case 'user':
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
                .addFields({ name: "Joined Discord", value: `<t:${parseInt(user.createdAt / 1000)}:R>` })
                .setFooter({ text: `User ID: ${user.id}` })
                .setTimestamp()
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'serverlist':
    
                if (interaction.user.id != "1018686464000807003") return await interaction.reply({ content: "<:forbidden:1266829648344645694> Invalid permission", ephemeral: true });
                else {

                    await interaction.deferReply({ ephemeral: true });

                    async function sendMessage (message, key) {
                        const embed = new EmbedBuilder()
                        .setColor("Blurple")
                        .setDescription(message);

                        if (key) {
                            const button = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                .setStyle(ButtonStyle.Link)
                                .setURL(`https://sourceb.in/${key}`)
                                .setLabel(`Server list`)
                            );

                            await interaction.editReply({ embeds: [embed], components: [button] });
                        } else {
                            await interaction.editReply({ embeds: [embed] });
                        }
                    }

                    var content = `${client.user.username}'s server list:\n\n`;

                    client.guilds.cache.forEach(guild => {
                        guild.channels.cache.filter(x => x.type != "category").random().createInvite()
                            .then(inv => content += `Server: ${guild.name}, ID: ${guild.id}, Invite: ${inv.url}\n`)
                      });                

                    // var guilds = await client.guilds.fetch()
                    // await guilds.forEach(async guild => {
                    //     content += `Server: ${guild.name}, ID: ${guild.id}\n`;
                    // });

                    var listBin = await fetch('https://sourceb.in/api/bins', {
                        method: 'POST',
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            files: [
                                {
                                    content: content,
                                },
                            ],
                        }),
                    });

                    if (listBin.ok) {
                        var { key } = await listBin.json();
                        await sendMessage(`<:check:1266815137587920937> **Server list:**\n\nI am currently in \`${client.guilds.cache.size}\` server(s)`, key);
                    } else {
                        await sendMessage(`<:exclamation:1266823414828765246> Failed to load server list`);
                    }
                }
        }
    }
}