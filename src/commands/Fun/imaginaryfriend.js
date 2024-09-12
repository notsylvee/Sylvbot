const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("imaginaryfriend")
    .setDescription("Get a random Imaginary Friend voiceline from Roblox: Pressure"),

  async execute(interaction) {
    const { options } = interaction;

    const question = options.getString("question");
    const answers = [
        "H-hello.",
        "Hey.",
        "I think there's someone else here...",
        "Where'd it go?",
        "I hear music..",
        "Hey!",
        "Hello.",
        "Do you hear them?",
        "What's that noise?!",
        "How are you doing?",
        "What's that sound?",
        "Come closer..",
        "Hi there!",
        "Can you hear me?",
        "It's crawling all over you...",
        "What are you doing?",
        "Where are you going?",
        "Hehe.",
        "I love you.",
        "The walls are painted with blood.",
        "There's something beneath your skin!",
        "Behind you.",
        "Can you hear me?",
        "We are not alone in this room."
    ];
    const answer = answers[Math.floor(Math.random() * answers.length)];

    await interaction.reply({ content: `${answer}` });
  },
};
