const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandIntegerOption,
  Component,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Get info about a user, the bot, or this server")
    .addSubcommand((command) =>
      command.setName("bot").setDescription("Sends info about this bot"),
    )
    .addSubcommand((command) =>
      command.setName("server").setDescription("Sends info about this server"),
    )
    .addSubcommand((command) =>
      command
        .setName("user")
        .setDescription("Send info about a user")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to get info about"),
        ),
    ),

  async execute(interaction, client) {
    const command = interaction.options.getSubcommand();

    switch (command) {
      case "bot":
        const name = "Sylvbot";
        const icon = `${client.user.displayAvatarURL()}`;
        let servercount = await client.guilds.cache.reduce(
          (a, b) => a + b.memberCount,
          0,
        );

        let totalSeconds = client.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        let ping = `${Date.now() - interaction.createdTimestamp}ms`;

        const embed = new EmbedBuilder()
          .setColor("f3b3a2")
          .setAuthor({ name: name, iconURL: icon })
          .setThumbnail(`${icon}`)
          .addFields({
            name: "Server count",
            value: `${client.guilds.cache.size}`,
            inline: true,
          })
          .addFields({
            name: "Server members",
            value: `${servercount}`,
            inline: true,
          })
          .addFields({ name: "Latency", value: `${ping}`, inline: true })
          .addFields({ name: "Uptime", value: `\`\`\`${uptime}\`\`\`` })
          .setFooter({ text: "Bot ID: 953885359668871238" })
          .setTimestamp();

        const row = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel("Support Server")
            .setStyle(ButtonStyle.Link)
            .setURL("https://discord.gg/PjfcwZrJYn"),

          new ButtonBuilder()
            .setLabel("Invite")
            .setStyle(ButtonStyle.Link)
            .setURL(
              "https://discord.com/oauth2/authorize?client_id=953885359668871238",
            ),
        );

        await interaction.reply({ embeds: [embed], components: [row] });
    }

    switch (command) {
      case "server":
        const { guild } = interaction;
        const { members } = guild;
        const { name, ownerId, createdTimestamp, memberCount } = guild;
        const icon =
          guild.iconURL() ||
          "https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg";
        const roles = guild.roles.cache.size;
        const emojis = guild.emojis.cache.size;
        const id = guild.id;

        let baseVerification = guild.verificationLevel;

        if (baseVerification == 0) baseVerification = "None";
        if (baseVerification == 1) baseVerification = "Low";
        if (baseVerification == 2) baseVerification = "Medium";
        if (baseVerification == 3) baseVerification = "High";
        if (baseVerification == 4) baseVerification = "Highest";

        const embed = new EmbedBuilder()
          .setColor("f3b3a2")
          .setAuthor({ name: name, iconURL: icon })
          .setThumbnail(icon)
          .addFields({ name: "Name", value: `${name}`, inline: false })
          .addFields({
            name: "Date created",
            value: `<t:${parseInt(createdTimestamp / 1000)}:R>`,
            inline: true,
          })
          .addFields({
            name: "Server owner",
            value: `<@${ownerId}>`,
            inline: true,
          })
          .addFields({ name: "Members", value: `${memberCount}`, inline: true })
          .addFields({ name: "Roles", value: `${roles}`, inline: true })
          .addFields({ name: "Emojis", value: `${emojis}`, inline: true })
          .addFields({
            name: "Server boosts",
            value: `${guild.premiumSubscriptionCount}`,
            inline: true,
          })
          .addFields({
            name: "Verification level",
            value: `${baseVerification}`,
            inline: true,
          })
          .setFooter({ text: `Server ID: ${id}` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "user":
        const user = interaction.options.getUser("user") || interaction.user;
        const member = await interaction.guild.members.fetch(user.id);
        const icon = user.displayAvatarURL();
        const tag = user.tag;

        const embed = new EmbedBuilder()
          .setColor("f3b3a2")
          .setAuthor({ name: tag, iconURL: icon })
          .setThumbnail(icon)
          .addFields({ name: "Member", value: `${user}`, inline: false })
          .addFields({
            name: "Roles",
            value: `${member.roles.cache.map((r) => r).join(" ")}`,
            inline: false,
          })
          .addFields({
            name: "Joined server",
            value: `<t:${parseInt(member.joinedAt / 1000)}:R>`,
          })
          .addFields({
            name: "Joined Discord",
            value: `<t:${parseInt(user.createdAt / 1000)}:R>`,
          })
          .setFooter({ text: `User ID: ${user.id}` })
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
  },
};
