module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") name = "mama";

    const msg = [
      `Good morning ${name}!`,
      `Morning ${name}!`,
      `Good morning ${name}! How did you sleep?`,
      `Morning ${name}! How did you sleep?`,
    ];
    const response = msg[Math.floor(Math.random() * msg.length)];

    if (
      message.content.toLowerCase() === "good morning"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "morning"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "gm"
    ) {
      message.channel.send(`${response}`);
    }
  },
};
