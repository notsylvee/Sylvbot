const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get a list of all available commands'),
    async execute (interaction, client) {

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle("Moderation commands")
        .addFields({ name: "/ban", value: "Ban a user from this server" })
        .addFields({ name: "/unban", value: "Unban a user from this server" })
        .addFields({ name: "/kickuser", value: "Kick a user from this server" })
        .addFields({ name: "/clear", value: "Clear messages from this channel" })
        .addFields({ name: "/slowmode", value: "Enable slowmode in a channel" })
        .setFooter({ text: "Moderation commands" })
        .setTimestamp()

        const embed2 = new EmbedBuilder()
        .setColor("Green")
        .setTitle("Utility commands")
        .addFields({ name: "/copy", value: "Copy an emoji to this server" })
        .addFields({ name: "/help", value: "Get a list of all available commands" })
        .addFields({ name: "/ping", value: "Pong!" })
        .addFields({ name: "/status", value: "Set bot status (bot owner only)" })
        .setFooter({ text: "Utility commands" })
        .setTimestamp()

        const embed3 = new EmbedBuilder()
        .setColor("Fuchsia")
        .setTitle("Emote commands")
        .addFields({ name: "/bite", value: "Bite someone!" })
        .addFields({ name: "/cry", value: "Sends a crying gif" })
        .addFields({ name: "/cuddle", value: "Cuddle someone!" })
        .addFields({ name: "/dance", value: "Sends dancing gif!" })
        .addFields({ name: "/eat", value: "Sends a an eating gif!" })
        .addFields({ name: "/giggle", value: "Sends a giggling gif!" })
        .addFields({ name: "/happy", value: "Sends a happy gif!" })
        .addFields({ name: "/hug", value: "Give someone a hug!" })
        .addFields({ name: "/kick", value: "Kick someone!" })
        .addFields({ name: "/kill", value: "Kill someone!" })
        .addFields({ name: "/kiss", value: "Give someone a kiss!" })
        .addFields({ name: "/lick", value: "Lick someone!" })
        .addFields({ name: "/pat", value: "Pat someone!" })
        .addFields({ name: "/plead", value: "Sends a pleading gif!" })
        .addFields({ name: "/poke", value: "Poke someone!" })
        .addFields({ name: "/pout", value: "Sends a pouting gif!" })
        .addFields({ name: "/sad", value: "Sends a sad gif" })
        .addFields({ name: "/shy", value: "Sends a shy gif!" })
        .addFields({ name: "/slap", value: "Slap someone!" })
        .addFields({ name: "/suicide", value: "Commit suicide" })
        .addFields({ name: "/tickle", value: "Tickle someone!" })
        .addFields({ name: "/tired", value: "Sends a tired gif!" })
        .setFooter({ text: "Emote commands" })
        .setTimestamp()

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('page1')
            .setLabel('Moderation')
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId('page2')
            .setLabel('Utility')
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId('page3')
            .setLabel('Emotes')
            .setStyle(ButtonStyle.Success),
        )

        const message = await interaction.reply({ embeds: [embed], components: [button] });
        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {

            if (i.customId === 'page1') {

                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: 'You cannot use these buttons', ephemeral: true })
                }
                await i.update({ embeds: [embed], components: [button] })
            }

            if (i.customId === 'page2') {

                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: 'You cannot use these buttons', ephemeral: true })
                }
                await i.update({ embeds: [embed2], components: [button] })
            }

            if (i.customId === 'page3') {

                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: 'You cannot use these buttons', ephemeral: true })
                }
                await i.update({ embeds: [embed3], components: [button] })
            }
        })
    }
}