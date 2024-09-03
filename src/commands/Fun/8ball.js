const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Ask the 8ball a question")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("What you would like to ask the 8ball")
        .setRequired(true),
    ),

  async execute(interaction) {
    const { options } = interaction;

    const question = options.getString("question");
    const answers = [
      "As I see it, yes.",
      "Don't count on it.",
      "It is certian.",
      "It is decidedly so.",
      "Most likely.",
      "My reply is no.",
      "My sources say no.",
      "No.",
      "Outlook good.",
      "Outlook not so good.",
      "Signs point to yes.",
      "Very doubtful.",
      "Without a doubt.",
      "Yes definitely.",
      "Yes.",
      "You may rely on it.",
    ];
    const answer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new EmbedBuilder()
      .setColor("f3b3a2")
      .setAuthor({
        name: `${interaction.member.displayName} used the 8ball 🎱`,
        iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
      })
      .addFields({ name: "Question", value: `${question}`, inline: true })
      .addFields({ name: "Answer", value: `${answer}`, inline: true })
      .setFooter({ text: "8ball" })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
