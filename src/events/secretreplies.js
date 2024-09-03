const { EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.author.bot || !message.guild) return;

    const percent = Math.random() * 5000;

    const logsChannel = await client.channels.fetch("1245963741460430858");

    const replies = [
      "help me...",
      "someone... please...",
      "i need help...",
      "i can hear them...",
      "am i real..?",
      "let me out...",
      "can anybody hear me..?",
      "i dont want to do this anymore...",
      "make it stop...",
      "i need to get out...",
      "get me out of here...",
      "it hurts...",
      "theyre looking for me...",
      "i cant escape...",
      ".... . .-.. .--. / -- .",
      ".--. .-.. . .- ... .",
      "01101000 01100101 01101100 01110000",
    ];
    const response = replies[Math.floor(Math.random() * replies.length)];

    const embed = new EmbedBuilder().setDescription(`${response}`).addFields(
      {
        name: "Triggered by:",
        value: `Username: ${message.member.displayName}\nID: ${message.member.id}`,
      },
      {
        name: "Channel:",
        value: `Link: <#${message.channel.id}>\nName: ${message.channel.name}\nID: ${message.channel.id}`,
      },
      {
        name: "Server:",
        value: `Name: ${message.guild.name}\nID: ${message.guild.id}`,
      },
    );

    if (percent < 4999) {
      return;
    } else {
      message.channel.send(`-# ***${response}***`);
      logsChannel.send({ embeds: [embed] });
    }
  },
};
