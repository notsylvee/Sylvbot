const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("random")
    .setDescription("Get a random character from a specified game")
    .addSubcommand((command) =>
      command
        .setName("valorant")
        .setDescription("Get a random Valorant agent"),
    )
    .addSubcommand((command) =>
      command
        .setName("hsr")
        .setDescription("Get a random Honkai: Star Rail character"),
    )
    .addSubcommand((command) =>
      command
        .setName("sv-marriageable")
        .setDescription(
          "Get a random marriageable Stardew Valley villager",
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("sv-nonmarriageable")
        .setDescription(
          "Get a random non-marriageable Stardew Valley villager",
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("sv-nongiftable")
        .setDescription(
          "Get a random non-giftable Stardew Valley villager",
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("wuwa")
        .setDescription("Get a random Wuthering Waves resonator"),
    )
    .addSubcommand((command) =>
      command
        .setName("zzz")
        .setDescription("Get a random Zenless Zone Zero agent"),
    )
    .addSubcommand((command) =>
      command
        .setName("r1999")
        .setDescription("Get a random Reverse: 1999 arcanist"),
    )
    .addSubcommand((command) =>
      command
        .setName("mc-mob")
        .setDescription("Get a random Minecraft mob"),
    )
    .addSubcommand((command) =>
      command
        .setName("overwatch")
        .setDescription("Get a random Overwatch hero"),
    )
    .addSubcommand((command) =>
      command
        .setName("tf2")
        .setDescription("Get a random Team Fortress 2 mercenary"),
    )
    .addSubcommand((command) =>
      command
        .setName("mc-user")
        .setDescription("Get a random Minecraft user"),
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
        `${game.emoji} ${interaction.member.displayName}, your random ${game.name} ${game.word} is...\n${character.name}`)
      .setImage(character.url)

    await interaction.reply({ embeds: [embed] });
  },
};
