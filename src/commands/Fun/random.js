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
        .setName('sv-marriageable')
        .setDescription('Get a randomly chosen marriageable Stardew Valley NPC'))
    .addSubcommand(command => 
        command
        .setName('sv-nonmarriageable')
        .setDescription('Get a randomly chosen non-marriageable Stardew Valley NPC'))
    .addSubcommand(command => 
        command
        .setName('sv-nongiftable')
        .setDescription('Get a randomly chosen non-giftable Stardew Valley NPC'))
    .addSubcommand(command => 
        command
        .setName('wuwa')
        .setDescription('Get a randomly chosen Wuthering Waves resonator'))
    .addSubcommand(command => 
        command
        .setName('zzz')
        .setDescription('Get a randomly chosen Zenless Zone Zero agent')),

    async execute (interaction) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'valorant':
                const agents = [
                    "https://cdn.sylvee.xyz/valorant_brimstone.webp",
                    "https://cdn.sylvee.xyz/valorant_phoenix.webp",
                    "https://cdn.sylvee.xyz/valorant_sage.webp",
                    "https://cdn.sylvee.xyz/valorant_sova.webp",
                    "https://cdn.sylvee.xyz/valorant_viper.webp",
                    "https://cdn.sylvee.xyz/valorant_cypher.webp",
                    "https://cdn.sylvee.xyz/valorant_reyna.webp",
                    "https://cdn.sylvee.xyz/valorant_killjoy.webp",
                    "https://cdn.sylvee.xyz/valorant_breach.webp",
                    "https://cdn.sylvee.xyz/valorant_omen.webp",
                    "https://cdn.sylvee.xyz/valorant_jett.webp",
                    "https://cdn.sylvee.xyz/valorant_raze.webp",
                    "https://cdn.sylvee.xyz/valorant_skye.webp",
                    "https://cdn.sylvee.xyz/valorant_yoru.webp",
                    "https://cdn.sylvee.xyz/valorant_astra.webp",
                    "https://cdn.sylvee.xyz/valorant_kayo.webp",
                    "https://cdn.sylvee.xyz/valorant_chamber.webp",
                    "https://cdn.sylvee.xyz/valorant_neon.webp",
                    "https://cdn.sylvee.xyz/valorant_fade.webp",
                    "https://cdn.sylvee.xyz/valorant_harbor.webp",
                    "https://cdn.sylvee.xyz/valorant_gekko.webp",
                    "https://cdn.sylvee.xyz/valorant_deadlock.webp",
                    "https://cdn.sylvee.xyz/valorant_iso.webp",
                    "https://cdn.sylvee.xyz/valorant_clove.webp",
                    "https://cdn.sylvee.xyz/valorant_vyse.webp"
                ];
                const agent = agents[Math.floor(Math.random() * agents.length)];
        
                let name = '';
                if (agent === "https://cdn.sylvee.xyz/valorant_brimstone.webp") name = 'Brimstone'
                if (agent === "https://cdn.sylvee.xyz/valorant_phoenix.webp") name = 'Phoenix'
                if (agent === "https://cdn.sylvee.xyz/valorant_sage.webp") name = 'Sage'
                if (agent === "https://cdn.sylvee.xyz/valorant_sova.webp") name = 'Sova'
                if (agent === "https://cdn.sylvee.xyz/valorant_viper.webp") name = 'Viper'
                if (agent === "https://cdn.sylvee.xyz/valorant_cypher.webp") name = 'Cypher'
                if (agent === "https://cdn.sylvee.xyz/valorant_reyna.webp") name = 'Reyna'
                if (agent === "https://cdn.sylvee.xyz/valorant_killjoy.webp") name = 'Killjoy'
                if (agent === "https://cdn.sylvee.xyz/valorant_breach.webp") name = 'Breach'
                if (agent === "https://cdn.sylvee.xyz/valorant_omen.webp") name = 'Omen'
                if (agent === "https://cdn.sylvee.xyz/valorant_jett.webp") name = 'Jett'
                if (agent === "https://cdn.sylvee.xyz/valorant_raze.webp") name = 'Raze'
                if (agent === "https://cdn.sylvee.xyz/valorant_skye.webp") name = 'Skye'
                if (agent === "https://cdn.sylvee.xyz/valorant_yoru.webp") name = 'Yoru'
                if (agent === "https://cdn.sylvee.xyz/valorant_astra.webp") name = 'Astra'
                if (agent === "https://cdn.sylvee.xyz/valorant_kayo.webp") name = 'KAY/O'
                if (agent === "https://cdn.sylvee.xyz/valorant_chamber.webp") name = 'Chamber'
                if (agent === "https://cdn.sylvee.xyz/valorant_neon.webp") name = 'Neon'
                if (agent === "https://cdn.sylvee.xyz/valorant_fade.webp") name = 'Fade'
                if (agent === "https://cdn.sylvee.xyz/valorant_harbor.webp") name = 'Harbor'
                if (agent === "https://cdn.sylvee.xyz/valorant_gekko.webp") name = 'Gekko'
                if (agent === "https://cdn.sylvee.xyz/valorant_deadlock.webp") name = 'Deadlock'
                if (agent === "https://cdn.sylvee.xyz/valorant_iso.webp") name = 'Iso'
                if (agent === "https://cdn.sylvee.xyz/valorant_clove.webp") name = 'Clove'
                if (agent === "https://cdn.sylvee.xyz/valorant_vyse.webp") name = 'Vyse'

                const embed = new EmbedBuilder()
                .setColor("Purple")
                .setDescription(`<:valorant:1266815187445485725> ${interaction.member.displayName}, your random Valorant agent is... ${name}!`)
                .setImage(agent)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'hsr':
                const characters = [
                    "https://cdn.sylvee.xyz/hsr_acheron.webp",
                    "https://cdn.sylvee.xyz/hsr_argenti.webp",
                    "https://cdn.sylvee.xyz/hsr_arlan.webp",
                    "https://cdn.sylvee.xyz/hsr_asta.webp",
                    "https://cdn.sylvee.xyz/hsr_aventurine.webp",
                    "https://cdn.sylvee.xyz/hsr_bailu.webp",
                    "https://cdn.sylvee.xyz/hsr_black_swan.webp",
                    "https://cdn.sylvee.xyz/hsr_blade.webp",
                    "https://cdn.sylvee.xyz/hsr_boothill.webp",
                    "https://cdn.sylvee.xyz/hsr_bronya.webp",
                    "https://cdn.sylvee.xyz/hsr_clara.webp",
                    "https://cdn.sylvee.xyz/hsr_dan_heng.webp",
                    "https://cdn.sylvee.xyz/hsr_dhil.webp",
                    "https://cdn.sylvee.xyz/hsr_dr_ratio.webp",
                    "https://cdn.sylvee.xyz/hsr_firefly.webp",
                    "https://cdn.sylvee.xyz/hsr_fu_xuan.webp",
                    "https://cdn.sylvee.xyz/hsr_gallagher.webp",
                    "https://cdn.sylvee.xyz/hsr_gepard.webp",
                    "https://cdn.sylvee.xyz/hsr_guinaifen.webp",
                    "https://cdn.sylvee.xyz/hsr_hanya.webp",
                    "https://cdn.sylvee.xyz/hsr_herta.webp",
                    "https://cdn.sylvee.xyz/hsr_himeko.webp",
                    "https://cdn.sylvee.xyz/hsr_hook.webp",
                    "https://cdn.sylvee.xyz/hsr_huohuo.webp",
                    "https://cdn.sylvee.xyz/hsr_jade.webp",
                    "https://cdn.sylvee.xyz/hsr_jiaoqiu.webp",
                    "https://cdn.sylvee.xyz/hsr_jing_yuan.webp",
                    "https://cdn.sylvee.xyz/hsr_jingliu.webp",
                    "https://cdn.sylvee.xyz/hsr_kafka.webp",
                    "https://cdn.sylvee.xyz/hsr_luka.webp",
                    "https://cdn.sylvee.xyz/hsr_luocha.webp",
                    "https://cdn.sylvee.xyz/hsr_lynx.webp",
                    "https://cdn.sylvee.xyz/hsr_march_7th_preservation.webp",
                    "https://cdn.sylvee.xyz/hsr_march_7th_the_hunt.webp",
                    "https://cdn.sylvee.xyz/hsr_misha.webp",
                    "https://cdn.sylvee.xyz/hsr_natasha.webp",
                    "https://cdn.sylvee.xyz/hsr_pela.webp",
                    "https://cdn.sylvee.xyz/hsr_qingque.webp",
                    "https://cdn.sylvee.xyz/hsr_robin.webp",
                    "https://cdn.sylvee.xyz/hsr_ruan_mei.webp",
                    "https://cdn.sylvee.xyz/hsr_sampo.webp",
                    "https://cdn.sylvee.xyz/hsr_seele.webp",
                    "https://cdn.sylvee.xyz/hsr_serval.webp",
                    "https://cdn.sylvee.xyz/hsr_silver_wolf.webp",
                    "https://cdn.sylvee.xyz/hsr_sparkle.webp",
                    "https://cdn.sylvee.xyz/hsr_sushang.webp",
                    "https://cdn.sylvee.xyz/hsr_tingyun.webp",
                    "https://cdn.sylvee.xyz/hsr_topaz_and_numby.webp",
                    "https://cdn.sylvee.xyz/hsr_stelle_destruction.webp",
                    "https://cdn.sylvee.xyz/hsr_caelus_destruction.webp",
                    "https://cdn.sylvee.xyz/hsr_stelle_preservation.webp",
                    "https://cdn.sylvee.xyz/hsr_caelus_preservation.webp",
                    "https://cdn.sylvee.xyz/hsr_stelle_harmony.webp",
                    "https://cdn.sylvee.xyz/hsr_caelus_harmony.webp",
                    "https://cdn.sylvee.xyz/hsr_welt.webp",
                    "https://cdn.sylvee.xyz/hsr_xueyi.webp",
                    "https://cdn.sylvee.xyz/hsr_yanqing.webp",
                    "https://cdn.sylvee.xyz/hsr_yukong.webp",
                    "https://cdn.sylvee.xyz/hsr_yunli.webp"
                ];
                const character = characters[Math.floor(Math.random() * characters.length)];
        
                let name = '';
                if (character === "https://cdn.sylvee.xyz/hsr_acheron.webp") name = 'Acheron'
                if (character === "https://cdn.sylvee.xyz/hsr_argenti.webp") name = 'Argenti'
                if (character === "https://cdn.sylvee.xyz/hsr_arlan.webp") name = 'Arlan'
                if (character === "https://cdn.sylvee.xyz/hsr_asta.webp") name = 'Asta'
                if (character === "https://cdn.sylvee.xyz/hsr_aventurine.webp") name = 'Aventurine'
                if (character === "https://cdn.sylvee.xyz/hsr_bailu.webp") name = 'Bailu'
                if (character === "https://cdn.sylvee.xyz/hsr_black_swan.webp") name = 'Black Swan'
                if (character === "https://cdn.sylvee.xyz/hsr_blade.webp") name = 'Blade'
                if (character === "https://cdn.sylvee.xyz/hsr_boothill.webp") name = 'Boothill'
                if (character === "https://cdn.sylvee.xyz/hsr_bronya.webp") name = 'Bronya'
                if (character === "https://cdn.sylvee.xyz/hsr_clara.webp") name = 'Clara'
                if (character === "https://cdn.sylvee.xyz/hsr_dan_heng.webp") name = 'Dan Heng'
                if (character === "https://cdn.sylvee.xyz/hsr_dhil.webp") name = 'Dan Heng Imbibitor Lunae'
                if (character === "https://cdn.sylvee.xyz/hsr_dr_ratio.webp") name = 'Dr. Ratio'
                if (character === "https://cdn.sylvee.xyz/hsr_firefly.webp") name = 'Firefly'
                if (character === "https://cdn.sylvee.xyz/hsr_fu_xuan.webp") name = 'Fu Xuan'
                if (character === "https://cdn.sylvee.xyz/hsr_gallagher.webp") name = 'Gallagher'
                if (character === "https://cdn.sylvee.xyz/hsr_gepard.webp") name = 'Gepard'
                if (character === "https://cdn.sylvee.xyz/hsr_guinaifen.webp") name = 'Guinaifen'
                if (character === "https://cdn.sylvee.xyz/hsr_hanya.webp") name = 'Hanya'
                if (character === "https://cdn.sylvee.xyz/hsr_herta.webp") name = 'Herta'
                if (character === "https://cdn.sylvee.xyz/hsr_himeko.webp") name = 'Himeko'
                if (character === "https://cdn.sylvee.xyz/hsr_hook.webp") name = 'Hook'
                if (character === "https://cdn.sylvee.xyz/hsr_huohuo.webp") name = 'Huohuo'
                if (character === "https://cdn.sylvee.xyz/hsr_jade.webp") name = 'Jade'
                if (character === "https://cdn.sylvee.xyz/hsr_jiaoqiu.webp") name = 'Jiaoqiu'
                if (character === "https://cdn.sylvee.xyz/hsr_jing_yuan.webp") name = 'Jing Yuan'
                if (character === "https://cdn.sylvee.xyz/hsr_jingliu.webp") name = 'Jingliu'
                if (character === "https://cdn.sylvee.xyz/hsr_kafka.webp") name = 'Kafka'
                if (character === "https://cdn.sylvee.xyz/hsr_luka.webp") name = 'Luka'
                if (character === "https://cdn.sylvee.xyz/hsr_luocha.webp") name = 'Luocha'
                if (character === "https://cdn.sylvee.xyz/hsr_lynx.webp") name = 'Lynx'
                if (character === "https://cdn.sylvee.xyz/hsr_march_7th_preservation.webp") name = 'March 7th (Preservation)'
                if (character === "https://cdn.sylvee.xyz/hsr_march_7th_the_hunt.webp") name = 'March 7th (The Hunt)'
                if (character === "https://cdn.sylvee.xyz/hsr_misha.webp") name = 'Misha'
                if (character === "https://cdn.sylvee.xyz/hsr_natasha.webp") name = 'Natasha'
                if (character === "https://cdn.sylvee.xyz/hsr_pela.webp") name = 'Pela'
                if (character === "https://cdn.sylvee.xyz/hsr_qingque.webp") name = 'Qingque'
                if (character === "https://cdn.sylvee.xyz/hsr_robin.webp") name = 'Robin'
                if (character === "https://cdn.sylvee.xyz/hsr_ruan_mei.webp") name = 'Ruan Mei'
                if (character === "https://cdn.sylvee.xyz/hsr_sampo.webp") name = 'Sampo'
                if (character === "https://cdn.sylvee.xyz/hsr_seele.webp") name = 'Seele'
                if (character === "https://cdn.sylvee.xyz/hsr_serval.webp") name = 'Serval'
                if (character === "https://cdn.sylvee.xyz/hsr_silver_wolf.webp") name = 'Silver Wolf'
                if (character === "https://cdn.sylvee.xyz/hsr_sparkle.webp") name = 'Sparkle'
                if (character === "https://cdn.sylvee.xyz/hsr_sushang.webp") name = 'Sushang'
                if (character === "https://cdn.sylvee.xyz/hsr_tingyun.webp") name = 'Tingyun'
                if (character === "https://cdn.sylvee.xyz/hsr_topaz_and_numby.webp") name = 'Topaz and Numby'
                if (character === "https://cdn.sylvee.xyz/hsr_stelle_destruction.webp") name = 'Stelle (Destruction)'
                if (character === "https://cdn.sylvee.xyz/hsr_caelus_destruction.webp") name = 'Caelus (Destruction)'
                if (character === "https://cdn.sylvee.xyz/hsr_stelle_preservation.webp") name = 'Stelle (Preservation)'
                if (character === "https://cdn.sylvee.xyz/hsr_caelus_preservation.webp") name = 'Caelus (Preservation)'
                if (character === "https://cdn.sylvee.xyz/hsr_stelle_harmony.webp") name = 'Stelle (Harmony)'
                if (character === "https://cdn.sylvee.xyz/hsr_caelus_harmony.webp") name = 'Caelus (Harmony)'
                if (character === "https://cdn.sylvee.xyz/hsr_welt.webp") name = 'Welt'
                if (character === "https://cdn.sylvee.xyz/hsr_xueyi.webp") name = 'Xueyi'
                if (character === "https://cdn.sylvee.xyz/hsr_yanqing.webp") name = 'Yanqing'
                if (character === "https://cdn.sylvee.xyz/hsr_yukong.webp") name = 'Yukong'
                if (character === "https://cdn.sylvee.xyz/hsr_yunli.webp") name = 'Yunli'

                const embed = new EmbedBuilder()
                .setColor("Purple")
                .setDescription(`<:hsr:1266840602730037340> ${interaction.member.displayName}, your random Honkai: Star Rail character is... ${name}!`)
                .setImage(character)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'sv-marriageable':

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
            .setDescription(`<:sv:1266866016500191322> ${interaction.member.displayName}, your random Stardew Valley villager is... ${name}!`)
            .setImage(character)

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'sv-nonmarriageable':

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
            .setDescription(`<:sv:1266866016500191322> ${interaction.member.displayName}, your random Stardew Valley villager is... ${name}!`)
            .setImage(character)
            
            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'sv-nongiftable':

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
            .setDescription(`<:sv:1266866016500191322> ${interaction.member.displayName}, your random Stardew Valley villager is... ${name}!`)
            .setImage(character)

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'wuwa':

            const resonators = [
                "https://cdn.sylvee.xyz/wuwa_aalto.webp",
                "https://cdn.sylvee.xyz/wuwa_baizhi.webp",
                "https://cdn.sylvee.xyz/wuwa_calcharo.webp",
                "https://cdn.sylvee.xyz/wuwa_changli.webp",
                "https://cdn.sylvee.xyz/wuwa_chixia.webp",
                "https://cdn.sylvee.xyz/wuwa_danjin.webp",
                "https://cdn.sylvee.xyz/wuwa_encore.webp",
                "https://cdn.sylvee.xyz/wuwa_jianxin.webp",
                "https://cdn.sylvee.xyz/wuwa_jinhsi.webp",
                "https://cdn.sylvee.xyz/wuwa_jiyan.webp",
                "https://cdn.sylvee.xyz/wuwa_lingyang.webp",
                "https://cdn.sylvee.xyz/wuwa_mortefi.webp",
                "https://cdn.sylvee.xyz/wuwa_rover.webp",
                "https://cdn.sylvee.xyz/wuwa_sanhua.webp",
                "https://cdn.sylvee.xyz/wuwa_taoqi.webp",
                "https://cdn.sylvee.xyz/wuwa_verina.webp",
                "https://cdn.sylvee.xyz/wuwa_yangyang.webp",
                "https://cdn.sylvee.xyz/wuwa_yinlin.webp",
                "https://cdn.sylvee.xyz/wuwa_yuanwu.webp",
                "https://cdn.sylvee.xyz/wuwa_zhezhi.webp"
            ];
            const resonator = resonators[Math.floor(Math.random() * resonators.length)];

            let name = '';
            if (resonator === "https://cdn.sylvee.xyz/wuwa_aalto.webp") name = 'Aalto'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_baizhi.webp") name = 'Baizhi'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_calcharo.webp") name = 'Calcharo'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_changli.webp") name = 'Changli'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_chixia.webp") name = 'Chixia'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_danjin.webp") name = 'Danjin'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_encore.webp") name = 'Encore'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_jianxin.webp") name = 'Jianxin'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_jinhsi.webp") name = 'Jinhsi'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_jiyan.webp") name = 'Jiyan'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_lingyang.webp") name = 'Lingyang'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_mortefi.webp") name = 'Mortefi'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_rover.webp") name = 'Rover'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_sanhua.webp") name = 'Sanhua'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_taoqi.webp") name = 'Taoqi'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_verina.webp") name = 'Verina'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_yangyang.webp") name = 'Yangyang'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_yinlin.webp") name = 'Yinlin'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_yuanwu.webp") name = 'Yuanwu'
            if (resonator === "https://cdn.sylvee.xyz/wuwa_zhezhi.webp") name = 'Zhezhi'


            const embed = new EmbedBuilder()
            .setColor("Purple")
            .setDescription(`<:wuwa:1271601771961126914> ${interaction.member.displayName}, your random Wuthering Waves resonator is... ${name}!`)
            .setImage(resonator)

            await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'zzz':

            const agents = [
                "https://cdn.sylvee.xyz/zzz_rina.webp",
                "https://cdn.sylvee.xyz/zzz_anby.webp",
                "https://cdn.sylvee.xyz/zzz_anton.webp",
                "https://cdn.sylvee.xyz/zzz_ben_bigger.webp",
                "https://cdn.sylvee.xyz/zzz_billy_kid.webp",
                "https://cdn.sylvee.xyz/zzz_corin.webp",
                "https://cdn.sylvee.xyz/zzz_ellen.webp",
                "https://cdn.sylvee.xyz/zzz_grace.webp",
                "https://cdn.sylvee.xyz/zzz_koleda.webp",
                "https://cdn.sylvee.xyz/zzz_lucy.webp",
                "https://cdn.sylvee.xyz/zzz_nekomata.webp",
                "https://cdn.sylvee.xyz/zzz_nicole.webp",
                "https://cdn.sylvee.xyz/zzz_piper.webp",
                "https://cdn.sylvee.xyz/zzz_qingqyi.webp",
                "https://cdn.sylvee.xyz/zzz_soldier_11.webp",
                "https://cdn.sylvee.xyz/zzz_soukaku.webp",
                "https://cdn.sylvee.xyz/zzz_von_lycaon.webp",
                "https://cdn.sylvee.xyz/zzz_zhu_yuan.webp"
            ];
            const agent = agents[Math.floor(Math.random() * agents.length)];

            let name = '';
            if (agent === "https://cdn.sylvee.xyz/zzz_rina.webp") name = 'Alexandrina (Rina) Sebastiane'
            if (agent === "https://cdn.sylvee.xyz/zzz_anby.webp") name = 'Andy Demara'
            if (agent === "https://cdn.sylvee.xyz/zzz_anton.webp") name = 'Anton Ivanov'
            if (agent === "https://cdn.sylvee.xyz/zzz_ben_bigger.webp") name = 'Ben Bigger'
            if (agent === "https://cdn.sylvee.xyz/zzz_billy_kid.webp") name = 'Billy Kid'
            if (agent === "https://cdn.sylvee.xyz/zzz_corin.webp") name = 'Corin Wickes'
            if (agent === "https://cdn.sylvee.xyz/zzz_ellen.webp") name = 'Ellen Joe'
            if (agent === "https://cdn.sylvee.xyz/zzz_grace.webp") name = 'Grace Howard'
            if (agent === "https://cdn.sylvee.xyz/zzz_koleda.webp") name = 'Koleda Belobog'
            if (agent === "https://cdn.sylvee.xyz/zzz_lucy.webp") name = 'Luciana (Lucy) de Montefio'
            if (agent === "https://cdn.sylvee.xyz/zzz_nekomata.webp") name = 'Nekomiya (Nekomata) Mana'
            if (agent === "https://cdn.sylvee.xyz/zzz_nicole.webp") name = 'Nicole Demara'
            if (agent === "https://cdn.sylvee.xyz/zzz_piper.webp") name = 'Piper Wheel'
            if (agent === "https://cdn.sylvee.xyz/zzz_qingqyi.webp") name = 'Qingqyi'
            if (agent === "https://cdn.sylvee.xyz/zzz_soldier_11.webp") name = 'Soldier 11'
            if (agent === "https://cdn.sylvee.xyz/zzz_soukaku.webp") name = 'Soukaku'
            if (agent === "https://cdn.sylvee.xyz/zzz_von_lycaon.webp") name = 'Von Lycaon'
            if (agent === "https://cdn.sylvee.xyz/zzz_zhu_yuan.webp") name = 'Zhu Yuan'

            const embed = new EmbedBuilder()
            .setColor("Purple")
            .setDescription(`<:zzz:1271601970624331827> ${interaction.member.displayName}, your random Zenless Zone Zero agent is... ${name}!`)
            .setImage(agent)

            await interaction.reply({ embeds: [embed] });
        }
    }
}