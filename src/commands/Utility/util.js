const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed, PermissionsBitField, ChannelType, AutoModerationActionExecution } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('util')
    .setDescription('Run a utility command')
    .addSubcommand(command =>
        command
        .setName('ping')
        .setDescription('Pong! Get the bots ping'))
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
        .addStringOption(option => option.setName('server').setDescription('ID or name of the server you want the bot to leave').setRequired(true))),
        
    async execute (interaction, client) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'ping':
            const ping = `${Date.now() - interaction.createdTimestamp}`

            interaction.reply(`🏓 Pong! Client latency is ${ping}ms`)
        }

        switch (command) {
            case 'status':
            const { options } = interaction;
            const status = options.getString('status');
            const type = options.getString('type');
            const id = [
                "1018686464000807003",
                "431220802797568001"
            ]

            if (!id.includes(interaction.user.id)) return await interaction.reply({ content: "⚠️ Invalid permission", ephemeral: true });
            else {

            client.user.setActivity({
                name: status,
                type: type-1,
                url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
            })

            const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setDescription(`✅ The bots status has been set to \`${status}\``)

            await interaction.reply({ embeds: [embed], ephemeral: true });
            }
        }

        switch (command) {
            case 'leaveserver':
            if (interaction.user.id != "1018686464000807003") return await interaction.reply({ content: "⚠️ Invalid permission", ephemeral: true });
                else {
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
                        await sendMessage(`✅ I have succesfully left ${fetchedGuild.name}`).catch(err => {});
                    } else {
                        if (guilds.length > 1) {
                            await sendMessage(`⚠️ \`${guild}\` is the name of multiple servers I am in! Try using the servers ID instead`)
                        } else if (guild.length == 0) {
                            await sendMessage(`⚠️ I am not in any guilds matching \`${guild}\``)
                        } else {
                            fetchedGuild = await client.guild.fetch(guilds[0].id);
                            await fetchedGuild.leave();
                            await sendMessage(`✅ I have succesfully left ${fetchedGuild.name}`).catch(err => {});
                        }
                    }
                }
        }
    }
}