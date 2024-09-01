const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("useremote")
    .setDescription("Use an emote command")
    //15
    .addSubcommand((command) =>
      command
        .setName("bite")
        .setDescription("Bite someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to bite")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("cuddle")
        .setDescription("Cuddle someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to cuddle")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("holdhands")
        .setDescription("Hold someones hand!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Whos hand you want to hold")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("hug")
        .setDescription("Give someone a hug!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to hug")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("kick")
        .setDescription("Kick someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to kick")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("kill")
        .setDescription("Kill someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to kill")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("kiss")
        .setDescription("Give someone a kiss!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to kiss")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("lick")
        .setDescription("Lick someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to lick")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("pat")
        .setDescription("Pat someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to pat")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("poke")
        .setDescription("Poke someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to poke")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("slap")
        .setDescription("Slap someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to slap")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("tickle")
        .setDescription("Tickle someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to tickle")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("spit")
        .setDescription("Spit on someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to spit on")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("tuck-in")
        .setDescription("Tuck someone in!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to tuck in")
            .setRequired(true),
        ),
    )
    .addSubcommand((command) =>
      command
        .setName("throw")
        .setDescription("Throw someone!")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Who you want to throw")
            .setRequired(true),
        ),
    ),

  async execute(interaction, client) {
    const command = interaction.options.getSubcommand();

    switch (command) {
      case "bite":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/5mVQ3ffWUTgAAAAC/anime-bite.gif",
          "https://media1.tenor.com/m/ECCpi63jZlUAAAAC/anime-bite.gif",
          "https://media1.tenor.com/m/jQ1anSa1FekAAAAC/bite-me.gif",
          "https://media1.tenor.com/m/diRQGFt9T1EAAAAC/nom-kiwi-nom.gif",
          "https://media1.tenor.com/m/QvLlkNlsRDAAAAAC/nom-nom-anime-love.gif",
          "https://media1.tenor.com/m/1LtA9dSoAIQAAAAC/zero-no-tsukaima-bite.gif",
          "https://media1.tenor.com/m/TX6YHUnHJk4AAAAC/mao-amatsuka-gj-bu.gif",
          "https://media1.tenor.com/m/BVFbvCZKNEsAAAAC/princess-connect-anime-bite.gif",
          "https://media1.tenor.com/m/gVab5HFISIwAAAAC/lesbian-yuri.gif",
          "https://media1.tenor.com/m/2LQyH42t1CgAAAAC/anime-funny.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} bites ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "cuddle":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/c2SMIhi33DMAAAAC/cuddle-bed-hug.gif",
          "https://media1.tenor.com/m/bLttPccI_I4AAAAC/cuddle-anime.gif",
          "https://media1.tenor.com/m/P54lVoy1FxkAAAAd/kuzu-no-honkai-hug.gif",
          "https://media1.tenor.com/m/S_RwcMaNX3sAAAAC/yuri-cuddle.gif",
          "https://media1.tenor.com/m/ch1kq7TOxlkAAAAC/anime-cuddle.gif",
          "https://media1.tenor.com/m/RR4YJdzCJRMAAAAd/chainsaw-man-hug.gif",
          "https://media1.tenor.com/m/Yf7E7BCC3McAAAAC/cuddle-anime.gif",
          "https://media1.tenor.com/m/9TN_Wmmvh7sAAAAC/anime-cuddle.gif",
          "https://media1.tenor.com/m/Dc5yd05wu_cAAAAC/couple-hug.gif",
          "https://media1.tenor.com/m/ORLdQXrQFvEAAAAd/miss-kobayashis-dragon-maid-anime.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} cuddles ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "holdhands":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/WUZAwo5KFdMAAAAd/love-holding-hands.gif",
          "https://media1.tenor.com/m/qZ5UWbLAEBAAAAAC/val-ally-anime.gif",
          "https://media1.tenor.com/m/s-yu5FESSfwAAAAC/we-never-know-xiaorinajin-au.gif",
          "https://media1.tenor.com/m/4aRC-mZsSFsAAAAC/asthetic-anime.gif",
          "https://media1.tenor.com/m/-76rfR0BNTAAAAAC/anime-couple-hand-holding.gif",
          "https://media1.tenor.com/m/by71aaUwdkYAAAAC/anime-holding-hands.gif",
          "https://media1.tenor.com/m/yVU0CGpQuYsAAAAd/holding-hands.gif",
          "https://media1.tenor.com/m/K72S4MlYBjAAAAAd/sumi-sakurasawa-kazuya-kinoshita.gif",
          "https://media1.tenor.com/m/Nl7fSSTzc5IAAAAC/anime-yama-no-susume.gif",
          "https://media1.tenor.com/m/6WLc223yIA4AAAAC/noel-anime.gif",
          "https://media1.tenor.com/m/vyVrakxE8swAAAAC/anime-love.gif",
          "https://media1.tenor.com/m/4wqTSH9Ep30AAAAC/couple-anime.gif",
          "https://media1.tenor.com/m/9wGMPNAAnewAAAAd/horimiya-hand-holding.gif",
          "https://media1.tenor.com/m/QO3T5tZ4Ia4AAAAd/mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} holds ${member.displayName}'s hand!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "hug":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/kCZjTqCKiggAAAAC/hug.gif",
          "https://media1.tenor.com/m/9e1aE_xBLCsAAAAC/anime-hug.gif",
          "https://media1.tenor.com/m/udohH7XQDHEAAAAC/hug.gif",
          "https://media1.tenor.com/m/IpGw3LOZi2wAAAAC/hugtrip.gif",
          "https://media1.tenor.com/m/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif",
          "https://media1.tenor.com/m/P-8xYwXoGX0AAAAC/anime-hug-hugs.gif",
          "https://media1.tenor.com/m/Qe6rYPM-FMkAAAAC/prsk-pjsekai.gif",
          "https://media1.tenor.com/m/TsEh_PJhTKwAAAAC/pjsk-pjsk-anime.gif",
          "https://media1.tenor.com/m/g7bSW61_zQEAAAAC/anime-hug.gif",
          "https://media1.tenor.com/m/YuwEoQvncPgAAAAC/hug.gif",
          "https://media1.tenor.com/m/lrLGwMxjIMMAAAAC/shio-anime.gif",
          "https://media1.tenor.com/m/qfQaTR-jTzoAAAAd/anime-hug-kunoichi-tsubaki-no-mune-no-uchi.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} hugs ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "kick":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/Lyqfq7_vJnsAAAAC/kick-funny.gif",
          "https://media1.tenor.com/m/o52AZQZ_PloAAAAC/kick-anime.gif",
          "https://media1.tenor.com/m/QxoBMmf2bRwAAAAC/jormungand-anime.gif",
          "https://media1.tenor.com/m/NYZq5QT9o-UAAAAC/chuunibyou-nibutani.gif",
          "https://media1.tenor.com/m/mEgexCY-65QAAAAC/toradora-taiga.gif",
          "https://media1.tenor.com/m/6JTiWrb8oOYAAAAC/kick.gif",
          "https://media1.tenor.com/m/bpgPEPfFlnIAAAAd/yeet-anime.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} kicks ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "kill":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/NbBCakbfZnkAAAAC/die-kill.gif",
          "https://media1.tenor.com/m/UCQAbj2zULQAAAAC/anime-smash.gif",
          "https://media1.tenor.com/m/jrnH6CdNne0AAAAC/2s.gif",
          "https://media1.tenor.com/m/b7UhYIWfmXEAAAAC/yumeko-mirai-nikki.gif",
          "https://media1.tenor.com/m/Gg4wSkuH6b4AAAAC/anime-manga.gif",
          "https://media1.tenor.com/m/Mn4W4D899WEAAAAC/ira-gamagoori-attack.gif",
          "https://media1.tenor.com/m/CWsbJDl70tsAAAAC/shimoneta.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} kills ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "kiss":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/ye6xtORyw_8AAAAC/2.gif",
          "https://media1.tenor.com/m/BZyWzw2d5tAAAAAC/hyakkano-100-girlfriends.gif",
          "https://media1.tenor.com/m/b7DWF8ecBkIAAAAC/kiss-anime-anime.gif",
          "https://media1.tenor.com/m/9u2vmryDP-cAAAAC/horimiya-animes.gif",
          "https://media1.tenor.com/m/2ufYUI2sVFoAAAAC/kiss.gif",
          "https://media1.tenor.com/m/SYwRyd6N1UIAAAAC/anime-kiss.gif",
          "https://media1.tenor.com/m/9OV4Q-nMTxsAAAAC/yosuga-no-sora-anime-kiss.gif",
          "https://media1.tenor.com/m/APN_rYYwVCQAAAAC/runa-shirakawa-ryuuto-kashima.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} kisses ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "lick":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/0LMxPQdFBKAAAAAC/nekopara-kiss.gif",
          "https://media1.tenor.com/m/30jarFTFk5kAAAAC/anime-girl.gif",
          "https://media1.tenor.com/m/c833DFWYQPcAAAAC/wtf-lick-face.gif",
          "https://media1.tenor.com/m/Mwz2ih3-a-cAAAAC/anime-anime-kasumi.gif",
          "https://media1.tenor.com/m/Go7wnhOWjSkAAAAC/anime-lick-face.gif",
          "https://media1.tenor.com/m/WEV6KvZIoAIAAAAC/anime-hybrid-heart.gif",
          "https://media1.tenor.com/m/zoPOIvogEpwAAAAC/lick.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} licks ${member.displayName}! 👅`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "pat":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/kIh2QZ7MhBMAAAAC/tsumiki-anime.gif",
          "https://media1.tenor.com/m/E6fMkQRZBdIAAAAC/kanna-kamui-pat.gif",
          "https://media1.tenor.com/m/wLqFGYigJuIAAAAC/mai-sakurajima.gif",
          "https://media1.tenor.com/m/Dbg-7wAaiJwAAAAC/aharen-aharen-san.gif",
          "https://media1.tenor.com/m/RDfGm9ftwx0AAAAC/anime-pat.gif",
          "https://media1.tenor.com/m/8DaE6qzF0DwAAAAC/neet-anime.gif",
          "https://media1.tenor.com/m/fro6pl7src0AAAAC/hugtrip.gif",
          "https://media1.tenor.com/m/9EVQq2GdJU0AAAAC/wataten-watashi-ni-tenshi-ga-maiorita.gif",
          "https://media1.tenor.com/m/2oOTpioZ_j4AAAAC/pet-cute.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} pats ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "poke":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/4OHxyGd4qp0AAAAC/boop-nose.gif",
          "https://media1.tenor.com/m/1YMrMsCtxLQAAAAC/anime-poke.gif",
          "https://media1.tenor.com/m/RmQElPHERIoAAAAC/boop-anime.gif",
          "https://media1.tenor.com/m/QDNTqOInK5MAAAAC/anime-poke.gif",
          "https://media1.tenor.com/m/_vVL5fuzj4cAAAAC/nagi-no.gif",
          "https://media1.tenor.com/m/iu_Lnd86GxAAAAAC/nekone-utawarerumono.gif",
          "https://media1.tenor.com/m/BRiG6X6tYtEAAAAC/poke.gif",
          "https://media1.tenor.com/m/0i9CGM3SQsYAAAAC/anime-poke.gif",
          "https://media1.tenor.com/m/vu1AUXE8wtsAAAAd/anime-sleep.gif",
          "https://media1.tenor.com/m/jNx0V84WbqkAAAAC/anime-anime-poke.gif",
          "https://media1.tenor.com/m/5j7eivfftw8AAAAC/poke.gif",
          "https://media.tenor.com/W5Sqx8YavwYAAAAM/chtholly-nota-seniorious-suka-suka.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} pokes ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "slap":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/Ws6Dm1ZW_vMAAAAC/girl-slap.gif",
          "https://media1.tenor.com/m/XiYuU9h44-AAAAAC/anime-slap-mad.gif",
          "https://media1.tenor.com/m/7xFcP1KWjY0AAAAC/no.gif",
          "https://media1.tenor.com/m/cpWuWnOU64MAAAAC/bofetada.gif",
          "https://media1.tenor.com/m/p-RMgSXHMCIAAAAC/diosa-bocchi.gif",
          "https://media1.tenor.com/m/e4IGgnBm9ZIAAAAC/anime-anime-blush.gif",
          "https://media1.tenor.com/m/8Oh_VMwp8k0AAAAC/slap.gif",
          "https://media1.tenor.com/m/-JKgXtlAQo8AAAAC/slap-anime.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} slaps ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "tickle":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/l3c7tV1zYD4AAAAC/date-a-live-date-a-live-iv.gif",
          "https://media1.tenor.com/m/UCHNhsWSF-gAAAAC/classroom-of-the-elite-youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu.gif",
          "https://media1.tenor.com/m/dC1HN-p-z1YAAAAd/onimai-momiji-hozuki.gif",
          "https://media1.tenor.com/m/Li-ya799Ni4AAAAC/onimai-oniichan-wa-oshimai.gif",
          "https://media1.tenor.com/m/TZZrlveuFmQAAAAC/nezuko-mitsuri.gif",
          "https://media1.tenor.com/m/YhS9TU4Ig40AAAAC/dragon-maid-tickling.gif",
          "https://media1.tenor.com/m/sa1QuA9GFaoAAAAC/anime-tickle.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} tickles ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "spit":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/aKSY2XuSpcwAAAAC/anime-spit.gif",
          "https://media1.tenor.com/m/xq7jWN9rIKIAAAAC/d4dj-first-mix-anime.gif",
          "https://media1.tenor.com/m/heztdFpNuocAAAAC/spit-anime.gif",
          "https://media1.tenor.com/m/xrnVSkollW4AAAAC/anime-spit-fullmetal-alchemist.gif",
          "https://media1.tenor.com/m/CEubYcaDFP8AAAAC/spit-anime.gif",
          "https://media1.tenor.com/m/w_Z2432EnWAAAAAC/spit-anime.gif",
          "https://media1.tenor.com/m/9cc2vI7xxk0AAAAC/sargun-spit.gif",
          "https://media1.tenor.com/m/sBzYrs4eu8oAAAAC/surprised-shookt.gif",
          "https://media1.tenor.com/m/5s7LvtsHO9MAAAAC/toradora-anime.gif",
          "https://media1.tenor.com/m/mAdlcGBQKVAAAAAC/spit-take-rukia.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} spits on ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "tuck-in":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/9VhTkHsT0toAAAAC/lawrence-holo.gif",
          "https://media1.tenor.com/m/eV8K1qwgDBcAAAAC/last-order-last.gif",
          "https://media1.tenor.com/m/9J_bIAmXEeAAAAAC/anime-sleep.gif",
          "https://media1.tenor.com/m/53x8ihyYsrAAAAAd/maid-anime.gif",
          "https://media1.tenor.com/m/yvClUNKNi7UAAAAC/sailor-moon-chibiusa.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} tucks in ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }

    switch (command) {
      case "throw":
        const user = interaction.options.getUser("user");
        const member = await interaction.guild.members.fetch(user.id);
        const ID = user.id;
        const link = [
          "https://media1.tenor.com/m/VaRDRo2dqSAAAAAC/vnc-vanitas.gif",
          "https://media1.tenor.com/m/MSJazsGdIcAAAAAC/out-fly.gif",
          "https://media1.tenor.com/m/CpfHvvJBoxwAAAAd/swim-throw.gif",
          "https://media1.tenor.com/m/rvsoX8t1XQYAAAAC/away-with-you-bitch-please.gif",
          "https://media1.tenor.com/m/BwVhHs5XfDsAAAAC/haikyuu-sh%C5%8Dy%C5%8Dhinata.gif",
          "https://media1.tenor.com/m/a7_eqUHaC64AAAAC/anime-yeet.gif",
          "https://media1.tenor.com/m/ftK0hpFM3VYAAAAd/anime-re-zero.gif",
          "https://media1.tenor.com/m/sIBmF8vS9xgAAAAC/joshiraku-hit.gif",
          "https://media1.tenor.com/m/tehNy251B_oAAAAC/toss-throw.gif",
        ];
        const gif = link[Math.floor(Math.random() * link.length)];

        if (interaction.member.id === ID)
          return await interaction.reply({
            content: "You cannot use this command on yourself",
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setColor("Fuchsia")
          .setAuthor({
            name: `${interaction.member.displayName} throws ${member.displayName}!`,
            iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
          })
          .setImage(gif);

        await interaction.reply({ embeds: [embed] });
    }
  },
};
