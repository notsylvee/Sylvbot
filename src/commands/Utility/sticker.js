const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sticker')
    .setDescription('Add a sticker to this server')
    .addAttachmentOption(option => option.setName('image').setDescription('The image you want to add as a sticker').setRequired(true))
    .addStringOption(option => option.setName('name').setDescription('What you would like to name this sticker').setRequired(true)),
    async execute (interaction) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuildExpressions)) return await interaction.reply({ content: "Invalid permissions", ephemeral: true})

        const upload = interaction.options.getAttachment('image');
        const name = interaction.options.getString('name');

        await interaction.reply({ content: "Uploading sticker..." });

        const sticker = await interaction.guild.stickers.create({ file: `${upload.attachment}`, name: `${name}` }).catch(err => {
            setTimeout(() => {
                console.log(err);
                return interaction.editReply({ content: `${err.rawError.message}` });
            }, 2000)
        })
        
        setTimeout(() => {
            if (!sticker) return;

            interaction.editReply({  content: `Added sticker! ${sticker}` });
        }, 3000)
    }
}