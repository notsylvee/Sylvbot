const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, Embed } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("useremote")
    .setDescription("Use an emote command")
    //15
    .addSubcommand((command) =>
      command
        .setName("bite")
        .setDescription("Bite someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to bite")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("cuddle")
        .setDescription("Cuddle someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to cuddle")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("holdhands")
        .setDescription("Hold someones hand!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Whos hand you want to hold")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("hug")
        .setDescription("Give someone a hug!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to hug")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("kick")
        .setDescription("Kick someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to kick")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("kill")
        .setDescription("Kill someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to kill")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("kiss")
        .setDescription("Give someone a kiss!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to kiss")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("lick")
        .setDescription("Lick someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to lick")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("pat")
        .setDescription("Pat someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to pat")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("poke")
        .setDescription("Poke someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to poke")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("slap")
        .setDescription("Slap someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to slap")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("tickle")
        .setDescription("Tickle someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to tickle")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("spit")
        .setDescription("Spit on someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to spit on")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("tuck-in")
        .setDescription("Tuck someone in!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to tuck in")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("throw")
        .setDescription("Throw someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to throw")
            .setRequired(true),
        ),
    ),

  async execute(interaction, client) {
    const command = interaction.options.getSubcommand();

    const user = interaction.options.getUser("user");
    const member = await interaction.guild.members.fetch(user.id);
    const ID = user.id;

    if (interaction.member.id === ID)
      return await interaction.reply({
        content: "<:forbidden:1266829648344645694> You cannot use this command on yourself",
        ephemeral: true,
      });

    const emoteJsonData = await fs.readFile("data/useremote.json", {
      encoding: "utf8",
    });
    
    const emotesMap = JSON.parse(emoteJsonData);
    const emotes = emotesMap[command];
    const emote = emotes.url[Math.floor(Math.random() * emotes.url.length)];

    const embed = new EmbedBuilder()
      .setColor("f3b3a2")
      .setAuthor({
        name: `${interaction.member.displayName} ${emotes.text} ${member.displayName}!`,
        iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
      })
      .setImage(emote);

    await interaction.reply({ embeds: [embed] });
  },
};
