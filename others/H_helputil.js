const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: "helputility",
  aliases: ["hu"],
  cooldown: 3,
  async execute(message) {
    message.react("✅");

    const db = require('quick.db');

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = PREFIX;

    message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle("Utility Commands")
      .setDescription(`${prefix}help | **Gives the starting help page**\n${prefix}prefix [new prefix] | **Changes the bots prefix for the server**\n${prefix}ping | **Gives you the current bot latency**\n${prefix}kick [@User] | **Kicks a user, if the permissions are enough to do so**\n${prefix}ban [@User] | **Perm bans a user, if the permissions are enough to do so**\n${prefix}uptime | **Tells you how much time the bot was online since the last reboot/crash**\n${prefix}channelclear [amount] | **Deletes the specified amount of messages in the channel**\n${prefix}userinfo [@mention] | **Gives the main informations of the specified user**`)
      .setFooter("Developed for you by: [BLK] BlackDelta#0725", "https://cdn.discordapp.com/avatars/577839014103613471/0688852cdf38a685cd5267e82f2a28fa.png?size=256"));
  }
}