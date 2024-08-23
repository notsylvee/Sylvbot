module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        const ermmsg = [ "sigma", "tuna", "flip", "scallop", "skibidi", "heck", "what", "fish" ];
        const ermresp = ermmsg[Math.floor(Math.random() * ermmsg.length)];

        const realpercent = Math.random() * 1000;

        if (message.content.toLowerCase().startsWith("cap") && message.content.toLowerCase().endsWith("cap")) {
            message.channel.send("-# 🧢")}

        if (message.content.toLowerCase().includes(":3")) {
            message.channel.send("-# :3")}

        if (message.content.toLowerCase().includes("crazy")) {
            message.channel.send("-# crazy? i was crazy once")}

        if (message.content.toLowerCase().includes("cwazy")) {
            message.channel.send("-# cwazy? i was cwazy once")}

        if (message.content.toLowerCase().startsWith("aw man") && message.content.toLowerCase().endsWith("aw man")) {
            message.channel.send("-# creeper! aw man")}

        if (message.content.toLowerCase().startsWith("erm") && message.content.toLowerCase().endsWith("m")) {
            message.channel.send(`-# what the ${ermresp}`)}

        if (message.content.toLowerCase().startsWith("ligma") && message.content.toLowerCase().endsWith("ligma")) {
            message.channel.send("-# balls")}

        if (message.content.toLowerCase().startsWith("real") && message.content.toLowerCase().endsWith("l")) {
            if (realpercent < 999) {message.channel.send("-# chat, is this real?")} else {message.channel.send("-# chat, ***am i real..?***")}}
            
        if (message.content.toLowerCase().startsWith("type shit") && message.content.toLowerCase().endsWith("type shit")) {
            message.channel.send("-# shit")}
    }
}