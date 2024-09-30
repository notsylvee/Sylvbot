module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot || !message.guild) return;
    if (message.author.id !== `1018686464000807003`) return;
    if (!message.content.startsWith("SILENCE")) return;

    const mention = message.mentions.users.first();
    if (!mention) return;
    const id = mention.id;
    const member = await message.guild.members.fetch(mention.id);

    await message.guild.members.fetch(id).then((user) => {
      user.timeout(30000, "silenced");
      message.channel.send(`-# ${member.displayName} has been silenced`);
    });
  },
};
