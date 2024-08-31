const mongoose = require("mongoose");
const mongoURL = process.env.mongoURL;
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

    const updates = await client.channels.fetch("1265926416168517693");
    updates.send('Update live!');

    console.log("Ready!");

    if (!mongoURL) return;
    await mongoose.connect(mongoURL || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (mongoose.connect) {
      console.log("Connected to MongoDB");
    } else {
      console.log("Failed to connect to MongoDB");
    }
  },
};
