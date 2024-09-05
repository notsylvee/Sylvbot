module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") lovename = "mama";

    const msg = [
      `Good night ${name}!`,
      `Night ${name}!`,
      `Good night ${name}! Dont let the bed bugs bite!`,
      `Night ${name}! Dont let the bed bugs bite!`,
      `Night night ${name}!`,
      `Night night ${name}! Dont let the bed bugs bite!`,
      `Nini ${name}!`,
      `Nini ${name}! Dont let the bed bugs bite!`,
      `Nighty ${name}!`,
      `Nighty ${name}! Dont let the bed bugs bite!`,
      `Nighty night ${name}!`,
      `Nighty night ${name}! Dont let the bed bugs bite!`,
    ];
    const response = msg[Math.floor(Math.random() * msg.length)];

    if (
      message.content.toLowerCase().startsWith("good night") &&
      message.content.toLowerCase().endsWith("good night")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("night") &&
      message.content.toLowerCase().endsWith("night")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("gn") &&
      message.content.toLowerCase().endsWith("gn")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("night night") &&
      message.content.toLowerCase().endsWith("night night")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("nini") &&
      message.content.toLowerCase().endsWith("nini")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("goodnight") &&
      message.content.toLowerCase().endsWith("goodnight")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("nighty") &&
      message.content.toLowerCase().endsWith("y")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("nighty night") &&
      message.content.toLowerCase().endsWith("nighty night")
    ) {
      message.channel.send(`${response}`);
    }
  },
};
