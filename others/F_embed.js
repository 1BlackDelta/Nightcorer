const PREFIX = require(`../config.json`)
module.exports = {
  name: 'embed',
  cooldown: 2,
  execute(message, args, client) {

    prefix = PREFIX
    if (message.content.startsWith(`${prefix}embed`)) {
    //define saymsg
      const saymsg = message.content.slice(Number(prefix.length) + 5)
      //define embed
      const embed = new Discord.MessageEmbed()
        .setColor("#F0EAD6")
        .setDescription(saymsg)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
      //delete the Command
      message.delete({ timeout: 2500 })
      //send the Message
      message.channel.send(embed)
    }
  }
}