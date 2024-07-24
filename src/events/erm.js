module.exports = {
    name: 'messageCreate',
    async execute (message) {
        
        if (message.author.bot || !message.guild) return;

        const msg = [ "sigma", "tuna", "flip", "scallop", "skibidi", "heck", "what", "fish" ];
        const response = msg[Math.floor(Math.random() * msg.length)];

        if (message.content.toLowerCase().startsWith("erm") && message.content.toLowerCase().endsWith("erm")) {
            message.channel.send(`-# what the ${response}`)
        }
    }
}