const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 3,
  async execute(message) {
    message.react("✅");

    const db = require('quick.db');

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = PREFIX;

    message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle("Nightcorer's Help Page")
      .setDescription(`Use:\n\n- ${prefix}helpmusic  => **For music commands**\n- ${prefix}helplinks => **For commands which will give you invites/links**\n- ${prefix}helputility => **For settings and utility commands**\n- ${prefix}helpfun => **For fun commands**`)
      .setFooter("Developed for you by: [BLK] BlackDelta#0725", "https://cdn.discordapp.com/avatars/577839014103613471/0688852cdf38a685cd5267e82f2a28fa.png?size=256"));
  }
}