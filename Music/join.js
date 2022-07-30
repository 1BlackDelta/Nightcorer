const { attentionembed } = require("../util/attentionembed");

module.exports = {
  name: "join",
  aliases: ["enter", "j"],
  cooldown: 3,

  execute(message, client) {

    if (!message.guild) return;
    
    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);
    const queue = message.client.queue.get(message.guild.id);

    if (!channel) return attentionembed(message, "Please join a Voice Channel first.");

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return attentionembed(message, "I dont have permissions to join the channel.");

    if (!permissions.has("SPEAK"))
      attentionembed(message, "I joined the channel but I do not have permissions to speak.");

    if (channel === message.guild.me.voice.channel)
      return attentionembed(message, `I am already connected to your channel.`);

    if (channel != message.guild.me.voice.channel) {
      if(!message.member.hasPermission("MOVE_MEMBERS")) return attentionembed(message, `You do not have permissions to move me.`)

    if (channel.full) return attentionembed(message, `Your channel is full.`)
    };

    channel.join()
    message.channel.send('Joined ✅');
  }
}