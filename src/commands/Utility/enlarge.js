const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { default: axios } = require('axios');
 
module.exports = {
    data: new SlashCommandBuilder()
    .setName('enlarge')
    .setDescription('Enlarge a custom emoji')
    .addStringOption(option => option.setName('emoji').setDescription('Custom emoji you want to enlarge').setRequired(true)),
    async execute(interaction) {
 
        let emoji = interaction.options.getString('emoji')?.trim();
 
        if (emoji.startsWith('<') && emoji.endsWith('>')) {
 
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
            return await interaction.reply({ content: '<:exclamation:1266823414828765246> Invalid emoji', ephemeral: true})
        }
 
        if (!emoji.startsWith("https")) {
            return await interaction.reply({ content: '<:exclamation:1266823414828765246> Invalid emoji', ephemeral: true})
        }
 
        const embed = new EmbedBuilder()
        .setColor('f3b3a2')
        .setDescription('<:check:1266815137587920937>  **The emoji has been enlarged!**')
        .setImage(emoji)
        .setTimestamp()
        .setFooter({ text: 'Emoji Enlarged', iconURL: interaction.user.displayAvatarURL()})
 
        await interaction.reply({ embeds: [embed] })
    }
}