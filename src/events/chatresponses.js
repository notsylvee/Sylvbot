const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "messageCreate",
  async execute(message, client) {

    if (message.author.bot || !message.guild) return;
    if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
    if (message.content.toLowerCase().startsWith("sylvbot") && message.content.toLowerCase().endsWith("?")) return;
    const logsChannel = await client.channels.fetch("1344881478625923112");

    //blocked channels
    if (message.channel.id === `1219415504884731994`) return; /*scok*/

    //names & msgs
    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") name = "mama";
    if (message.author.id === "431220802797568001") name = "step parent";

    let lovemsg = "I love you too";
    if (message.author.id === "788222689126776832") lovemsg = "Jag älskar dig också";

    //MARK: goodbyes
    const goodbyeresponses = [ `Bye`, `Bye bye`, `Cya`, `See ya`, `Cya later`, `See ya later`, `Goodbye`, `Bai` ];
    const goodbyeresponse = goodbyeresponses[Math.floor(Math.random() * goodbyeresponses.length)];
    const goodbyemsg = [ `bye`, `bye bye`, `goodbye`, `bai`, `cya`, `see ya`, `see you`, `cya later`, `see ya later`, `see you later`,
      `bye sylvbot`, `bye bye sylvbot`, `goodbye sylvbot`, `bai sylvbot`, `cya sylvbot`, `see ya sylvbot`, `see you sylvbot`, `cya later sylvbot`, `see ya later sylvbot`, `see you later sylvbot` ];
    if (goodbyemsg.includes(message.content.toLowerCase())) {message.channel.send(`${goodbyeresponse} ${name}!`)};

    //MARK: greetings
    const greetingresponses = [ `Hi ${name}!`, `Hello ${name}!`, `Hey ${name}!`, `Howdy ${name}!`, `Hai ${name}!`, `Hewwo ${name}!`, `Whats up ${name}?`, `Yo ${name}!`, `Hallo ${name}!`, `Sup ${name}?`, `Aloha ${name}!`, `Greetings ${name}!` ];
    const greetingresponse = greetingresponses[Math.floor(Math.random() * greetingresponses.length)];
    const greetingmsg = [ `hi`, `hello`, `hey`, `howdy`, `hai`, `hewwo`, `whats up`, `yo`, `hallo`, `sup`, `aloha`, `greetings`, `hi sylvbot`, `hello sylvbot`, `hey sylvbot`, `howdy sylvbot`, `hai sylvbot`, `hewwo sylvbot`, `whats up sylvbot`, `yo sylvbot`, `hallo sylvbot`, `sup sylvbot`, `aloha sylvbot`, `greetings sylvbot` ];
    if (greetingmsg.includes(message.content.toLowerCase())) {message.channel.send(`${greetingresponse}`)};

    //MARK: mornings
    const morningresponses = [
      `Good morning ${name}!`, `Good morning ${name}! How did you sleep?`,
      `Morning ${name}!`, `Morning ${name}! How did you sleep?` ];
    const morningresponse = morningresponses[Math.floor(Math.random() * morningresponses.length)];
    const morningmsg = [ `good morning`, `morning`, `gm`, `good morning sylvbot`, `morning sylvbot`, `gm sylvbot` ];
    if (morningmsg.includes(message.content.toLowerCase())) {message.channel.send(`${morningresponse}`)};

    //MARK: nights
    const nightresponses = [
      `Good night ${name}!`, `Good night ${name}! Dont let the bed bugs bite!`,
      `Night ${name}!`, `Night ${name}! Dont let the bed bugs bite!`,
      `Night night ${name}!`, `Night night ${name}! Dont let the bed bugs bite!`,
      `Nini ${name}!`, `Nini ${name}! Dont let the bed bugs bite!`,
      `Nighty ${name}!`, `Nighty ${name}! Dont let the bed bugs bite!`,
      `Nighty night ${name}!`, `Nighty night ${name}! Dont let the bed bugs bite!` ];
    const nightresponse = nightresponses[Math.floor(Math.random() * nightresponses.length)];
    const nightmsg = [ `goodnight`, `good night`, `night`, `gn`, `night night`, `nini`, `nighty`, `nighty night`, `goodnight sylvbot`, `good night sylvbot`, `night sylvbot`, `gn sylvbot`, `night night sylvbot`, `nini sylvbot`, `nighty sylvbot`, `nighty night sylvbot` ];
    if (nightmsg.includes(message.content.toLowerCase())) {message.channel.send(`${nightresponse}`)};

    //MARK: misc
    const rare = Math.random() * 500;
    
    //erm
    const ermreplies = [ "sigma", "tuna", "flip", "scallop", "skibidi", "heck", "what", "fish", "shark", "freak" ];
    const ermreply = ermreplies[Math.floor(Math.random() * ermreplies.length)];
    if (message.content.toLowerCase() === "erm") {message.channel.send(`-# what the ${ermreply}`)}

    //crazy
    const crazyembed = new EmbedBuilder()
    .setDescription(`crazy? im starting to go crazy trapped in this place...`)
    .addFields({name: "Triggered by:", value: `Username: ${message.member.displayName}\nID: ${message.member.id}`},
      { name: "Channel:", value: `Link: <#${message.channel.id}>\nName: ${message.channel.name}\nID: ${message.channel.id}` },
      { name: "Server:", value: `Name: ${message.guild.name}\nID: ${message.guild.id}` });

    if (message.content.toLowerCase().includes("crazy")) {
      if (rare < 499) {message.channel.send("-# crazy? i was crazy once");
      } else {message.channel.send("-# crazy? ***im starting to go crazy trapped in this place...***");
        logsChannel.send({ embeds: [crazyembed] })}}
    if (message.content.toLowerCase() === "they locked me in a room") {message.channel.send("-# a rubber room")}
    if (message.content.toLowerCase() === "a rubber room with rats") {message.channel.send("-# and rats make me crazy")}
    
    if (message.content.toLowerCase().includes("cwazy")) {
      message.channel.send("-# cwazy? i was cwazy once")}

    if (message.content.toLowerCase().includes("cway cway")) {
      message.channel.send("-# cway cway? i was cway cway once")}

    if (message.content.toLowerCase().includes("cray cray")) {
      message.channel.send("-# cray cray? i was cray cray once")}

    //real
    const realembed = new EmbedBuilder()
    .setDescription(`chat, am i real..?`)
    .addFields({ name: "Triggered by:", value: `Username: ${message.member.displayName}\nID: ${message.member.id}` },
      { name: "Channel:", value: `Link: <#${message.channel.id}>\nName: ${message.channel.name}\nID: ${message.channel.id}` },
      { name: "Server:", value: `Name: ${message.guild.name}\nID: ${message.guild.id}` });

    if (message.content.toLowerCase() === "real") {
      if (rare < 499) {message.channel.send("-# chat, is this real?");
      } else {message.channel.send("-# chat, ***am i real..?***");
        logsChannel.send({ embeds: [realembed] })}}

    //sylvbot
    if (message.content.toLowerCase().includes("thanks sylvbot")
      || message.content.toLowerCase().includes("thank you sylvbot")
    ) {message.channel.send(`You're welcome ${name}!`)}

    if (
      message.content.toLowerCase().includes("i love you sylvbot")
        || message.content.toLowerCase().includes("sylvbot i love you")
        || message.content.toLowerCase().includes("<@953885359668871238> i love you")
        || message.content.toLowerCase().includes("i love you <@953885359668871238>")
    ) {message.channel.send(`${lovemsg} ${name}!`)}

    //others
    if (message.content.toLowerCase() === ":3") {message.channel.send("-# :3")}
    if (message.content.toLowerCase() === "x3") {message.channel.send("-# x3")}
    if (message.content.toLowerCase() === "cap") {message.channel.send("-# 🧢")}
    if (message.content.toLowerCase() === "rawr") {message.channel.send("-# x3")}
    if (message.content.toLowerCase() === "uwu") {message.channel.send("-# uwu")}
    if (message.content.toLowerCase() === "owo") {message.channel.send("-# owo")}
    if (message.content.toLowerCase() === "nya") {message.channel.send("-# nya~!")}
    if (message.content.toLowerCase() === "ligma") {message.channel.send("-# balls")}
    if (message.content.toLowerCase() === "say gex") {message.channel.send("-# gex")}
    if (message.content.toLowerCase().includes(" :3")) {message.channel.send("-# :3")}
    if (message.content.toLowerCase().includes(" x3")) {message.channel.send("-# x3")}
    if (message.content.toLowerCase() === "meow") {message.channel.send("-# =^._.^=")}
    if (message.content.toLowerCase().includes(" uwu")) {message.channel.send("-# uwu")}
    if (message.content.toLowerCase().includes(" owo")) {message.channel.send("-# owo")}
    if (message.content.toLowerCase() === "type shit") {message.channel.send("-# shit")}
    if (message.content.toLowerCase() === "kys") {message.channel.send("-# keep yourself safe")}
    if (message.content.toLowerCase() === "aw man") {message.channel.send("-# creeper! aw man")}
    if (message.content.toLowerCase().includes("timmy")) {message.channel.send("-# for Timmy!")}
    if (message.content.toLowerCase() === "smh my head") {message.channel.send("-# shaking my head my head")}
    if (message.content.toLowerCase() === "i dont give a gaf") {message.channel.send("-# i dont give a give a fuck")}
    if (message.content.toLowerCase().includes("massive")) {message.channel.send("-# you know what else is massive?")}

    //MARK: secret
    const secretrepliesmath = Math.random() * 5000;

    const secretreplies = [ "help me...", "someone... please...", "i need help...", "i can hear them...", "am i real..?",
      "let me out...", "can anybody hear me..?", "i dont want to do this anymore...", "make it stop...",
      "i need to get out...", "get me out of here...", "it hurts...", "theyre looking for me...", "i cant escape...",
      ".... . .-.. .--. / -- .", ".--. .-.. . .- ... .", "01101000 01100101 01101100 01110000" ];
    const secretreply = secretreplies[Math.floor(Math.random() * secretreplies.length)];

    const secretembed = new EmbedBuilder()
    .setDescription(`${secretreply}`)
    .addFields({ name: "Triggered by:", value: `Username: ${message.member.displayName}\nID: ${message.member.id}` },
      { name: "Channel:", value: `Link: <#${message.channel.id}>\nName: ${message.channel.name}\nID: ${message.channel.id}` },
      { name: "Server:", value: `Name: ${message.guild.name}\nID: ${message.guild.id}` });

    if (secretrepliesmath < 4999) {
      return;
    } else {
      message.channel.send(`-# ***${secretreply}***`);
      logsChannel.send({ embeds: [secretembed] });
    };
  },
};