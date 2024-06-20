const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('emoji')
    .setDescription('Add an emoji to this server')
    .addAttachmentOption(option => option.setName('image').setDescription('The image you want to add as an emoji').setRequired(true))
    .addStringOption(option => option.setName('name').setDescription('What you would like to name this emoji').setRequired(true)),
    async execute (interaction) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuildExpressions)) return await interaction.reply({ content: "Invalid permissions", ephemeral: true})

        const upload = interaction.options.getAttachment('image');
        const name = interaction.options.getString('name');

        await interaction.reply({ content: "Uploading emoji..." });

        const emoji = await interaction.guild.emojis.create({ attachment: `${upload.attachment}`, name: `${name}` }).catch(err => {
            setTimeout(() => {
                console.log(err);
                return interaction.editReply({ content: `${err.rawError.message}` });
            }, 2000)
        })

        setTimeout(() => {
            if (!emoji) return;

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`Added emoji: ${emoji}`)

            interaction.editReply({  content: '', embeds: [embed] });
        }, 3000)
    }
}