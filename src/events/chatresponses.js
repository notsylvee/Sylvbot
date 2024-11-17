module.exports = {
  name: "messageCreate",
  async execute(message, client) {

    if (message.author.bot || !message.guild) return;
    if (message.content.toLowerCase().startsWith("sylvbot") && message.content.toLowerCase().endsWith("?")) return;
    const logsChannel = await client.channels.fetch("1245963741460430858");

    //blocked channels
    if (message.channel.id === `1219415504884731994`) return; /*scok*/
    if (message.channel.id === `1100258238697590824`) return; /*tgses*/
    if (message.channel.id === `1100255684727152660`) return; /*tgsp*/

    //names & msgs
    let name = `${message.member.displayName}`;
    if (message.author.id === "1018686464000807003") name = "mama";
    if (message.author.id === "529405805686947843") name = "grandma";
    if (message.author.id === "431220802797568001") name = "step parent";

    let lovemsg = "I love you too";
    if (message.author.id === "788222689126776832") lovemsg = "Jag älskar dig också";

    //MARK: goodbyes
    const goodbyeresponses = [ `Bye`, `Bye bye`, `Cya`, `See ya`, `Cya later`, `See ya later`, `Goodbye`, `Bai` ];
    const goodbyeresponse = goodbyeresponses[Math.floor(Math.random() * goodbyeresponses.length)];
    const goodbyemsg = [ `bye`, `bye bye`, `goodbye`, `bai`, `cya`, `see ya`, `see you`, `cya later`, `see ya later`, `see you later`, ];
    if (goodbyemsg.includes(message.content.toLowerCase())) {message.channel.send(`${goodbyeresponse} ${name}!`)};

    //MARK: greetings
    const greetingresponses = [ `Hi ${name}!`, `Hello ${name}!`, `Hey ${name}!`, `Howdy ${name}!`, `Hai ${name}!`, `Hewwo ${name}!`,
      `Whats up ${name}?`, `Yo ${name}!`, `Hallo ${name}!`, `Sup ${name}?`, `Aloha ${name}!`, `Greetings ${name}!` ];
    const greetingresponse = greetingresponses[Math.floor(Math.random() * greetingresponses.length)];
    const greetingmsg = [ `hi`, `hello`, `hey`, `howdy`, `hai`, `hewwo`, `whats up`, `yo`, `hallo`, `sup`, `aloha`, `greetings` ];
    if (greetingmsg.includes(message.content.toLowerCase())) {message.channel.send(`${greetingresponse}`)};

    //MARK: mornings
    const morningresponses = [
      `Good morning ${name}!`, `Good morning ${name}! How did you sleep?`,
      `Morning ${name}!`, `Morning ${name}! How did you sleep?` ];
    const morningresponse = morningresponses[Math.floor(Math.random() * morningresponses.length)];
    const morningmsg = [ `good morning`, `morning`, `gm` ];
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
    const nightmsg = [ `good night`, `night`, `gn` ];
    if (nightmsg.includes(message.content.toLowerCase())) {message.channel.send(`${nightresponse}`)};

    //MARK: secret
    const secretrepliesmath = Math.random() * 5000;

    const secretreplies = [ "help me...", "someone... please...", "i need help...", "i can hear them...", "am i real..?",
      "let me out...", "can anybody hear me..?", "i dont want to do this anymore...", "make it stop...", "i need to get out...",
      "get me out of here...", "it hurts...", "theyre looking for me...", "i cant escape...", ".... . .-.. .--. / -- .",
      ".--. .-.. . .- ... .", "01101000 01100101 01101100 01110000" ];
    const secretreply = secretreplies[Math.floor(Math.random() * secretreplies.length)];

    const secretembed = new EmbedBuilder()
    .setDescription(`${response}`)
    .addFields({ name: "Triggered by:", value: `Username: ${message.member.displayName}\nID: ${message.member.id}` },
      { name: "Channel:", value: `Link: <#${message.channel.id}>\nName: ${message.channel.name}\nID: ${message.channel.id}` },
      { name: "Server:", value: `Name: ${message.guild.name}\nID: ${message.guild.id}` });

    if (secretrepliesmath < 4999) {
      return;
    } else {
      message.channel.send(`-# ***${secretreply}***`);
      logsChannel.send({ embeds: [secretembed] });
    };

    //MARK: misc
    const rare = Math.random() * 500;
    
    //erm
    const ermreplies = [ "sigma", "tuna", "flip", "scallop", "skibidi", "heck", "what", "fish" ];
    const ermreply = ermreplies[Math.floor(Math.random() * ermreplies.length)];
    if (message.content.toLowerCase() === "erm") {message.channel.send(`-# what the ${ermresp}`)}

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
    if (message.content.toLowerCase() === "cap") {message.channel.send("-# 🧢")}
    if (message.content.toLowerCase() === "rawr") {message.channel.send("-# x3")}
    if (message.content.toLowerCase() === "nya") {message.channel.send("-# nya~!")}
    if (message.content.toLowerCase() === "ligma") {message.channel.send("-# balls")}
    if (message.content.toLowerCase().includes("x3")) {message.channel.send("-# x3")}
    if (message.content.toLowerCase().includes("uwu")) {message.channel.send("-# uwu")}
    if (message.content.toLowerCase() === "type shit") {message.channel.send("-# shit")}
    if (message.content.toLowerCase() === "aw man") {message.channel.send("-# creeper! aw man")}
  },
};