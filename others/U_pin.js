const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: 'pin',
  cooldown: 2,
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Ping embed
    message.reply(new MessageEmbed()
    .setColor("#F0EAD6")
    .setTitle(":ping_pong: `" + client.ws.ping + "ms`")
    .setDescription(":pushpin: You mean ping?")
    );
  }
}