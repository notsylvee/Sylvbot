const { Interaction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (command.owner == true) {
      if (interaction.user.id !== "1018686464000807003")
        return await interaction.reply({
          content: `<:forbidden:1266829648344645694> Invalid permission`,
          ephemeral: true,
        });
    }

    if (!command) return;

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.log(error);
      await interaction.reply({
        content:
          "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};
