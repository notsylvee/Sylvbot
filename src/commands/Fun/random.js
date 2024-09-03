const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("Get a random character from a specified game")
    .addSubcommand((command) =>
      command
        .setName("valorant")
        .setDescription("Get a randomly chosen Valorant agent"),
    )
    .addSubcommand((command) =>
      command
        .setName("hsr")
        .setDescription("Get a randomly chosen Honkai: Star Rail character"),
    )
    .addSubcommand((command) =>
      command
        .setName("sv-marriageable")
        .setDescription(
          "Get a randomly chosen marriageable Stardew Valley NPC",
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("sv-nonmarriageable")
        .setDescription(
          "Get a randomly chosen non-marriageable Stardew Valley NPC",
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("sv-nongiftable")
        .setDescription(
          "Get a randomly chosen non-giftable Stardew Valley NPC",
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("wuwa")
        .setDescription("Get a randomly chosen Wuthering Waves resonator"),
    )
    .addSubcommand((command) =>
      command
        .setName("zzz")
        .setDescription("Get a randomly chosen Zenless Zone Zero agent"),
    )
    .addSubcommand((command) =>
      command
        .setName("r1999")
        .setDescription("Get a randomly chosen Reverse: 1999 arcanist"),
    ),

  async execute(interaction) {
    const command = interaction.options.getSubcommand();

    const charactersJsonData = await fs.readFile("characters.json", {
      encoding: "utf8",
    });

    const gamesJsonData = await fs.readFile("games.json", {
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
        `${game.emoji} ${interaction.member.displayName}, your random ${game.name} ${game.word} is... ${character.name}`,
      )
      .setImage(character.url);

    await interaction.reply({ embeds: [embed] });
  },
};
