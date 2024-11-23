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
    const message = await updates.messages.fetch({ limit: 1 });
    const recent = message.first();
    if (recent.author.id !== process.env.botID) updates.send("Update live!");

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
