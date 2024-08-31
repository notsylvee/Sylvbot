module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    const msg = [
      `Bye ${message.member.displayName}!`,
      `Bye bye ${message.member.displayName}!`,
      `Cya ${message.member.displayName}!`,
      `See ya ${message.member.displayName}!`,
      `Cya later ${message.member.displayName}!`,
      `See ya later ${message.member.displayName}!`,
      `Goodbye ${message.member.displayName}!`,
      `Bai ${message.member.displayName}!`,
    ];
    const response = msg[Math.floor(Math.random() * msg.length)];

    if (
      message.content.toLowerCase().startsWith("bye") &&
      message.content.toLowerCase().endsWith("e")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("bye bye") &&
      message.content.toLowerCase().endsWith("e")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("cya") &&
      message.content.toLowerCase().endsWith("a")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("see ya") &&
      message.content.toLowerCase().endsWith("a")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("cya later") &&
      message.content.toLowerCase().endsWith("cya later")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("see ya later") &&
      message.content.toLowerCase().endsWith("see ya later")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("goodbye") &&
      message.content.toLowerCase().endsWith("e")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("bai") &&
      message.content.toLowerCase().endsWith("i")
    ) {
      message.channel.send(`${response}`);
    }
  },
};
