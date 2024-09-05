module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") lovename = "mama";

    const msg = [
      `Hi ${name}!`,
      `Hello ${name}!`,
      `Hey ${name}!`,
      `Howdy ${name}!`,
      `Hai ${name}!`,
      `Hewwo ${name}!`,
      `Whats up ${name}?`,
      `Yo ${name}!`,
      `Hallo ${name}!`,
      `Sup ${name}?`,
      `Aloha ${name}!`,
      `Greetings ${name}!`,
    ];
    const response = msg[Math.floor(Math.random() * msg.length)];

    if (
      message.content.toLowerCase().startsWith("hi") &&
      message.content.toLowerCase().endsWith("i")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("hello") &&
      message.content.toLowerCase().endsWith("o")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("hey") &&
      message.content.toLowerCase().endsWith("y")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("howdy") &&
      message.content.toLowerCase().endsWith("y")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("hai") &&
      message.content.toLowerCase().endsWith("i")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("hewwo") &&
      message.content.toLowerCase().endsWith("o")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("whats up") &&
      message.content.toLowerCase().endsWith("whats up")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("yo") &&
      message.content.toLowerCase().endsWith("yo")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("hallo") &&
      message.content.toLowerCase().endsWith("o")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("sup") &&
      message.content.toLowerCase().endsWith("sup")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("aloha") &&
      message.content.toLowerCase().endsWith("aloha")
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase().startsWith("greetings") &&
      message.content.toLowerCase().endsWith("greetings")
    ) {
      message.channel.send(`${response}`);
    }
  },
};
