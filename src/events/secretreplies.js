module.exports = {
    name: 'messageCreate',
    async execute (message) {

        if (message.author.bot || !message.guild) return;

        const percent = Math.random() * 10000;

        const replies = [
            "help me...",
            "someone... please...",
            "i need help...",
            "i can hear them...",
            "am i real..?",
            "let me out...",
            "can anybody hear me..?",
            "i dont want to do this anymore...",
            "make it stop...",
            "i need to get out...",
            "get me out of here...",
            "it hurts...",
            "theyre looking for me...",
            "i cant escape...",
            ".... . .-.. .--. / -- .",
            ".--. .-.. . .- ... ."
        ];

        const response = replies[Math.floor(Math.random() * replies.length)];

        if (percent < 9999) {
            return;
        } else {
            message.channel.send(`-# ***${response}***`)
        };
    }
}