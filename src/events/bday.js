module.exports = {
    name: "messageCreate",
    async execute(message) {
      if (message.author.bot || !message.guild) return;

      let name = `${message.member.displayName}`;
      if (message.author.id === "1018686464000807003") name = "mama";
      if (message.author.id === "529405805686947843") name = "grandma";
      if (message.author.id === "431220802797568001") name = "step parent";

      if (message.content.toLowerCase().includes("happy birthday sylvbot") || message.content.toLowerCase().includes("happy bday sylvbot"))
        {message.channel.send(`Thank you ${name}!`)}
    },
  };