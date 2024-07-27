const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('selfemote')
    .setDescription('Use an emote command')
    //20
    .addSubcommand(command =>
        command
        .setName('cry')
        .setDescription('Sends a crying gif'))
    .addSubcommand(command =>
        command
        .setName('dance')
        .setDescription('Sends a dancing gif!'))
    .addSubcommand(command =>
        command
        .setName('eat')
        .setDescription('Sends an eating gif!'))
    .addSubcommand(command =>
        command
        .setName('giggle')
        .setDescription('Sends a giggling gif!'))
    .addSubcommand(command =>
        command
        .setName('happy')
        .setDescription('Sends a happy gif!'))
    .addSubcommand(command =>
        command
        .setName('mad')
        .setDescription('Sends a mad gif!'))
    .addSubcommand(command =>
        command
        .setName('plead')
        .setDescription('Sends a pleading gif!'))
    .addSubcommand(command =>
        command
        .setName('pout')
        .setDescription('Sends a pouting gif!'))
    .addSubcommand(command =>
        command
        .setName('sad')
        .setDescription('Sends a sad gif'))
    .addSubcommand(command =>
        command
        .setName('shy')
        .setDescription('Sends a shy gif!'))
    .addSubcommand(command =>
        command
        .setName('sleep')
        .setDescription('Sends a sleep gif!'))
    .addSubcommand(command =>
        command
        .setName('spin')
        .setDescription('Sends a spinning gif!'))
    .addSubcommand(command =>
        command
        .setName('die')
        .setDescription('This kills you'))
    .addSubcommand(command =>
        command
        .setName('tired')
        .setDescription('Sends a tired gif!'))
    .addSubcommand(command =>
        command
        .setName('wave')
        .setDescription('Sends a waving gif!'))
    .addSubcommand(command =>
        command
        .setName('scared')
        .setDescription('Sends a scared gif!'))
    .addSubcommand(command =>
        command
        .setName('sigh')
        .setDescription('Sends a sighing gif!'))
    .addSubcommand(command =>
        command
        .setName('blush')
        .setDescription('Sends a blushing gif!'))
    .addSubcommand(command =>
        command
        .setName('drool')
        .setDescription('Sends a drooling gif!'))
    .addSubcommand(command =>
        command
        .setName('explode')
        .setDescription('Sends an exploding gif!')),
    
    async execute(interaction, client) {

        const command = interaction.options.getSubcommand();

        switch (command) {
            case 'cry':
                const link = [
                    "https://media1.tenor.com/m/vEcyUvOTLI4AAAAC/adeus-volte-sempre.gif",
                    "https://media1.tenor.com/m/IHVd7sXB66YAAAAC/anime-cry-hinagiku.gif",
                    "https://media1.tenor.com/m/EiY1tgZOtQUAAAAC/anime-crying.gif",
                    "https://media1.tenor.com/m/V68-MgqFCdEAAAAC/kaoruko-moeta-comic-girls.gif",
                    "https://media1.tenor.com/m/u4T7KV53gKEAAAAC/sad-anime.gif",
                    "https://media1.tenor.com/m/YJi8dRPoAFcAAAAC/sailor-moon-crying.gif",
                    "https://media1.tenor.com/m/zTfldsDR0j4AAAAd/aikatsu-aikatsu-stars.gif",
                    "https://media1.tenor.com/m/ZNu-H1ww2swAAAAC/ellenoar-seiran.gif",
                    "https://media1.tenor.com/m/dlTfWGczs5IAAAAC/homura-chika.gif",
                    "https://media1.tenor.com/m/bsCeGzjTHs0AAAAC/onimai-onaka.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} cries 😭`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'dance':
                const link = [
                    "https://media1.tenor.com/m/GOYRQva4UeoAAAAd/anime-dance.gif",
                    "https://media1.tenor.com/m/rRgs6XtH5kEAAAAd/hi-oomf-cute-anime-girl-vtuber.gif",
                    "https://media1.tenor.com/m/BgjMvz_ELtsAAAAd/anime-dance.gif",
                    "https://media1.tenor.com/m/xPVZSL9EE80AAAAC/anime-dance.gif",
                    "https://media1.tenor.com/m/db0yF9G7qn4AAAAC/cat-dance.gif",
                    "https://media1.tenor.com/m/fim-ddZD7c8AAAAC/dance-anime.gif",
                    "https://media1.tenor.com/m/DT4TI5l1B-kAAAAd/mashiro-mikakunin.gif",
                    "https://media1.tenor.com/m/imB5U5W-RTkAAAAC/dance-anime.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} dances!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'eat':
                const link = [
                    "https://media1.tenor.com/m/ZBO4pyuseVcAAAAC/engage-kiss-kanna.gif",
                    "https://media1.tenor.com/m/uk9xO0xpWoIAAAAC/burger-eating.gif",
                    "https://media1.tenor.com/m/ZJltjT6QMBwAAAAC/eating-anime.gif",
                    "https://media1.tenor.com/m/p5DGewKTyQAAAAAC/loli-dragon.gif",
                    "https://media1.tenor.com/m/rL9bf5nEuFUAAAAC/dragon-ball-eating.gif",
                    "https://media1.tenor.com/m/gQjxza31pxIAAAAd/my-dress-up-darling-anime-eat.gif",
                    "https://media1.tenor.com/m/v2Y1s3etfDUAAAAC/charlotte-anime.gif",
                    "https://media1.tenor.com/m/4XzCV-yPOroAAAAC/anime-eating.gif",
                    "https://media1.tenor.com/m/52qdiySrhQwAAAAd/yui-burger.gif",
                    "https://media1.tenor.com/m/twZc5kf2RT0AAAAC/kanna-kobayashi.gif",
                    "https://media1.tenor.com/m/eleW2f2bhI8AAAAC/aihara-enju.gif",
                    "https://media1.tenor.com/m/AxM95qw3wwAAAAAC/eating-anime.gif",
                    "https://media1.tenor.com/m/EJfXvrfjicQAAAAC/yuru-yuri-chinatsu.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} eats!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'giggle':
                const link = [
                    "https://media1.tenor.com/m/K6WDm9L78mgAAAAC/rezero-rem.gif",
                    "https://media1.tenor.com/m/SSErNdBhb8YAAAAC/hajimete-no-gal-gal.gif",
                    "https://media1.tenor.com/m/gRzf7IcsGj8AAAAC/laugh-tale.gif",
                    "https://media1.tenor.com/m/aRU6Zrm3LlQAAAAC/anime-cuteness.gif",
                    "https://media1.tenor.com/m/m0F-F4kmlYUAAAAC/the-100-girlfriends-that-really-really-really-really-really-love-you-100-girlfriends.gif",
                    "https://media1.tenor.com/m/MMcJXAHw1wwAAAAC/redhead-girl.gif",
                    "https://media1.tenor.com/m/UAUxINWYDnIAAAAC/kon.gif",
                    "https://media1.tenor.com/m/hhlvyrBNHoIAAAAC/anime-funny.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} giggles!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'happy':
                const link = [
                    "https://media1.tenor.com/m/jxoSU-VpuzQAAAAC/anime-anime-girl.gif",
                    "https://media1.tenor.com/m/NACzM0o4iv4AAAAC/happy-easter.gif",
                    "https://media1.tenor.com/m/MM3La2Dx0c4AAAAC/onimai-cute-anime-girl-smile-smiling.gif",
                    "https://media1.tenor.com/m/jAv5rzpUcc8AAAAC/anime-anime-happy.gif",
                    "https://media1.tenor.com/m/g8rtlSwFcdEAAAAd/slow-loop-koharu-minagi.gif",
                    "https://media1.tenor.com/m/pNUbjbQ6lCgAAAAC/happysugarlife-goodnight.gif",
                    "https://media1.tenor.com/m/ruU09sGPcCwAAAAd/happy-anime.gif",
                    "https://media1.tenor.com/m/lAfLMj3TnCYAAAAC/noela-fox-girl.gif",
                    "https://media1.tenor.com/m/ZQx1GOXHa68AAAAC/happy-anime.gif",
                    "https://media1.tenor.com/m/cDCkQ6BPlF4AAAAC/pat-pat-anime.gif",
                    "https://media1.tenor.com/m/UOnumIqo2CQAAAAC/anime-girl.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} is happy! 😊`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'mad':
                const link = [
                    "https://media1.tenor.com/m/cYRAeQqpaUMAAAAC/anime-angry-slow-loop.gif",
                    "https://media1.tenor.com/m/tx3x8ANgbBwAAAAC/the-dreaming-boy-is-a-realist-yumemiru-danshi.gif",
                    "https://media1.tenor.com/m/MvKZZ7JCkUMAAAAC/anime-angry.gif",
                    "https://media1.tenor.com/m/LwIS8XNh7pkAAAAC/i-want-cokie.gif",
                    "https://media1.tenor.com/m/uctXlnLUN0sAAAAC/anime-mutsumi.gif",
                    "https://media1.tenor.com/m/-qfnP6F_EtIAAAAC/yuru-yuri-chinatsu-yoshikawa.gif",
                    "https://media1.tenor.com/m/1oyFbLZFQacAAAAC/food-wars.gif",
                    "https://media1.tenor.com/m/paEqWTjFrsMAAAAC/angry-mad.gif",
                    "https://media1.tenor.com/m/hvd1qmceqqEAAAAC/mad-anime.gif",
                    "https://media1.tenor.com/m/Fqbq1RaAwt0AAAAC/anime-angry.gif",
                    "https://media1.tenor.com/m/u7Ub8seOA9kAAAAC/angry-defensive.gif",
                    "https://media1.tenor.com/m/7XcetqnNz70AAAAC/red-hair.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} is mad! 😡`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'plead':
                const link = [
                    "https://media1.tenor.com/m/4q5OwnFZJdEAAAAC/adorable-pleading.gif",
                    "https://media1.tenor.com/m/TgtTEClE92gAAAAd/crying-face-appeal.gif",
                    "https://media1.tenor.com/m/puJHeOtbn8UAAAAC/konasuba-tears.gif",
                    "https://media1.tenor.com/m/Y9g7q5u4W8IAAAAC/girl-please.gif",
                    "https://media1.tenor.com/m/4LQ38wHjsL0AAAAC/anime-girl.gif",
                    "https://media1.tenor.com/m/79G0dJYpf4EAAAAC/kiriya-evi-kiriya.gif",
                    "https://media1.tenor.com/m/ejVAMxHwW68AAAAC/please-begging.gif",
                    "https://media1.tenor.com/m/4-Wcadun8mIAAAAC/shiro-anime.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} pleads! 🥺`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'pout':
                const link = [
                    "https://media1.tenor.com/m/iNu8LXx2ECgAAAAC/senko-poute-hmph.gif",
                    "https://media1.tenor.com/m/03VCLMyKfL4AAAAC/pout-anime-pout.gif",
                    "https://media1.tenor.com/m/nvK39Flu2LwAAAAC/anime-fan27-pout.gif",
                    "https://media1.tenor.com/m/L2eobON0t84AAAAC/anime-pout.gif",
                    "https://media1.tenor.com/m/hR8XdCeC2psAAAAC/cute-pouting.gif",
                    "https://media1.tenor.com/m/wtSs_VCHYmEAAAAC/noela-angry.gif",
                    "https://media1.tenor.com/m/5zXUvByrCe8AAAAC/sora-no.gif",
                    "https://media1.tenor.com/m/yCR6JOoxS6wAAAAd/anime-angry.gif",
                    "https://media1.tenor.com/m/CZGY4W52elwAAAAC/anime-kubo-san.gif",
                    "https://media1.tenor.com/m/G_YeALOH-iAAAAAC/mao-amatsuka-mad.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} pouts! Hmph!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'sad':
                const link = [
                    "https://media1.tenor.com/m/_z0gtWtWHVEAAAAC/anime-kanna.gif",
                    "https://media1.tenor.com/m/FAE3AVLkjY4AAAAC/anime-sad.gif",
                    "https://media1.tenor.com/m/6Q-p7sIIFjkAAAAC/juvia-depressed.gif",
                    "https://media1.tenor.com/m/HPdVPFR-BasAAAAC/anime-sad.gif",
                    "https://media1.tenor.com/m/ecV_fJDGXoAAAAAC/anime-girl.gif",
                    "https://media1.tenor.com/m/sUDkbpP6WgsAAAAC/kon-azusa.gif",
                    "https://media1.tenor.com/m/QmGTdQZ0KnIAAAAd/fuuka-miyazawa-anime.gif",
                    "https://media1.tenor.com/m/Tn9mzxqYNs4AAAAd/kukuru-misakino-anime.gif",
                    "https://media1.tenor.com/m/L4uSxTj5a9sAAAAC/steins-gate-kurisu-makise.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} is sad ☹️`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'shy':
                const link = [
                    "https://media1.tenor.com/m/VrfSZUjiWn4AAAAC/shy-anime.gif",
                    "https://media1.tenor.com/m/C9uLsw79b1sAAAAC/anime-girl.gif",
                    "https://media1.tenor.com/m/Lr8FFeI5n3sAAAAC/kitsune-shy.gif",
                    "https://media1.tenor.com/m/laI7gaNmNQIAAAAd/seishun-buta-yarou-anime.gif",
                    "https://media1.tenor.com/m/33eZ88r_jC8AAAAC/blushing-anime-girl-hides.gif",
                    "https://media1.tenor.com/m/ojKYOiAuNyIAAAAC/azur-lane-shy.gif",
                    "https://media1.tenor.com/m/xEWvSOrPpWIAAAAC/miyuki-takara.gif",
                    "https://media1.tenor.com/m/Gps0S9hBnbgAAAAC/to-love-ru-golden-darkness.gif",
                    "https://media1.tenor.com/m/HfmV7nPyesAAAAAC/anime-tamako-market.gif",
                    "https://media1.tenor.com/m/B66MWZE1G4YAAAAC/anime-anime-shy.gif",
                    "https://media1.tenor.com/m/ojKYOiAuNyIAAAAC/azur-lane-shy.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} is shy! 😳`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'sleep':
                const link = [
                    "https://media1.tenor.com/m/Cj0YvuE94eoAAAAC/onimai-anime-sleep.gif",
                    "https://media1.tenor.com/m/HItBOocy6ikAAAAC/umaru-sleeping.gif",
                    "https://media1.tenor.com/m/-NDkB_h0KWsAAAAd/sleep-sleeping.gif",
                    "https://media1.tenor.com/m/qlxdd9DVMHUAAAAC/willcore-kon.gif",
                    "https://media1.tenor.com/m/Q-nEqZ_N2DkAAAAC/anime-sleep.gif",
                    "https://media1.tenor.com/m/dOEq7saPTaYAAAAC/honoka-kousaka-hanayo-koizumi.gif",
                    "https://media1.tenor.com/m/WBYwQI16uY4AAAAC/willcore-k-on.gif",
                    "https://media1.tenor.com/m/w8bVOlSAZkUAAAAC/spy-x-family-anya-spy-x-family.gif",
                    "https://media1.tenor.com/m/q1ha-5nykkkAAAAC/shachiku-san-anime-sleep.gif",
                    "https://media1.tenor.com/m/mZtNx5uAsgUAAAAC/kanna-kamui-go-to-sleep.gif",
                    "https://media1.tenor.com/m/c-M3EdgOiAsAAAAC/kanna-kanna-kamui.gif",
                    "https://media1.tenor.com/m/rYfLbmeRUpMAAAAC/kanna-kamui-kanna-chan.gif",
                    "https://media1.tenor.com/m/aQ3PeVBpTmsAAAAC/sleep-cute.gif",
                    "https://media1.tenor.com/m/Ij1zuvfJsHwAAAAC/loli-dragon.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} sleeps! 😴`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'spin':
                const link = [
                    "https://media1.tenor.com/m/hCfbgMlt0gQAAAAC/anime-spinning.gif",
                    "https://media1.tenor.com/m/JCUkBqoE9NsAAAAd/chika-fujiwara-kaguya-sama-love-is-war.gif",
                    "https://media1.tenor.com/m/4IqJedBCDo4AAAAC/spin-anime.gif",
                    "https://media1.tenor.com/m/CQmfNrX5MT4AAAAC/anime-spinning.gif",
                    "https://media1.tenor.com/m/Ob3ZdnEE1aUAAAAC/maya-gochiusa.gif",
                    "https://media1.tenor.com/m/1VBwgnE7xTIAAAAC/speeen-anime.gif",
                    "https://media1.tenor.com/m/aJcvC4aJvigAAAAC/urara-meirocho.gif",
                    "https://media1.tenor.com/m/FFa_xBUaG68AAAAC/hana-anime.gif",
                    "https://media1.tenor.com/m/xSVqCQ9wt8oAAAAd/rinne-berlinetta-magical-girl-lyrical-nanoha.gif",
                    "https://media1.tenor.com/m/mqAFe5kR2xwAAAAC/anime-girl-rotate-rotate.gif",
                    "https://media1.tenor.com/m/xvwaan7QCAYAAAAd/wakaba-girl-anime.gif",
                    "https://media1.tenor.com/m/442gjGV-udYAAAAC/speeen-anime.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} spins!`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'die':
                const link = [
                    "https://media1.tenor.com/m/3WRKCYqnYEsAAAAC/kermit-suicide.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} died 💀`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'tired':
                const link = [
                    "https://media1.tenor.com/m/AH5Z8hQe-fIAAAAC/mission-yozakura.gif",
                    "https://media1.tenor.com/m/urs-gwqkOV8AAAAd/juvia-juvia-lockser.gif",
                    "https://media1.tenor.com/m/BV0xBnKK6VIAAAAd/anime-sofa.gif",
                    "https://media1.tenor.com/m/1UjVG4tHsPQAAAAC/lucky-star-yawn.gif",
                    "https://media1.tenor.com/m/KsASo3twwLUAAAAC/tired-loli.gif",
                    "https://media1.tenor.com/m/-2mSlbqgBlwAAAAC/sleepy-anime.gif",
                    "https://media1.tenor.com/m/XMtczN4xPgEAAAAd/the-demon-girl-next-door-shamiko.gif",
                    "https://media1.tenor.com/m/XbwMjHt1_fUAAAAC/taiga-sleep.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} is tired 🥱`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'wave':
                const link = [
                    "https://media1.tenor.com/m/nQOSTbcTKZcAAAAC/anime-waves-hi.gif",
                    "https://media1.tenor.com/m/1MfQk9vFF7MAAAAC/anime-bye-bye-maki.gif",
                    "https://media1.tenor.com/m/tzbVcnK8iGsAAAAC/keai-cute.gif",
                    "https://media1.tenor.com/m/dCTUyNt499gAAAAC/kobayashi-dragon.gif",
                    "https://media1.tenor.com/m/arRLkSbIcJQAAAAC/waving-cat.gif",
                    "https://media1.tenor.com/m/AJrPXQyoNCQAAAAC/kanokari-anime-wave.gif",
                    "https://media1.tenor.com/m/vNapCUP0d3oAAAAC/pjsk-pjsk-anime.gif",
                    "https://media1.tenor.com/m/4iwQ12BEPzYAAAAC/wave-blushing.gif",
                    "https://media1.tenor.com/m/BfOaQrPTl4YAAAAC/wataten-watashi-ni-tenshi-ga-maiorita.gif",
                    "https://media1.tenor.com/m/bwkDOmCtqTEAAAAC/wave-cute.gif",
                    "https://media1.tenor.com/m/NplHmWoUid0AAAAC/anime-girl.gif",
                    "https://media1.tenor.com/m/AuBOgaPV41cAAAAC/shinya-shinyahiragi.gif",
                    "https://media1.tenor.com/m/ILT5-vuNzB8AAAAC/anime-anime-wave-bye.gif",
                    "https://media1.tenor.com/m/bGS2OhhN9tsAAAAC/hello-gojo-satoru.gif",
                    "https://media1.tenor.com/m/TQ3Jul8r2DwAAAAC/anime-boy.gif",
                    "https://media1.tenor.com/m/SPkUmWsvnGIAAAAd/sumi-sakurasawa-rent-a-girlfriend.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} waves! 👋`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'scared':
                const link = [
                    "https://media1.tenor.com/m/pGopKd9Rr6UAAAAC/spy-x-family-anya.gif",
                    "https://media1.tenor.com/m/RhyxCbENd6YAAAAC/umaru-chan-scared.gif",
                    "https://media1.tenor.com/m/WcxwXmB-YiIAAAAC/anime-pillow.gif",
                    "https://media1.tenor.com/m/wWmjeJgcFr4AAAAC/nervous-anime.gif",
                    "https://media1.tenor.com/m/m3hU0lQpvgYAAAAC/yuko-yoshida.gif",
                    "https://media1.tenor.com/m/zaA5Pjj5uLEAAAAC/what-anime.gif",
                    "https://media1.tenor.com/m/-JR_teNMOXEAAAAC/ijiranaide-nagatoro-nagataro.gif",
                    "https://media1.tenor.com/m/s47WLGGXpykAAAAC/caca.gif",
                    "https://media1.tenor.com/m/xOkEyRSthr8AAAAC/zom-100-shizuka.gif",
                    "https://media1.tenor.com/m/Jqu1G_iJ3UAAAAAC/spy-x-family-anime.gif",
                    "https://media1.tenor.com/m/8YzW_09IUlsAAAAC/kyoko-kyouko.gif",
                    "https://media1.tenor.com/m/H6aXU6tlAF4AAAAC/chika-fujiwara.gif",
                    "https://media1.tenor.com/m/AfnHLh8b3g4AAAAC/mira-yamana-scared-anime-girl.gif",
                    "https://media1.tenor.com/m/am4tzoTsnRoAAAAd/ichigaya-arisa-bang-dream.gif",
                    "https://media1.tenor.com/m/lxHeSjvoIqYAAAAC/ellenoar-seiran.gif",
                    "https://media1.tenor.com/m/k-20hdZMXZcAAAAC/scared-anime.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} is scared 😨`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'sigh':
                const link = [
                    "https://media1.tenor.com/m/AH5Z8hQe-fIAAAAC/mission-yozakura.gif",
                    "https://media1.tenor.com/m/0AOiFgMsBWcAAAAC/sigh.gif",
                    "https://media1.tenor.com/m/WqdUzHZ4CfAAAAAC/anime-nichijou.gif",
                    "https://media1.tenor.com/m/eWoBMxka7_MAAAAC/anime-sigh.gif",
                    "https://media1.tenor.com/m/XLOFIrDqe_EAAAAd/kanna-comf-kanna.gif",
                    "https://media1.tenor.com/m/GpeoeGe1yiMAAAAd/86-frederica.gif",
                    "https://media1.tenor.com/m/HAsTIppa8lAAAAAC/inaba-himeko-himeko-inaba.gif",
                    "https://media1.tenor.com/m/w-KmooSalMgAAAAd/kuroneko-oreimo.gif",
                    "https://media1.tenor.com/m/Qc2kUr8hXC4AAAAC/sigh-new-game.gif",
                    "https://media1.tenor.com/m/0EgQgZWi8WoAAAAC/sigh-yamadakun-and-the-seven-witches.gif",
                    "https://media1.tenor.com/m/c4Xa3T8AXRwAAAAC/anime-otoboku.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} sighs 😮‍💨`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'blush':
                const link = [
                    "https://media1.tenor.com/m/ia9ZGb4SMWcAAAAC/anime-blush-blush.gif",
                    "https://media1.tenor.com/m/wnPcA9_CUUMAAAAd/anime-a-sign-of-affection.gif",
                    "https://media1.tenor.com/m/sXv8LmKckugAAAAC/real.gif",
                    "https://media1.tenor.com/m/pKUHUVvLjsgAAAAC/tokyo-mew-mew-mew-ichigo.gif",
                    "https://media1.tenor.com/m/lkj1vfUtUggAAAAC/when-supernatural-battles-became-commonplace-embarrassed.gif",
                    "https://media1.tenor.com/m/GTlVGcQI10YAAAAC/hyakkano-100-girlfriends.gif",
                    "https://media1.tenor.com/m/Zk1ugYUMh4wAAAAC/idk.gif",
                    "https://media1.tenor.com/m/xbO3sOCQBA0AAAAC/ansatsu-kyoushitsu-blush.gif",
                    "https://media1.tenor.com/m/30a9CPebaZoAAAAC/koiseka-anime-blush.gif",
                    "https://media1.tenor.com/m/uqmvkg7EWZoAAAAd/my-tiny-senpai-shiori-katase.gif",
                    "https://media1.tenor.com/m/rtAQFoskUBgAAAAC/uchi-no-kaisha-no-chiisai-senpai-no-hanashi-my-tiny-senpai.gif",
                    "https://media1.tenor.com/m/GiOGySHeERMAAAAC/anime-blush.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} blushes! >///<`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'drool':
                const link = [
                    "https://media1.tenor.com/m/GvCIffcGL78AAAAC/drooling-anime.gif",
                    "https://media1.tenor.com/m/9xnaRtPhxtkAAAAC/anime-omg.gif",
                    "https://media1.tenor.com/m/b4ZffBO1UJQAAAAC/drool-anime.gif",
                    "https://media1.tenor.com/m/IfK7uRjO7EAAAAAC/sword-art-online-anime.gif",
                    "https://media1.tenor.com/m/aA7OPQ8eSOUAAAAC/drool-anime.gif",
                    "https://media1.tenor.com/m/NeAZLYnvQIAAAAAC/eve-callusileader-anime-drool.gif",
                    "https://media1.tenor.com/m/GvEuJVdt0rwAAAAC/animedrool-drool.gif",
                    "https://media1.tenor.com/m/R4ePs2JuXigAAAAC/roze-drooling-roze.gif",
                    "https://media1.tenor.com/m/78-xSHCXiJsAAAAC/kuuko-cthuko.gif",
                    "https://media1.tenor.com/m/61ymAKtd09cAAAAC/anime-chew.gif",
                    "https://media1.tenor.com/m/Ueod0i2f1kEAAAAC/anime-princess-connect.gif",
                    "https://media1.tenor.com/m/_5zwZfRMtmMAAAAC/toriko-anime.gif",
                    "https://media1.tenor.com/m/B37nAhYkvZcAAAAC/black-clover-anime.gif",
                    "https://media1.tenor.com/m/uVWf5krTa_EAAAAC/jahy-sama-jahy.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} drools! 🤤`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }

        switch (command) {
            case 'explode':
                const link = [
                    "https://media1.tenor.com/m/Gn5AvCtPi8EAAAAC/xowillow-ok.gif",
                    "https://media1.tenor.com/m/lVOFhOKx3A8AAAAd/triggered-anime.gif",
                    "https://media1.tenor.com/m/6HWh4uT5W24AAAAd/bocchi-explode.gif",
                    "https://media1.tenor.com/m/UvQSFy3C9hcAAAAd/awesome-anime.gif",
                    "https://media1.tenor.com/m/cRXA1AlzH7UAAAAC/kaf-kafu.gif",
                    "https://media1.tenor.com/m/Oxl7m7l88FwAAAAC/megumin-konosuba.gif",
                    "https://media1.tenor.com/m/Q7mUCTKfpDYAAAAC/beautiful-explosion.gif",
                    "https://media1.tenor.com/m/Uii_52nKGDcAAAAC/symphogear-senki-zesshou-symphogear.gif"
                ];
                const gif = link[Math.floor(Math.random() * link.length)];
        
                const embed = new EmbedBuilder()
                .setColor("Fuchsia")
                .setAuthor({ name: `${interaction.member.displayName} explodes! 🤯`, iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}` })
                .setImage(gif)
        
                await interaction.reply({ embeds: [embed] });
        }
    }
}