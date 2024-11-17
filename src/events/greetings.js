module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;
    if (message.channel.id === `1219415504884731994`) return; /*scok*/
    if (message.channel.id === `1100258238697590824`) return; /*tgses*/
    if (message.channel.id === `1100255684727152660`) return; /*tgsp*/

    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") name = "mama";

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
      message.content.toLowerCase() === "hi"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "hello"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "hey"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "howdy"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "hai"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "hewwo"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "whats up"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "yo"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "hallo"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "sup"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "aloha"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "greetings"
    ) {
      message.channel.send(`${response}`);
    }
  },
};
