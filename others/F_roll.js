const { Client, Collection, MessageEmbed } = require(`discord.js`);
module.exports = {
  name: "roll",
  aliases: ["randomnumber", "number"],
  cooldown: 2,
  execute(message) {

    let rdmvalue = Math.round(Math.random() * 1000)
    const RollEmb = new MessageEmbed()
                  .setColor("#F0EAD6")
                  .setTitle(`✨  ${message.author.tag} has got ${rdmvalue}`)
    
      message.react("✅");
    message.reply(RollEmb);
}
}