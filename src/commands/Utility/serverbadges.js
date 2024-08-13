const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('server-badges')
    .setDescription('Get the number of users with each badge in this server'),
    async execute (interaction, client) {
        await interaction.deferReply({ ephemeral: true });
        let badges = [];
        let counts = [];
        const staff = '<:DiscordStaff:1272747135573692508>';
        const partner = '<:Partner:1272747208608972912>';
        const moderator = '<:CertifiedModerator:1272747120230666332>';
        const hypesquad = '<:Hypesquad:1272747158407217223>';
        const bravery = '<:Bravery:1272747089209720904>';
        const brilliance = '<:Brilliance:1272747098856620063>';
        const balance = '<:Balance:1272747078983876718>';
        const bughunter1 = '<:BugHunter1:1272747109887512626>';
        const bughunter2 = '<:BugHunter2:1272747176161710110>';
        const activedeveloper = '<:ActiveDeveloper:1272747067319521364>';
        const verifieddeveloper = '<:VerifiedBotDeveloper:1272747239617466531>';
        const earlysupporter = '<:EarlySupporter:1272747147929980978>';
        const verifiedbot = '<:VerifiedBot:1272747230520016897>';
        for (const member of interaction.guild.members.cache.values()) {
            const user = await client.users.fetch(member.user.id);
            badges = badges.concat(user.flags?.toArray());
        }
        for (const badge of badges) {
            if (counts[badge]) {
                counts[badge]++;
            } else {
                counts[badge] = 1;
            }
        }
        const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle(`Badges - ${interaction.guild.name}`)
        .setDescription(`${staff} ${counts['Staff'] || 0}\n${partner} ${counts['Partner'] || 0}\n${moderator} ${counts['CertifiedModerator'] || 0}\n${hypesquad} ${counts['Hypesquad'] || 0}\n${bravery} ${counts['HypeSquadOnlineHouse1'] || 0}\n${brilliance} ${counts['HypeSquadOnlineHouse2'] || 0}\n${balance} ${counts['HypeSquadOnlineHouse3'] || 0}\n${bughunter1} ${counts['BugHunterLevel1'] || 0}\n${bughunter2} ${counts['BugHunterLevel2'] || 0}\n${activedeveloper} ${counts['ActiveDeveloper'] || 0}\n${verifieddeveloper} ${counts['VerifiedDeveloper'] || 0}\n${earlysupporter} ${counts['PremiumEarlySupporter'] || 0}\n${verifiedbot} ${counts['VerifiedBot'] || 0}\n`)
        .setFooter({ text: `${interaction.guild.memberCount} members` })

        await interaction.editReply({ embeds: [embed] })
    }
}