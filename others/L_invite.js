const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("You like using Nightcorer? Great, Thank you! Here a useful invite link you can use to share it, or invite it to your servers. Dont forget to upvote it!")
      .setColor("#F0EAD6")
      .setAuthor('Nightcorer','https://cdn.discordapp.com/attachments/778954384667181076/864948750392098846/Nightcorer-spin-nuovo.gif')
      .addField(`Use the following link to add Nightcorer to your discord server`, 'https://discordbotlist.com/bots/nightcorer', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};