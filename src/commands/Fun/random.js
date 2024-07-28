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
        .setDescription('Get a randomly chosen Honkai: Star Rail character'))
    .addSubcommand(command => 
        command
        .setName('stardew-marriageable')
        .setDescription('Get a randomly chosen marriageable Stardew Valley NPC'))
    .addSubcommand(command => 
        command
        .setName('stardew-nonmarriageable')
        .setDescription('Get a randomly chosen non-marriageable Stardew Valley NPC'))
     .addSubcommand(command => 
        command
        .setName('stardew-nongiftable')
        .setDescription('Get a randomly chosen non-giftable Stardew Valley NPC')),

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
        
                let name = '';
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Brimstone'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Phoenix'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Sage'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Sova'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Viper'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Cypher'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Reyna'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Killjoy'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e435c3378b7999a3338b408dbb5da8ba63f91150-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Breach'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Omen'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Jett'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Raze'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Skye'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/05e1a996814dd10d7179efee327d29a7be00e912-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Yoru'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ba51d43803082941b0274b66413b0acc972546dd-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Astra'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'KAY/O'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Chamber'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Neon'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e7099cc13a665ed2b556d514e50984393ed49967-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Fade'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1246b5c517f6c8fa660e884a7032c1c54994003e-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Harbor'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8d88f133f735f6a9077679b1ece754e5624c728e-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Gekko'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Deadlock'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Iso'
                if (agent === "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=353") name = 'Clove'

                const embed = new EmbedBuilder()
                .setColor("Purple")
                .setDescription(`<:valorant:1266815187445485725> ${interaction.member.displayName}, your random Valorant agent is... ${name}!`)
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
        
                let name = '';
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Character_Acheron_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327021325") name = 'Acheron'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Character_Argenti_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231206232011") name = 'Argenti'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Arlan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231038") name = 'Arlan'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bd/Character_Asta_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231122") name = 'Asta'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a9/Character_Aventurine_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327104723") name = 'Aventurine'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e9/Character_Bailu_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210120736") name = 'Bailu'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Black_Swan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240220023547") name = 'Black Swan'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/1/16/Character_Blade_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501004859") name = 'Blade'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bb/Character_Boothill_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240624231026") name = 'Boothill'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7c/Character_Bronya_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240121130128") name = 'Bronya'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c2/Character_Clara_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231958") name = 'Clara'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e5/Character_Dan_Heng_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090149") name = 'Dan Heng'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2c/Character_Dan_Heng_%E2%80%A2_Imbibitor_Lunae_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230818234313") name = 'Dan Heng Imbibitor Lunae'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/5/56/Character_Dr._Ratio_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231227132629") name = 'Dr. Ratio'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/3/38/Character_Firefly_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240619022729") name = 'Firefly'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3e/Character_Fu_Xuan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230928224921") name = 'Fu Xuan'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Character_Gallagher_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327022011") name = 'Gallagher'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/9/96/Character_Gepard_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216232354") name = 'Gepard'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/3/33/Character_Guinaifen_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231030040741") name = 'Guinaifen'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e8/Character_Hanya_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231206232120") name = 'Hanya'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8c/Character_Herta_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216231220") name = 'Herta'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8e/Character_Himeko_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090036") name = 'Himeko'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/e/ec/Character_Hook_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090126") name = 'Hook'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/8/82/Character_Huohuo_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231115031700") name = 'Huohuo'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Jade_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240706170539") name = 'Jade'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/4/48/Character_Jing_Yuan_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115809") name = 'Jing Yuan'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/9/97/Character_Jingliu_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240525000314") name = 'Jingliu'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/9/95/Character_Kafka_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230809042240") name = 'Kafka'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/5/51/Character_Luka_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230809042157") name = 'Luka'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a5/Character_Luocha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230628091054") name = 'Luocha'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3c/Character_Lynx_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230719101506") name = 'Lynx'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/1/18/Character_March_7th_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090156") name = 'March 7th'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240206022717") name = 'Misha'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7e/Character_Natasha_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240525042421") name = 'Natasha'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c9/Character_Pela_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090100") name = 'Pela'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d1/Character_Qingque_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115335") name = 'Qingque'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_Robin_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240508021256") name = 'Robin'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Ruan_Mei_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231227021137") name = 'Ruan Mei'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/6/65/Character_Sampo_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090046") name = 'Sampo'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/5/58/Character_Seele_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240121123334") name = 'Seele'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8a/Character_Serval_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090108") name = 'Serval'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Silver_Wolf_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216230911") name = 'Silver Wolf'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Sparkle_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240327022635") name = 'Sparkle'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Sushang_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115023") name = 'Sushang'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Tingyun_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210115502") name = 'Tingyun'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/9/9d/Character_Topaz_and_Numby_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231030040101") name = 'Topaz and Numby'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6f/Character_Trailblazer_%28F%29_Destruction_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005741") name = 'Stelle (Destruction)'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/1/12/Character_Trailblazer_%28M%29_Destruction_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005733") name = 'Caelus (Destruction)'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/1/17/Character_Trailblazer_%28F%29_Preservation_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005729") name = 'Stelle (Preservation)'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/6/63/Character_Trailblazer_%28M%29_Preservation_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230501005737") name = 'Caelus (Preservation)'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0a/Character_Trailblazer_%28F%29_Harmony_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240508064117") name = 'Stelle (Harmony)'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f5/Character_Trailblazer_%28M%29_Harmony_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240508064008") name = 'Caelus (Harmony)'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Character_Welt_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230525090017") name = 'Welt'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bc/Character_Xueyi_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20231227045314") name = 'Xueyi'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Yanqing_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230210121516") name = 'Yanqing'
                if (character === "https://static.wikia.nocookie.net/houkai-star-rail/images/0/04/Character_Yukong_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230628090836") name = 'Yukong'

                const embed = new EmbedBuilder()
                .setColor("Purple")
                .setDescription(`<:hsr:1266840602730037340> ${interaction.member.displayName}, your random Honkai: Star Rail character is... ${name}!`)
                .setImage(character)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'stardew-marriageable':

            const characters = [
                "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
                "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
                "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
                "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
                "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
                "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
                "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
                "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
                "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
                "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
                "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
                "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png"
            ];
            const character = characters[Math.floor(Math.random() * characters.length)];
            
            let name = '';
            if (character === "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png") name = 'Alex'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png") name = 'Elliott'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png") name = 'Harvey'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png") name = 'Sam'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png") name = 'Sebastian'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png") name = 'Shane'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png") name = 'Abigail'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png") name = 'Emiy'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png") name = 'Haley'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png") name = 'Leah'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png") name = 'Maru'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png") name = 'Penny'

            const embed = new EmbedBuilder()
            .setColor("Purple")
            .setDescription(`<:sv:1266866016500191322> ${interaction.member.displayName}, your random Stardew Valley character is... ${name}!`)
            .setImage(character)

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'stardew-nonmarriageable':

            const characters = [
                "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
                "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
                "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
                "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
                "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
                "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png",
                "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
                "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
                "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
                "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
                "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
                "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png",
                "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
                "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
                "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
                "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
                "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
                "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
                "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
                "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
                "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
                "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png"
            ];
            const character = characters[Math.floor(Math.random() * characters.length)];
            
            let name = '';
            if (character === "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png") name = 'Caroline'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png") name = 'Clint'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png") name = 'Demetrius'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png") name = 'Dwarf'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png") name = 'Evelyn'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png") name = 'George'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png") name = 'Gus'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png") name = 'Jas'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png") name = 'Jodi'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png") name = 'Kent'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png") name = 'Krobus'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png") name = 'Leo'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png") name = 'Lewis'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png") name = 'Linus'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png") name = 'Marnie'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png") name = 'Pam'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png") name = 'Pierre'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png") name = 'Robin'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png") name = 'Sandy'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png") name = 'Vincent'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png") name = 'Willy'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png") name = 'Wizard'


            const embed = new EmbedBuilder()
            .setColor("Purple")
            .setDescription(`<:sv:1266866016500191322> ${interaction.member.displayName}, your random Stardew Valley character is... ${name}!`)
            .setImage(character)
            
            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'stardew-nongiftable':

            const characters = [
                "https://stardewvalleywiki.com/mediawiki/images/4/46/Birdie.png",
                "https://stardewvalleywiki.com/mediawiki/images/f/f5/Bouncer.png",
                "https://stardewvalleywiki.com/mediawiki/images/a/a3/Fizz_00.png",
                "https://stardewvalleywiki.com/mediawiki/images/6/64/Gil.png",
                "https://stardewvalleywiki.com/mediawiki/images/4/46/Governor.png",
                "https://stardewvalleywiki.com/mediawiki/images/8/88/Grandpa.png",
                "https://stardewvalleywiki.com/mediawiki/images/3/3d/Gunther.png",
                "https://stardewvalleywiki.com/mediawiki/images/2/21/Henchman_Portrait_1.png",
                "https://stardewvalleywiki.com/mediawiki/images/3/37/Marlon.png",
                "https://stardewvalleywiki.com/mediawiki/images/9/90/Morris.png",
                "https://stardewvalleywiki.com/mediawiki/images/b/b4/Mr._Qi.png",
                "https://stardewvalleywiki.com/mediawiki/images/d/d4/Professor_Snail.png"
            ];
            const character = characters[Math.floor(Math.random() * characters.length)];

            let name = '';
            if (character === "https://stardewvalleywiki.com/mediawiki/images/4/46/Birdie.png") name = 'Birdie'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/f/f5/Bouncer.png") name = 'Bouncer'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/a/a3/Fizz_00.png") name = 'Fizz'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/6/64/Gil.png") name = 'Gil'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/4/46/Governor.png") name = 'Governor'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/8/88/Grandpa.png") name = 'Grandpa'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/3/3d/Gunther.png") name = 'Gunther'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/2/21/Henchman_Portrait_1.png") name = 'Henchman'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/3/37/Marlon.png") name = 'Marlon'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/9/90/Morris.png") name = 'Morris'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/b/b4/Mr._Qi.png") name = 'Mr. Qi'
            if (character === "https://stardewvalleywiki.com/mediawiki/images/d/d4/Professor_Snail.png") name = 'Professor Snail'

            const embed = new EmbedBuilder()
            .setColor("Purple")
            .setDescription(`<:sv:1266866016500191322> ${interaction.member.displayName}, your random Stardew Valley character is... ${name}!`)
            .setImage(character)

            await interaction.reply({ embeds: [embed] });
        }
    }
}