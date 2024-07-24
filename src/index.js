const { channel } = require('diagnostics_channel');
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Events } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] }); 

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.token)
})();

client.on(Events.GuildCreate, async guild => {

    const channel = await client.channels.cache.get('1245963741460430858');
    const name = guild.name;
    const memberCount = guild.memberCount;
    const ownerID = guild.ownerId;
    const owner = await client.users.cache.get(ownerID);
    const ownerName = owner.username;

    const embed = new EmbedBuilder()
    .setColor("Green")
    .setTitle('Joined Server')
    .addFields({ name: 'Server Name', value: `> ${name}` })
    .addFields({ name: 'Server Owner', value: `> ${ownerName} / ${ownerID}` })
    .addFields({ name: 'Member Count', value: `> ${memberCount}` })
    .addFields({ name: 'Server Age', value: `> <t:${parseInt(guild.createdTimestamp/1000)}:R>` })
    .setFooter({ text: 'Guild Join' })
    .setTimestamp()

    await channel.send({ embeds: [embed] });
})

client.on(Events.GuildDelete, async guild => {

    const channel = await client.channels.cache.get('1245963741460430858');
    const name = guild.name;
    const memberCount = guild.memberCount;
    const ownerID = guild.ownerId;
    const owner = await client.users.cache.get(ownerID);
    const ownerName = owner.username;

    const embed = new EmbedBuilder()
    .setColor("Red")
    .setTitle('Left Server')
    .addFields({ name: 'Server Name', value: `> ${name}` })
    .addFields({ name: 'Server Owner', value: `> ${ownerName} / ${ownerID}` })
    .addFields({ name: 'Member Count', value: `> ${memberCount}` })
    .addFields({ name: 'Server Age', value: `> <t:${parseInt(guild.createdTimestamp/1000)}:R>` })
    .setFooter({ text: 'Guild Leave' })
    .setTimestamp()

    await channel.send({ embeds: [embed] });
})