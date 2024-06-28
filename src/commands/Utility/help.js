const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get a list of all available commands')
    .addSubcommand(command =>
        command
        .setName('moderation')
        .setDescription('Get a list of all moderation commands'))
    .addSubcommand(command =>
        command
        .setName('utility')
        .setDescription('Get a list of all utility commands'))
    .addSubcommand(command =>
        command
        .setName('emote')
        .setDescription('Get a list of all emote commands'))
    .addSubcommand(command =>
        command
        .setName('fun')
        .setDescription('Get a list of all fun commands')),
    async execute (interaction, client) {

        const command = interaction.options.getSubcommand();
        
        switch (command) {
            case 'moderation':
            
            const modembed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle("Moderation commands")
            .addFields({ name: "ban", value: "Ban a user from this server" })
            .addFields({ name: "unban", value: "Unban a user from this server" })
            .addFields({ name: "kick", value: "Kick a user from this server" })
            .addFields({ name: "timeout", value: "Timeout a user in this server" })
            .addFields({ name: "untimeout", value: "Remove timeout a user in this server" })
            .addFields({ name: "clear", value: "Clear messages from this channel" })
            .addFields({ name: "slowmode", value: "Enable slowmode in a channel" })
            .setFooter({ text: "These commands start with /mod" })
            .setTimestamp()

            await interaction.reply({ embeds: [modembed] })
        }

        switch (command) {
            case 'utility':
            
            const utilembed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("Utility commands")
            .addFields({ name: "/expression (copy, emoji, sticker)", value: "Add an expression to this server" })
            .addFields({ name: "/help (moderation, utility, emote)", value: "Get a list of all available commands" })
            .addFields({ name: "/info (bot, user, server)", value: "Get info about a user, the bot, or this server" })
            .addFields({ name: "/info serverlist", value: "Get a list of all the servers this bot is in (owner only)"})
            .addFields({ name: "/util ping", value: "Pong! Get the bots ping (ms)" })
            .addFields({ name: "/util status", value: "Set bot status (bot owner only)" })
            .setFooter({ text: "Utility commands" })
            .setTimestamp()

            await interaction.reply({ embeds: [utilembed] })
        }

        switch (command) {
            case 'fun':
            
            const funembed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle("Fun commands")
            .addFields({ name: "/roll (d4, d6, d8, d10, d12, d20, d100)", value: "Roll some dice" })
            .setFooter({ text: "Fun commands" })
            .setTimestamp()

            await interaction.reply({ embeds: [funembed] })
        }

        switch (command) {
            case 'emote':
            
            const useremoteembed = new EmbedBuilder()
            .setColor("Fuchsia")
            .setTitle("User emote commands")
            .addFields({ name: "bite", value: "Bite someone!" })
            .addFields({ name: "cuddle", value: "Cuddle someone!" })
            .addFields({ name: "holdhands", value: "Hold someones hand!" })
            .addFields({ name: "hug", value: "Give someone a hug!" })
            .addFields({ name: "kick", value: "Kick someone!" })
            .addFields({ name: "kill", value: "Kill someone!" })
            .addFields({ name: "kiss", value: "Give someone a kiss!" })
            .addFields({ name: "lick", value: "Lick someone!" })
            .addFields({ name: "pat", value: "Pat someone!" })
            .addFields({ name: "poke", value: "Poke someone!" })
            .addFields({ name: "slap", value: "Slap someone!" })
            .addFields({ name: "tickle", value: "Tickle someone!" })
            .setFooter({ text: "These commands start with /useremote" })
            .setTimestamp()
    
            const selfemoteembed = new EmbedBuilder()
            .setColor("Fuchsia")
            .setTitle("Self emote commands")
            .addFields({ name: "cry", value: "Sends a crying gif" })
            .addFields({ name: "dance", value: "Sends dancing gif!" })
            .addFields({ name: "eat", value: "Sends a an eating gif!" })
            .addFields({ name: "giggle", value: "Sends a giggling gif!" })
            .addFields({ name: "happy", value: "Sends a happy gif!" })
            .addFields({ name: "mad", value: "Sends a mad gif!" })
            .addFields({ name: "plead", value: "Sends a pleading gif!" })
            .addFields({ name: "pout", value: "Sends a pouting gif!" })
            .addFields({ name: "sad", value: "Sends a sad gif" })
            .addFields({ name: "scared", value: "Sends a scared gif" })
            .addFields({ name: "shy", value: "Sends a shy gif!" })
            .addFields({ name: "sigh", value: "Sends a sighing gif" })
            .addFields({ name: "sleep", value: "Sends a sleeping gif!" })
            .addFields({ name: "spin", value: "Sends a spinning gif!" })
            .addFields({ name: "suicide", value: "Commit suicide" })
            .addFields({ name: "tired", value: "Sends a tired gif!" })
            .addFields({ name: "wave", value: "Sends a waving gif!" })
            .setFooter({ text: "These commands start with /selfemote" })
            .setTimestamp()

            const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('page1')
                .setLabel('User emotes')
                .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                .setCustomId('page2')
                .setLabel('Self emotes')
                .setStyle(ButtonStyle.Success),
            )

            const message = await interaction.reply({ embeds: [useremoteembed], components: [button] });
            const collector = await message.createMessageComponentCollector();

            collector.on('collect', async i => {

                if (i.customId === 'page1') {
    
                    if (i.user.id !== interaction.user.id) {
                        return await i.reply({ content: 'You cannot use these buttons', ephemeral: true })
                    }
                    await i.update({ embeds: [useremoteembed], components: [button] })
                }
    
                if (i.customId === 'page2') {
    
                    if (i.user.id !== interaction.user.id) {
                        return await i.reply({ content: 'You cannot use these buttons', ephemeral: true })
                    }
                    await i.update({ embeds: [selfemoteembed], components: [button] })
                }
            })
        }
    }
}