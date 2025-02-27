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

    const updates = await client.channels.fetch(process.env.updatechannel);
    updates.send("I am now online/have been updated!");

    console.log("Ready!");

    if (!mongoURL) return;
    mongoose.set('strictQuery', false);

        await mongoose.connect(mongoURL || '', {
            //keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        if (mongoose.connect) {
            mongoose.set('strictQuery', true);
            console.log("The database is running!")
        }
  },
};
