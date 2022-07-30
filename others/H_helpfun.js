const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: "helpfun",
  aliases: ["hf"],
  cooldown: 3,
  async execute(message) {
    message.react("✅");

    const db = require('quick.db');

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = PREFIX;

    message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle("Fun Commands")
      .setDescription(`${prefix}embed [text] | **Sends a custom message as embed**\n${prefix}meme | **Gives you a random meme from the good old meme subreddits**\n${prefix}8Ball [question] | **Gives an answer to your questions**\n${prefix}roll | **Gives you a random number from 0 to 1000 (useful for games)**`)
      .setFooter("Developed for you by: [BLK] BlackDelta#0725", "https://cdn.discordapp.com/avatars/577839014103613471/0688852cdf38a685cd5267e82f2a28fa.png?size=256"));
  }
}