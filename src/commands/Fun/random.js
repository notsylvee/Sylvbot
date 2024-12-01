const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
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
    )
    .addSubcommand((command) =>
      command
        .setName("nte")
        .setDescription("Get a random Neverness to Everness character"),
    )
    .addSubcommand((command) =>
      command
        .setName("hi3")
        .setDescription("Get a random Honkai Impact 3rd valkyrie"),
    )
    .addSubcommand((command) =>
      command
        .setName("genshin")
        .setDescription("Get a random Genshin Impact character"),
    )
    .addSubcommand((command) =>
      command
        .setName("strinova")
        .setDescription("Get a random Strinova character"),
    )
    .addSubcommand((command) =>
      command
        .setName("league")
        .setDescription("Get a random League of Legends champion"),
    )
    .addSubcommand((command) =>
      command
        .setName("astral-party")
        .setDescription("!SLIGHT NSFW/LEWD! Get a random Astral Party character"),
    )
    .addSubcommand((command) =>
      command
        .setName("mc-plant")
        .setDescription("Get a random Minectaft potted plant"),
    )
    .addSubcommand((command) =>
      command
        .setName("project-sekai")
        .setDescription("Get a random Project Sekai character"),
    )
    .addSubcommand((command) =>
      command
        .setName("pressure-badge")
        .setDescription("Get a random Roblox: Pressure badge"),
    )
    .addSubcommand((command) =>
      command
        .setName("pressure-entity")
        .setDescription("Get a random Roblox: Pressure entity"),
    ),

  async execute(interaction) {
    const command = interaction.options.getSubcommand();

    if (interaction.guild.id === "1100254675913166898" && command === "astralparty") return await interaction.reply({ content: "<:forbidden:1266829648344645694> You cannot use this command in this server", ephemeral: true });

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

    let footer = character.footer
    if (footer === undefined) footer = ' '

    const embed = new EmbedBuilder()
      .setColor("f3b3a2")
      .setDescription(
        `${game.emoji} ${interaction.member.displayName}, your ${game.name} ${game.word} is... ${character.name}`)
      .setImage(character.url)
      .setFooter({ text: `${footer}`})

      const pressureembed = new EmbedBuilder()
      .setColor("f3b3a2")
      .setTitle(
        `${game.emoji} ${interaction.member.displayName}, your ${game.name} ${game.word} is... ${character.name}`)
        .setDescription(`${character.description}`)
      .setThumbnail(character.url)

      if (command === "pressure-badge") {
        interaction.reply({ embeds: [pressureembed] });
      } else {
        interaction.reply({ embeds: [embed] });
      }
  },
};
