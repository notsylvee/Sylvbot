module.exports = {
    name: "messageCreate",
    async execute(message) {
      if (message.author.bot || !message.guild) return;
  
      const msg = [
        `yes`,
        `no`,
        `idk :P`,
        `mayyybe :3`,
      ];
      const response = msg[Math.floor(Math.random() * msg.length)];
  
      if (message.content.toLowerCase().startsWith("sylvbot") && message.content.toLowerCase().endsWith("?"))
        {message.channel.send(`${response}`)}
    },
  };