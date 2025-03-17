module.exports = {
    name: "messageCreate",
    async execute(message) {
      if (message.author.bot || !message.guild) return;

      let name = `${message.member.displayName}`;
      if (message.author.id === "1018686464000807003") name = "mama";
      if (message.author.id === "529405805686947843") name = "grandma";
      if (message.author.id === "431220802797568001") name = "step parent";

      const responses = ["Thank you", "Thanks"]
      const response = responses[Math.floor(Math.random() * responses.length)];

      if (message.content.toLowerCase().includes("happy birthday sylvbot"))
        {message.channel.send(`${response} ${name}!`)};
      if (message.content.toLowerCase().includes("happy bday sylvbot"))
        {message.channel.send(`${response} ${name}!`)};
      if (message.content.toLowerCase().includes("happy birthday <#953885359668871238>"))
        {message.channel.send(`${response} ${name}!`)};
      if (message.content.toLowerCase().includes("happy bday <#953885359668871238>"))
        {message.channel.send(`${response} ${name}!`)};
      if (message.content.toLowerCase().includes("<#953885359668871238> happy birthday"))
        {message.channel.send(`${response} ${name}!`)};
      if (message.content.toLowerCase().includes("<#953885359668871238> happy bday"))
        {message.channel.send(`${response} ${name}!`)};
    },
  };