module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") name = "mama";

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
      message.content.toLowerCase() === "bye"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "bye bye"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "cya"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "see ya"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "cya later"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "see ya later"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "goodbye"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "bai"
    ) {
      message.channel.send(`${response}`);
    }
  },
};
