const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setPresence({
      status: "idle",
      activities: [
        {
          type: ActivityType.Custom,
          name: "customstatus",
          state: "<3",
        },
      ],
    });
  },
};
