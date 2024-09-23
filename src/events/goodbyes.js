module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") lovename = "mama";

    const msg = [
      `Bye ${name}!`,
      `Bye bye ${name}!`,
      `Cya ${name}!`,
      `See ya ${name}!`,
      `Cya later ${name}!`,
      `See ya later ${name}!`,
      `Goodbye ${name}!`,
      `Bai ${name}!`,
    ];
    const response = msg[Math.floor(Math.random() * msg.length)];

    if (
      message.content.toLowerCase().startsWith("bye") &&
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
