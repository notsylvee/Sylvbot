const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, Embed } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("selfemote")
    .setDescription("Use an emote command")
    //24
    .addSubcommand((command) =>
      command.setName("cry").setDescription("Sends a crying gif"),
    )
    .addSubcommand((command) =>
      command.setName("dance").setDescription("Sends a dancing gif!"),
    )
    .addSubcommand((command) =>
      command.setName("eat").setDescription("Sends an eating gif!"),
    )
    .addSubcommand((command) =>
      command.setName("giggle").setDescription("Sends a giggling gif!"),
    )
    .addSubcommand((command) =>
      command.setName("happy").setDescription("Sends a happy gif!"),
    )
    .addSubcommand((command) =>
      command.setName("mad").setDescription("Sends a mad gif!"),
    )
    .addSubcommand((command) =>
      command.setName("plead").setDescription("Sends a pleading gif!"),
    )
    .addSubcommand((command) =>
      command.setName("pout").setDescription("Sends a pouting gif!"),
    )
    .addSubcommand((command) =>
      command.setName("sad").setDescription("Sends a sad gif"),
    )
    .addSubcommand((command) =>
      command.setName("shy").setDescription("Sends a shy gif!"),
    )
    .addSubcommand((command) =>
      command.setName("sleep").setDescription("Sends a sleep gif!"),
    )
    .addSubcommand((command) =>
      command.setName("spin").setDescription("Sends a spinning gif!"),
    )
    .addSubcommand((command) =>
      command.setName("die").setDescription("This kills you"),
    )
    .addSubcommand((command) =>
      command.setName("tired").setDescription("Sends a tired gif!"),
    )
    .addSubcommand((command) =>
      command.setName("wave").setDescription("Sends a waving gif!"),
    )
    .addSubcommand((command) =>
      command.setName("scared").setDescription("Sends a scared gif!"),
    )
    .addSubcommand((command) =>
      command.setName("sigh").setDescription("Sends a sighing gif!"),
    )
    .addSubcommand((command) =>
      command.setName("blush").setDescription("Sends a blushing gif!"),
    )
    .addSubcommand((command) =>
      command.setName("drool").setDescription("Sends a drooling gif!"),
    )
    .addSubcommand((command) =>
      command.setName("explode").setDescription("Sends an exploding gif!"),
    )
    .addSubcommand((command) =>
      command.setName("nod").setDescription("Sends an nodding gif!"),
    )
    .addSubcommand((command) =>
      command.setName("shakehead").setDescription("Sends an head shaking gif!"),
    )
    .addSubcommand((command) =>
      command.setName("thumbsup").setDescription("Sends an thumbs up gif!"),
    )
    .addSubcommand((command) =>
      command.setName("peace").setDescription("Sends an peace sign gif!"),
    ),

  async execute(interaction, client) {
    const command = interaction.options.getSubcommand();

    const emoteJsonData = await fs.readFile("data/selfemote.json", {
      encoding: "utf8",
    });
    
    const emotesMap = JSON.parse(emoteJsonData);
    const emotes = emotesMap[command];
    const emote = emotes.url[Math.floor(Math.random() * emotes.url.length)];

    const embed = new EmbedBuilder()
      .setColor("f3b3a2")
      .setAuthor({
        name: `${interaction.member.displayName} ${emotes.text}`,
        iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
      })
      .setImage(emote);

    await interaction.reply({ embeds: [embed] });
  },
};
