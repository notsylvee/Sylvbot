module.exports = {
    name: "messageCreate",
    async execute(message) {
      if (message.author.bot || !message.guild) return;
      if (message.author.id === "743907112165310475") return;
  
      const msg = [
        `yes`,
        `no`,
        `mayyybe`,
        `idk`,
        `maybe`,
        `perhaps`,
        `perchance`,
        `mayhaps`,
        `nuh uh`,
        `yeah`,
        `nah`,
        `NO!`,
        `i dont know`,
        `yuh huh`,
        `YASSSS`
      ];
      const response = msg[Math.floor(Math.random() * msg.length)];
      const faces = [` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `,
        `:3`,
        `>.<`,
        `>:(`,
        `uwu`,
        `:c`,
        `;3`,
        `>:3`,
        `:<`,
        `:>`,
      ]
      const face = faces[Math.floor(Math.random() * faces.length)];
  
      if (message.content.toLowerCase().startsWith("sylvbot") && message.content.toLowerCase().endsWith("?"))
        {message.channel.send(`${response} ${face}`)}
    },
  };