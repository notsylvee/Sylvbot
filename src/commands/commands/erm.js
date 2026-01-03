const fs = require("fs/promises");

module.exports = {
    data: {
        name: "erm",
        description: "erm, what the",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const words = [
            "sigma",
            "tuna",
            "flip",
            "scallop",
            "skibidi",
            "heck",
            "what",
            "fish 🐟",
            "shark 🦈",
            "freak",
            "fart"
        ];
        
        const word = words[Math.floor(Math.random() * words.length)];
        await interaction.reply({ content: `what the ${word}` });
      },
}