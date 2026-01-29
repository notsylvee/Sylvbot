module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.channel.id !== `1466301788478247076`) return;
    if (message.content !== "Hallo :D") {message.delete()}
  }
}