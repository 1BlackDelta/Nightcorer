const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "website",
  aliases: ["web", "site"],
  execute(message) {

    let webEmbed = new MessageEmbed()
      .setTitle("Visit the Official Website!")
      .setDescription("Visit the Official Website if you need Direct Help From the Developers, or if You Want to Check the Bot's GitHub.")
      .setColor("#F0EAD6")
      .setAuthor('Nightcorer Site','https://cdn.discordapp.com/attachments/778954384667181076/864948750392098846/Nightcorer-spin-nuovo.gif')
      .addField(`Link:`, 'https://nightcorerbot.blackdelta.repl.co/', true)

    webEmbed.setTimestamp();

    return message.channel.send(webEmbed).catch(console.error);
  }
};