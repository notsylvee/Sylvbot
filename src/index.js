const { channel } = require("diagnostics_channel");
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  Permissions,
  MessageManager,
  Embed,
  Collection,
  Events,
  ChannelType,
} = require(`discord.js`);
const fs = require("fs");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildEmojisAndStickers,
  ],
});

client.commands = new Collection();

require("dotenv").config();

const functions = fs
  .readdirSync("./src/functions")
  .filter((file) => file.endsWith(".js"));
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }
  client.handleEvents(eventFiles, "./src/events");
  client.handleCommands(commandFolders, "./src/commands");
  client.login(process.env.token);
})();

//guild join log invite button
client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.customId !== "invite") return;

  const channels = await guild.channels.cache.filter(
    (c) => c.type === ChannelType.GuildText,
  );
  for (const c of channels.values()) {
    channel = c;
    break;
  }

  if (!channel)
    return await interaction.reply({
      content: `<:exclamation:1266823414828765246> Invalid channels`,
      ephemeral: true,
    });

  const invite = await channel.createInvite().catch((err) => {});
  await interaction.reply({
    content: `discord.gg/${invite.code}`,
    ephemeral: true,
  });
});

//giveaways
const GiveawaysManager = require("./giveaways");
client.giveawayManager = new GiveawaysManager(client, {
  default: {
    botsCanWin: false,
    embedColor: "#f3b3a2",
    embedColorEnd: "#f3b3a2",
    reaction: "🎉",
  },
});
