const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get a list of all available commands and replies')
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
        .setDescription('Get a list of all fun commands'))
    .addSubcommand(command =>
        command
        .setName('replies')
        .setDescription('Get a list of all text replies')),
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
            .addFields({ name: "lock", value: "Lock a channel" })
            .addFields({ name: "unlock", value: "Unlock a channel" })
            .setFooter({ text: "Moderation commands || These commands start with /mod" })
            .setTimestamp()

            await interaction.reply({ embeds: [modembed] })
        }

        switch (command) {
            case 'utility':
            
            const utilembed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("Utility commands")
            .addFields({ name: "/expression (copy, emoji, sticker)", value: "Add an expression to this server" })
            .addFields({ name: "/help (moderation, utility, emote, fun)", value: "Get a list of all available commands" })
            .addFields({ name: "/info (bot, user, server)", value: "Get info about a user, the bot, or this server" })
            .addFields({ name: "/info serverlist", value: "Get a list of all the servers this bot is in (owner only)"})
            .addFields({ name: "/util ping", value: "Pong! Get the bots ping (ms)" })
            .addFields({ name: "/util status", value: "Set bot status (bot owner only)" })
            .addFields({ name: "/util leaveserver", value: "Make this bot leave a server (bot owner only)" })
            .setFooter({ text: "Utility commands" })
            .setTimestamp()

            await interaction.reply({ embeds: [utilembed] })
        }

        switch (command) {
            case 'fun':
            
            const funembed = new EmbedBuilder()
            .setColor("Orange")
            .setTitle("Fun commands")
            .addFields({ name: "/8ball", value: "Ask the 8ball a question" })
            .addFields({ name: "/random", value: "Get a random character from a specified game" })
            .addFields({ name: "/roll", value: "Roll some dice" })
            .setFooter({ text: "Fun commands" })
            .setTimestamp()

            await interaction.reply({ embeds: [funembed] })
        }

        switch (command) {
            case 'emote':
            
            const useremoteembed = new EmbedBuilder()
            .setColor("Fuchsia")
            .setTitle("User emotes")
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
            .addFields({ name: "spit", value: "Spit on someone!" })
            .addFields({ name: "tickle", value: "Tickle someone!" })
            .setFooter({ text: "User emotes || These commands start with /useremote" })
            .setTimestamp()
    
            const selfemoteembed = new EmbedBuilder()
            .setColor("Fuchsia")
            .setTitle("Self emotes")
            .addFields({ name: "blush", value: "Sends a blushing gif!" })
            .addFields({ name: "cry", value: "Sends a crying gif" })
            .addFields({ name: "dance", value: "Sends dancing gif!" })
            .addFields({ name: "drool", value: "Sends a drooling gif!" })
            .addFields({ name: "eat", value: "Sends a an eating gif!" })
            .addFields({ name: "explode", value: "Sends an exploding gif!" })
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
            .setFooter({ text: "Self emotes || These commands start with /selfemote" })
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

        switch (command) {
            case 'replies':
            
            const repliesembed = new EmbedBuilder()
            .setColor("Purple")
            .setTitle("Text replies")
            .addFields({ name: ":3", value: "> :3" })
            .addFields({ name: "aw man", value: "> creeper! aw man" })
            .addFields({ name: "cap", value: "> 🧢" })
            .addFields({ name: "crazy", value: "> crazy? i was crazy once" })
            .addFields({ name: "erm", value: "> what the (fish, flip, heck, scallop, sigma, skibidi, tuna, or what)" })
            .addFields({ name: "ligma", value: "> balls" })
            .addFields({ name: "real", value: "> chat, is this real?" })
            .addFields({ name: "type shit", value: "> shit" })
            .setFooter({ text: "Text replies" })
            .setTimestamp()

            const greetingsembed = new EmbedBuilder()
            .setColor("Purple")
            .setTitle("Greeting")
            .addFields({ name: "aloha", value: "Aloha (user)!" })
            .addFields({ name: "greetings", value: "Greetings (user)!" })
            .addFields({ name: "hai", value: "Hai (user)!" })
            .addFields({ name: "hallo", value: "Hallo (user)!" })
            .addFields({ name: "hello", value: "Hello (user)!" })
            .addFields({ name: "hewwo", value: "Hewwo (user)!" })
            .addFields({ name: "hey", value: "Hey (user)!" })
            .addFields({ name: "hi", value: "Hi (user)!" })
            .addFields({ name: "howdy", value: "Howdy (user)!" })
            .addFields({ name: "sup", value: "Sup (user)?" })
            .addFields({ name: "whats up", value: "Whats up (user)?" })
            .addFields({ name: "yo", value: "Yo (user)!" })
            .setFooter({ text: "Greetings || All replies are randomized" })
            .setTimestamp()

            const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('page1')
                .setLabel('Text Replies')
                .setStyle(ButtonStyle.Success),

                new ButtonBuilder()
                .setCustomId('page2')
                .setLabel('Greetings')
                .setStyle(ButtonStyle.Success),
            )

            const message = await interaction.reply({ embeds: [repliesembed], components: [button] });
            const collector = await message.createMessageComponentCollector();

            collector.on('collect', async i => {

                if (i.customId === 'page1') {
    
                    if (i.user.id !== interaction.user.id) {
                        return await i.reply({ content: 'You cannot use these buttons', ephemeral: true })
                    }
                    await i.update({ embeds: [repliesembed], components: [button] })
                }
    
                if (i.customId === 'page2') {
    
                    if (i.user.id !== interaction.user.id) {
                        return await i.reply({ content: 'You cannot use these buttons', ephemeral: true })
                    }
                    await i.update({ embeds: [greetingsembed], components: [button] })
                }
            })
        }
    }
}