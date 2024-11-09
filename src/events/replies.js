const { EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.author.bot || !message.guild) return;
    if (message.channel.id === `1219415504884731994`) return;

    const ermmsg = [
      "sigma",
      "tuna",
      "flip",
      "scallop",
      "skibidi",
      "heck",
      "what",
      "fish",
    ];
    const ermresp = ermmsg[Math.floor(Math.random() * ermmsg.length)];

    const rare = Math.random() * 500;
    const logsChannel = await client.channels.fetch("1245963741460430858");

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") name = "mama";
    if (message.author.id === "529405805686947843") name = "grandma";
    if (message.author.id === "431220802797568001") name = "step parent";

    let lovemsg = "I love you too";
    if (message.author.id === "788222689126776832")
      lovemsg = "Jag älskar dig också";

    const crazyembed = new EmbedBuilder()
      .setDescription(
        `crazy? im starting to go crazy trapped in this place...`,
      )
      .addFields(
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

    const realembed = new EmbedBuilder()
      .setDescription(`chat, am i real..?`)
      .addFields(
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

    if (
      message.content.toLowerCase() === "cap"
    ) {
      message.channel.send("-# 🧢");
    }

    if (message.content.toLowerCase().includes(":3") && !message.content.toLowerCase().endsWith("?")) {
      message.channel.send("-# :3");
    }

    if (message.content.toLowerCase().includes("crazy") && !message.content.toLowerCase().endsWith("?")) {
      if (rare < 499) {
        message.channel.send("-# crazy? i was crazy once");
      } else {
        message.channel.send(
          "-# crazy? ***im starting to go crazy trapped in this place...***",
        );
        logsChannel.send({ embeds: [crazyembed] });
      }
    }

    if (message.content.toLowerCase().includes("cwazy") && !message.content.toLowerCase().endsWith("?")) {
      message.channel.send("-# cwazy? i was cwazy once");
    }

    if (message.content.toLowerCase().includes("cway cway") && !message.content.toLowerCase().endsWith("?")) {
      message.channel.send("-# cway cway? i was cway cway once");
    }

    if (message.content.toLowerCase().includes("cray cray") && !message.content.toLowerCase().endsWith("?")) {
      message.channel.send("-# cray cray? i was cray cray once");
    }

    if (
      message.content.toLowerCase() === "aw man"
    ) {
      message.channel.send("-# creeper! aw man");
    }

    if (
      message.content.toLowerCase() === "erm"
    ) {
      message.channel.send(`-# what the ${ermresp}`);
    }

    if (
      message.content.toLowerCase() === "ligma"
    ) {
      message.channel.send("-# balls");
    }

    if (
      message.content.toLowerCase() === "real"
    ) {
      if (rare < 499) {
        message.channel.send("-# chat, is this real?");
      } else {
        message.channel.send("-# chat, ***am i real..?***");
        logsChannel.send({ embeds: [realembed] });
      }
    }

    if (
      message.content.toLowerCase() === "type shit"
    ) {
      message.channel.send("-# shit");
    }

    if (
      message.content.toLowerCase().includes("i love you sylvbot") ||
      message.content.toLowerCase().includes("sylvbot i love you") ||
      message.content
        .toLowerCase()
        .includes("<@953885359668871238> i love you") ||
      message.content.toLowerCase().includes("i love you <@953885359668871238>")
    ) {
      message.channel.send(`${lovemsg} ${name}!`);
    }

    if (message.content.toLowerCase().includes("uwu") && !message.content.toLowerCase().endsWith("?")) {
      message.channel.send("-# uwu");
    }

    if (
      message.content.toLowerCase() === "nya"
    ) {
      message.channel.send("-# nya~!");
    }

    if (message.content.toLowerCase().includes("x3") && !message.content.toLowerCase().endsWith("?")) {
      message.channel.send("-# x3");
    }

    if (
      message.content.toLowerCase() === "rawr"
    ) {
      message.channel.send("-# x3");
    }

    if (
      message.content.toLowerCase().includes("thanks sylvbot") ||
      message.content.toLowerCase().includes("thank you sylvbot")
    ) {
      message.channel.send(`You're welcome ${name}!`)
    }
  },
};
