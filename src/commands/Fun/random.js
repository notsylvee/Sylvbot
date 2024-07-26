const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('random')
    .setDescription('Get a random character from a specified game')
    .addSubcommand(command =>
        command
        .setName('valorant')
        .setDescription('Get a randomly chosen Valorant agent'))
    .addSubcommand(command =>
        command
        .setName('hsr')
        .setDescription('Get a randomly chosen Honkai: Star Rail character')),

    async execute (interaction) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'valorant':
                const agents = [
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e435c3378b7999a3338b408dbb5da8ba63f91150-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/05e1a996814dd10d7179efee327d29a7be00e912-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ba51d43803082941b0274b66413b0acc972546dd-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e7099cc13a665ed2b556d514e50984393ed49967-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1246b5c517f6c8fa660e884a7032c1c54994003e-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8d88f133f735f6a9077679b1ece754e5624c728e-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png?auto=format&fit=fill&q=80&w=353",
                    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=353"
                ];
                const agent = agents[Math.floor(Math.random() * agents.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Orange")
                .setAuthor({ name: `${interaction.member.displayName}, your random Valorant agent is...`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(agent)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'hsr':
                const characters = [
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Character_Acheron_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327021325",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Character_Argenti_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231206232011",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Arlan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231038",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bd/Character_Asta_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231122",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a9/Character_Aventurine_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327104723",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e9/Character_Bailu_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210120736",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Black_Swan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240220023547",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/1/16/Character_Blade_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501004859",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bb/Character_Boothill_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240624231026",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7c/Character_Bronya_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240121130128",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c2/Character_Clara_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231958",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e5/Character_Dan_Heng_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090149",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2c/Character_Dan_Heng_%E2%80%A2_Imbibitor_Lunae_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230818234313",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/5/56/Character_Dr._Ratio_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231227132629",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/3/38/Character_Firefly_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240619022729",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3e/Character_Fu_Xuan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230928224921",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Character_Gallagher_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327022011",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/9/96/Character_Gepard_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216232354",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/3/33/Character_Guinaifen_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231030040741",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e8/Character_Hanya_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231206232120",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8c/Character_Herta_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231220",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8e/Character_Himeko_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090036",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/e/ec/Character_Hook_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090126",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/8/82/Character_Huohuo_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231115031700",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Jade_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240706170539",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/4/48/Character_Jing_Yuan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115809",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/9/97/Character_Jingliu_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240525000314",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/9/95/Character_Kafka_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230809042240",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/5/51/Character_Luka_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230809042157",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a5/Character_Luocha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230628091054",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3c/Character_Lynx_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230719101506",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/1/18/Character_March_7th_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090156",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240206022717",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7e/Character_Natasha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240525042421",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c9/Character_Pela_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090100",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d1/Character_Qingque_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115335",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_Robin_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240508021256",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Ruan_Mei_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231227021137",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/6/65/Character_Sampo_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090046",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/5/58/Character_Seele_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240121123334",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8a/Character_Serval_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090108",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Silver_Wolf_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216230911",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Sparkle_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327022635",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Sushang_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115023",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Tingyun_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115502",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/9/9d/Character_Topaz_and_Numby_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231030040101",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6f/Character_Trailblazer_%28F%29_Destruction_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005741",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/1/12/Character_Trailblazer_%28M%29_Destruction_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005733",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/1/17/Character_Trailblazer_%28F%29_Preservation_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005729",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/6/63/Character_Trailblazer_%28M%29_Preservation_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005737",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0a/Character_Trailblazer_%28F%29_Harmony_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240508064117",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f5/Character_Trailblazer_%28M%29_Harmony_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240508064008",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Character_Welt_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090017",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bc/Character_Xueyi_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231227045314",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Yanqing_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210121516",
                    "https://static.wikia.nocookie.net/houkai-star-rail/images/0/04/Character_Yukong_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230628090836"
                ];
                const character = characters[Math.floor(Math.random() * characters.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Orange")
                .setAuthor({ name: `${interaction.member.displayName}, your random Honkai: Star Rail character is...`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(character)
        
                await interaction.reply({ embeds: [embed] });
        }
    }
}