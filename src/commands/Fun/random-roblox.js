const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("random-roblox")
    .setDescription("Get a random character from a specified game")
    .addSubcommand((command) =>
      command
        .setName("pressure-badge")
        .setDescription("Get a random Roblox: Pressure badge"),
    )
    .addSubcommand((command) =>
      command
        .setName("pressure-entity")
        .setDescription("Get a random Roblox: Pressure entity"),
    )
    .addSubcommand((command) =>
      command
        .setName("regretevator-badge")
        .setDescription("Get a random Roblox: Regretevator badge"),
    )
    .addSubcommand((command) =>
      command
        .setName("grace-badge")
        .setDescription("Get a random Roblox: Grace badge"),
    )
    .addSubcommand((command) =>
      command
        .setName("grace-entity")
        .setDescription("Get a random Roblox: Grace entity"),
    ),

  async execute(interaction) {
    const command = interaction.options.getSubcommand();

    const charactersJsonData = await fs.readFile("data/characters.json", {
      encoding: "utf8",
    });

    const gamesJsonData = await fs.readFile("data/games.json", {
      encoding: "utf8",
    });

    const charactersMap = JSON.parse(charactersJsonData);
    const gamesMap = JSON.parse(gamesJsonData);

    const characters = charactersMap[command];
    const character = characters[Math.floor(Math.random() * characters.length)];
    const game = gamesMap[command];

    const embed = new EmbedBuilder()
      .setColor("f3b3a2")
      .setDescription(
        `${game.emoji} ${interaction.member.displayName}, your ${game.name} ${game.word} is... ${character.name}`)
      .setImage(character.url)

      const badgeEmbed = new EmbedBuilder()
      .setColor("f3b3a2")
      .setTitle(
        `${game.emoji} ${interaction.member.displayName}, your ${game.name} ${game.word} is... ${character.name}`)
        .setDescription(`${character.description}`)
      .setThumbnail(character.url)

      if (command.endsWith("badge")) {
        interaction.reply({ embeds: [badgeEmbed] });
      } else {
        interaction.reply({ embeds: [embed] });
      }
  },
};
