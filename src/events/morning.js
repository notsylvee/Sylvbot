module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") lovename = "mama";

    const msg = [
      `Good morning ${name}!`,
      `Morning ${name}!`,
      `Good morning ${name}! How did you sleep?`,
      `Morning ${name}! How did you sleep?`,
    ];
    const response = msg[Math.floor(Math.random() * msg.length)];

    if (
      message.content.toLowerCase().startsWith("good morning") &&
      message.content.toLowerCase().endsWith("good morning")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("morning") &&
      message.content.toLowerCase().endsWith("morning")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("gm") &&
      message.content.toLowerCase().endsWith("gm")
    ) {
      message.channel.send(`${response}`);
    }
  },
};
