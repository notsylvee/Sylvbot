module.exports = {
    name: "messageCreate",
    async execute(message) {
      if (message.author.bot || !message.guild) return;
      if (message.guild.id !== "1217915488332550218") return;

      let roleId = "0";
      if (message.author.id === "1018686464000807003") roleId = "1369875325663842334"; /* sylvee */
      if (message.author.id === "743779456530907216") roleId = "1292303341594087574"; /* blozzy */
      if (message.author.id === "431220802797568001") roleId = "1370262148923654225"; /* tharen */
      if (message.author.id === "788222689126776832") roleId = "1330004407449948180"; /* valk */
      if (message.author.id === "1137552202265796638") roleId = "1248506339496300608"; /* denny */
      if (message.author.id === "457353908524941335") roleId = "1264765642448572569"; /* otter */
      if (message.author.id === "416799608744706048") roleId = "1252437304803590187"; /* kelp */
      if (message.author.id === "596356028187148309") roleId = "1269577220662235147"; /* stelle */

      if (roleId === "0") return;
      const role = message.guild.roles.cache.get(roleId);
  
      let msg = message.content;
      let hex = msg.substr(msg.length - 6);
      if (message.content.toLowerCase().startsWith("<@953885359668871238> role color #")) role.edit({ color: `#${hex}` }), message.channel.send(`-# Your role color has been changed to #${hex}`);
    },
  };