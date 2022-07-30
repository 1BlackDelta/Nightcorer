const { Client, Collection, MessageEmbed } = require(`discord.js`);
module.exports = {
  name: "testembed",
  aliases: ["tembed","te"],
  cooldown: 1,
  execute(message) {
    message.react("✅");
    message.reply(new MessageEmbed().setColor("#F0EAD6").setTitle("Working!"));
  }
}