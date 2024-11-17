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
      message.content.toLowerCase() === "good night"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "night"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "gn"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "night night"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "nini"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "goodnight"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "nighty"
    ) {
      message.channel.send(`${response}`);
    }

    if (
      message.content.toLowerCase() === "nighty night"
    ) {
      message.channel.send(`${response}`);
    }
  },
};
