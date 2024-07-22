const { SlashCommandBuilder } = require('@discordjs/builders');
const { default: axios } = require(`axios`);
const { PermissionsBitField, PermissionOverwriteManager } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('expression')
    .setDescription('Add an expression to this server')
    .addSubcommand(command =>
        command
        .setName('copy')
        .setDescription('Copy an emoji to this server')
        .addStringOption(option => option.setName('emoji').setDescription('The emoji you want to copy').setRequired(true))
        .addStringOption(option => option.setName('name').setDescription('The name of the emoji').setRequired(true)))
    .addSubcommand(command =>
        command
        .setName('emoji')
        .setDescription('Add an emoji to this server')
        .addAttachmentOption(option => option.setName('image').setDescription('The image you want to add as an emoji').setRequired(true))
        .addStringOption(option => option.setName('name').setDescription('What you would like to name this emoji').setRequired(true)))
    .addSubcommand(command =>
        command
        .setName('sticker')
        .setDescription('Add a sticker to this server')
        .addAttachmentOption(option => option.setName('image').setDescription('The image you want to add as a sticker').setRequired(true))
        .addStringOption(option => option.setName('name').setDescription('What you would like to name this sticker').setRequired(true))),
    
    async execute(interaction) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'copy':
                if (!interaction.member.permissions.has(PermissionsBitField.Flags.CreateGuildExpressions)) return await interaction.reply({ content: "⚠️ Invalid permission", ephemeral: true });

                let emoji = interaction.options.getString('emoji')?.trim();
                const name = interaction.options.getString('name');
        
                if (emoji.startsWith("<") && emoji.endsWith(">")) {
                    const id = emoji.match(/\d{15,}/g)[0];
        
                    const type = await axios.get(`https://cdn.discordapp.com/emojis/${id}.gif`)
                    .then(image => {
                        if (image) return "gif"
                        else return "png"
                    }).catch(err => {
                        return "png"
                    })
        
                    emoji = `https://cdn.discordapp.com/emojis/${id}.${type}?quality=lossless`
                }
        
                if (!emoji.startsWith("http")) {
                    return await interaction.reply({ content: "⚠️ Invalid emoji", ephemeral: true })
                }
        
                if (!emoji.startsWith("https")) {
                    return await interaction.reply({ content: "⚠️ Invalid emoji", ephemeral: true })
                }
        
                interaction.guild.emojis.create({ attachment: `${emoji}`, name: `${name}` })
                .then(emoji => {
                    return interaction.reply({ content: `✅ Added emoji: ${emoji}` });
                }).catch(err => {
                    interaction.reply({ content: "⚠️ Emoji limit reached", ephemeral: true })
                })
        }

        switch (command) {
            case 'emoji':
                if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuildExpressions)) return await interaction.reply({ content: "⚠️ Invalid permissions", ephemeral: true})

                    const upload = interaction.options.getAttachment('image');
                    const name = interaction.options.getString('name');
            
                    await interaction.reply({ content: "💭 Uploading emoji..." });
            
                    const emoji = await interaction.guild.emojis.create({ attachment: `${upload.attachment}`, name: `${name}` }).catch(err => {
                        setTimeout(() => {
                            console.log(err);
                            return interaction.editReply({ content: `${err.rawError.message}` });
                        }, 2000)
                    })
            
                    setTimeout(() => {
                        if (!emoji) return;
            
                        interaction.editReply({  content: `✅ Added emoji: ${emoji}` });
                    }, 3000)
        }

        switch (command) {
            case 'sticker':
                if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuildExpressions)) return await interaction.reply({ content: "⚠️ Invalid permissions", ephemeral: true})

                    const upload = interaction.options.getAttachment('image');
                    const name = interaction.options.getString('name');
            
                    await interaction.reply({ content: "💭 Uploading sticker..." });
            
                    const sticker = await interaction.guild.stickers.create({ file: `${upload.attachment}`, name: `${name}` }).catch(err => {
                        setTimeout(() => {
                            console.log(err);
                            return interaction.editReply({ content: `${err.rawError.message}` });
                        }, 2000)
                    })
                    
                    setTimeout(() => {
                        if (!sticker) return;
            
                        interaction.editReply({  content: `✅ Added sticker!` });
                    }, 3000)
        }
    }
}