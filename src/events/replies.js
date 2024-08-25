module.exports = {
    name: 'messageCreate',
    async execute (message, client) {
        
        if (message.author.bot || !message.guild) return;

        const ermmsg = [ "sigma", "tuna", "flip", "scallop", "skibidi", "heck", "what", "fish" ];
        const ermresp = ermmsg[Math.floor(Math.random() * ermmsg.length)];

        const rare = Math.random() * 500;
        const logsChannel = await client.channels.fetch('1245963741460430858');

        let lovename = `${message.member.displayName}`
        if (message.author.id === "1018686464000807003") lovename = "mom"
        if (message.author.id === "529405805686947843") lovename = "grandma"
        if (message.author.id === "431220802797568001") lovename = "step parent"
        if (message.author.id === "743907112165310475") lovename = "step mom"

        let lovemsg = "I love you too"
        if (message.author.id === "788222689126776832") lovemsg = "Jag älskar dig också"

        if (message.content.toLowerCase().startsWith("cap") && message.content.toLowerCase().endsWith("cap")) {
            message.channel.send("-# 🧢")}

        if (message.content.toLowerCase().includes(":3")) {
            message.channel.send("-# :3")}

        if (message.content.toLowerCase().includes("crazy")) {
            if (rare < 499) {
                message.channel.send("-# crazy? i was crazy once")
            } else {
                message.channel.send("-# crazy? ***im starting to go crazy trapped in this place...***")
                logsChannel.send(`\`crazy? im starting to go crazy trapped in this place...\` sent in <#${message.channel.id}> | ${message.channel.name} | ${message.channel.id}`)
            }}

        if (message.content.toLowerCase().includes("cwazy")) {
            message.channel.send("-# cwazy? i was cwazy once")}

        if (message.content.toLowerCase().includes("cway cway")) {
            message.channel.send("-# cway cway? i was cway cway once")}

        if (message.content.toLowerCase().startsWith("aw man") && message.content.toLowerCase().endsWith("aw man")) {
            message.channel.send("-# creeper! aw man")}

        if (message.content.toLowerCase().startsWith("erm") && message.content.toLowerCase().endsWith("m")) {
            message.channel.send(`-# what the ${ermresp}`)}

        if (message.content.toLowerCase().startsWith("ligma") && message.content.toLowerCase().endsWith("ligma")) {
            message.channel.send("-# balls")}

        if (message.content.toLowerCase().startsWith("real") && message.content.toLowerCase().endsWith("l")) {
            if (rare < 499) {
                message.channel.send("-# chat, is this real?")
            } else {
                message.channel.send("-# chat, ***am i real..?***")
                logsChannel.send(`\`chat, am i real..?\` sent in <#${message.channel.id}> | ${message.channel.name} | ${message.channel.id}`)
            }}
            
        if (message.content.toLowerCase().startsWith("type shit") && message.content.toLowerCase().endsWith("type shit")) {
            message.channel.send("-# shit")}

        if (message.content.toLowerCase().includes("i love you sylvbot") || message.content.toLowerCase().includes("sylvbot i love you") || message.content.toLowerCase().includes("<@953885359668871238> i love you")) {
            message.channel.send(`${lovemsg} ${lovename}!`)}
    }
}