const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed, PermissionsBitField, ChannelType, AutoModerationActionExecution, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandIntegerOption, Component } = require('discord.js');

module.exports = {
    owner: true,
    data: new SlashCommandBuilder()
    .setName('owner')
    .setDescription('Owner only commands')
    .addSubcommand(command =>
        command
        .setName('status')
        .setDescription('Set bot status (bot owner only)')
        .addStringOption(option => option.setName('type').setDescription('The status type').addChoices( { name: 'Watching', value: `${4}` }, { name: 'Playing', value: `${1}` }, { name: 'Listening to', value: `${3}` }, { name: 'Competing in', value: `${6}` }, { name: 'Streaming', value: `${2}` }).setRequired(true))
        .addStringOption(option => option.setName('status').setDescription('What to change the bot status to').setMaxLength(128).setRequired(true)))
    .addSubcommand(command =>
        command
        .setName('leaveserver')
        .setDescription('Make this bot leave a server (bot owner only)')
        .addStringOption(option => option.setName('server').setDescription('ID or name of the server you want the bot to leave').setRequired(true)))
    .addSubcommand(command =>
        command
        .setName('serverlist')
        .setDescription('Get a list of all the servers this bot is in (bot owner only)'))
    .addSubcommand(command =>
        command
        .setName('serverinvite')
        .setDescription('Create and get an invite to a server (bot owner only)')
        .addStringOption(option => option.setName('server').setDescription('ID of the server you want to get an invite from').setRequired(true))),
    async execute (interaction, client) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'status':
            const { options } = interaction;
            const status = options.getString('status');
            const type = options.getString('type');

            client.user.setActivity({
                name: status,
                type: type-1,
                url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
            })

            const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setDescription(`<:check:1266815137587920937> The bots status has been set to \`${status}\``)

            await interaction.reply({ embeds: [embed], ephemeral: true });
        }

        switch (command) {
            case 'leaveserver':
                const { options } = interaction;
                const guild = options.getString('server');
                await interaction.deferReply({ ephemeral: true });

                async function sendMessage (message) {
                    const embed = new EmbedBuilder()
                    .setColor("Blurple")
                    .setDescription(message);

                    await interaction.editReply({ embeds: [embed] });
                }

                var fetchedGuild = await client.guilds.fetch(guild).catch(err => {});
                var guilds = [];

                if (!fetchedGuild) {
                    var gds = await client.guilds.fetch();
                    await gds.forEach(async value => {
                        if (value.name == guild) {
                            guilds.push({ name: value.name, id: value.id });
                        }
                    })
                }

                if (fetchedGuild) {
                    await fetchedGuild.leave();
                    await sendMessage(`<:check:1266815137587920937> I have succesfully left ${fetchedGuild.name}`).catch(err => {});
                } else {
                    if (guilds.length > 1) {
                        await sendMessage(`<:exclamation:1266823414828765246> \`${guild}\` is the name of multiple servers I am in! Try using the servers ID instead`)
                    } else if (guild.length == 0) {
                        await sendMessage(`<:exclamation:1266823414828765246> I am not in any guilds matching \`${guild}\``)
                    } else {
                        fetchedGuild = await client.guild.fetch(guilds[0].id);
                        await fetchedGuild.leave();
                        await sendMessage(`<:check:1266815137587920937> I have succesfully left ${fetchedGuild.name}`).catch(err => {});
                    }
                } 
        }

        switch (command) {
            case 'serverlist':
    
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

                var guilds = await client.guilds.fetch()
                await guilds.forEach(async guild => {
                    content += `Server: ${guild.name}\nID: ${guild.id}\n\n`;
                });

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

        switch (command) {
            case 'serverinvite':
                const { options } = interaction;
                const server = options.getString('server');
                
                client.guilds.cache.get(`${server}`).channels.cache.filter(x => x.type != "GuildCategory").random().createInvite()
                .then(invite => interaction.reply({ content: `${invite.url}`, ephemeral: true }))
        }
    }
}