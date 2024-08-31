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

    let lovename = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") lovename = "mama";
    if (message.author.id === "529405805686947843") lovename = "grandma";
    if (message.author.id === "431220802797568001") lovename = "step parent";

    let lovemsg = "I love you too";
    if (message.author.id === "788222689126776832")
      lovemsg = "Jag älskar dig också";

    const crazyembed = new EmbedBuilder()
      .setDescription(
        `crazy? ***im starting to go crazy trapped in this place...***`,
      )
      .addFields(
        {
          name: "Triggered by:",
          value: `${message.member.displayName}\n${message.member.id}`,
          inline: true,
        },
        {
          name: "Channel:",
          value: `<#${message.channel.id}>\n${message.channel.name}\n${message.channel.id}`,
          inline: true,
        },
        {
          name: "Server:",
          value: `${message.guild.name}\n${message.guild.id}`,
          inline: true,
        },
      );

    const realembed = new EmbedBuilder()
      .setDescription(`chat, ***am i real..?***`)
      .addFields(
        {
          name: "Triggered by:",
          value: `${message.member.displayName}\n${message.member.id}`,
          inline: true,
        },
        {
          name: "Channel:",
          value: `<#${message.channel.id}>\n${message.channel.name}\n${message.channel.id}`,
          inline: true,
        },
        {
          name: "Server:",
          value: `${message.guild.name}\n${message.guild.id}`,
          inline: true,
        },
      );

    if (
      message.content.toLowerCase().startsWith("cap") &&
      message.content.toLowerCase().endsWith("cap")
    ) {
      message.channel.send("-# 🧢");
    }

    if (message.content.toLowerCase().includes(":3")) {
      message.channel.send("-# :3");
    }

    if (message.content.toLowerCase().includes("crazy")) {
      if (rare < 499) {
        message.channel.send("-# crazy? i was crazy once");
      } else {
        message.channel.send(
          "-# crazy? ***im starting to go crazy trapped in this place...***",
        );
        logsChannel.send({ embeds: [crazyembed] });
      }
    }

    if (message.content.toLowerCase().includes("cwazy")) {
      message.channel.send("-# cwazy? i was cwazy once");
    }

    if (message.content.toLowerCase().includes("cway cway")) {
      message.channel.send("-# cway cway? i was cway cway once");
    }

    if (
      message.content.toLowerCase().startsWith("aw man") &&
      message.content.toLowerCase().endsWith("aw man")
    ) {
      message.channel.send("-# creeper! aw man");
    }

    if (
      message.content.toLowerCase().startsWith("erm") &&
      message.content.toLowerCase().endsWith("m")
    ) {
      message.channel.send(`-# what the ${ermresp}`);
    }

    if (
      message.content.toLowerCase().startsWith("ligma") &&
      message.content.toLowerCase().endsWith("ligma")
    ) {
      message.channel.send("-# balls");
    }

    if (
      message.content.toLowerCase().startsWith("real") &&
      message.content.toLowerCase().endsWith("l")
    ) {
      if (rare < 499) {
        message.channel.send("-# chat, is this real?");
      } else {
        message.channel.send("-# chat, ***am i real..?***");
        logsChannel.send({ embeds: [realembed] });
      }
    }

    if (
      message.content.toLowerCase().startsWith("type shit") &&
      message.content.toLowerCase().endsWith("type shit")
    ) {
      message.channel.send("-# shit");
    }

    if (
      message.content.toLowerCase().includes("i love you sylvbot") ||
      message.content.toLowerCase().includes("sylvbot i love you") ||
      message.content.toLowerCase().includes("<@953885359668871238> i love you") ||
      message.content.toLowerCase().includes("i love you <@953885359668871238>")
    ) {
      message.channel.send(`${lovemsg} ${lovename}!`);
    }

    if (message.content.toLowerCase().includes("uwu")) {
      message.channel.send("-# uwu");
    }

    if (
      message.content.toLowerCase().startsWith("nya") &&
      message.content.toLowerCase().endsWith("nya")
    ) {
      message.channel.send("-# nya~!");
    }

    if (message.content.toLowerCase().includes("x3")) {
      message.channel.send("-# x3");
    }

    if (
      message.content.toLowerCase().startsWith("rawr") &&
      message.content.toLowerCase().endsWith("rawr")
    ) {
      message.channel.send("-# x3");
    }
  },
};
