const { attentionembed } = require("../util/attentionembed");

module.exports = {
  name: "leave",
  aliases: ["disconnect", "disc", "d"],
  cooldown: 4,

  execute(message) {
    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);
    
    if (!channel) return attentionembed(message, "Join my voice channel first.")

    if (!message.guild.me.voice.channel) return attentionembed(message, "I am not connected to a voice channel.")

    if (channel.id !== message.guild.me.voice.channel.id) return attentionembed(message, "I am not in your voice channel.")

    if (serverQueue) {
      serverQueue.connection.dispatcher.destroy();
      channel.leave();
      message.client.queue.delete(message.guild.id);
      serverQueue.textChannel.send('Disconnected ✅')
      return
    }
    channel.leave();

    message.client.queue.delete(message.guild.id);
    message.channel.send('Disconnected ✅')
  }
};