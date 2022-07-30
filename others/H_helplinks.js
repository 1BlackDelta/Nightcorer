const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: "helplinks",
  aliases: ["hl"],
  cooldown: 3,
  async execute(message) {
    message.react("✅");

    const db = require('quick.db');

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = PREFIX;

    message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle("Links Commands")
      .setDescription(`${prefix}invite | **Gives you the link where you can invite and upvote the bot**\n${prefix}support | **Gives you the invite link for the official discord support server**\n${prefix}website | **Gives you the link to the official Nightcorer webpage**`)
      .setFooter("Developed for you by: [BLK] BlackDelta#0725", "https://cdn.discordapp.com/avatars/577839014103613471/0688852cdf38a685cd5267e82f2a28fa.png?size=256"));
  }
}