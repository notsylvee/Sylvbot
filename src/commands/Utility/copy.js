const { SlashCommandBuilder } = require('@discordjs/builders');
const { default: axios } = require(`axios`);
const { EmbedBuilder, PermissionsBitField, PermissionOverwriteManager } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('copy')
    .setDescription('Copy an emoji to this server')
    .addStringOption(option => option.setName('emoji').setDescription('The emoji you want to copy').setRequired(true))
    .addStringOption(option => option.setName('name').setDescription('The name of the emoji').setRequired(true)),
    async execute(interaction) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.CreateGuildExpressions)) return await interaction.reply({ content: "Invalid permission", ephemeral: true });

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
            return await interaction.reply({ content: "Invalid emoji", ephemeral: true })
        }

        if (!emoji.startsWith("https")) {
            return await interaction.reply({ content: "Invalid emoji", ephemeral: true })
        }

        interaction.guild.emojis.create({ attachment: `${emoji}`, name: `${name}` })
        .then(emoji => {
            return interaction.reply({ content: `Added emoji: ${emoji}` });
        }).catch(err => {
            interaction.reply({ content: "Emoji limit reached", ephemeral: true })
        })
    }
}