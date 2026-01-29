module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    if (message.channel.id !== `1466301788478247076`) return;
    if (message.content !== "America ya :D") {message.delete}
  }
}