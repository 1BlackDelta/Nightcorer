const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "support",
  aliases: ["sup", "server", "wtfishappeningplshelpme"],
  execute(message) {

    let supportEmbed = new MessageEmbed()
      .setTitle("Join our server!")
      .setDescription("Having problems using the bot? Ask for help on the official Discord Server!")
      .setColor("#F0EAD6")
      .setAuthor('Nightcorer Server','https://cdn.discordapp.com/attachments/778954384667181076/864948750392098846/Nightcorer-spin-nuovo.gif')
      .addField(`Server:`, 'https://discord.gg/THh9pmKhMf', true)

    supportEmbed.setTimestamp();

    return message.channel.send(supportEmbed).catch(console.error);
  }
};