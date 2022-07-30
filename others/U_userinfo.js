const { Client, Collection, MessageEmbed } = require(`discord.js`);
const moment = require('moment');

module.exports = {
  name: 'userinfo',
  aliases: ['user', 'ui'],
  cooldown: 2,
  execute(message, args, client) {
    const Target = message.mentions.users.first() || message.author;
    const Member = message.guild.members.cache.get(Target.id);

    const Response = new MessageEmbed()
      .setAuthor(`${Target.username}#${Target.discriminator}`, Target.displayAvatarURL({ dynamic: true }))
      .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
      .setColor('#F0EAD6')
      .addField("UserID", `${Target.id}`, false)
      .addField("Roles", `${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
      .addField("Server Member Since:", `${moment(Member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n- ${moment(Member.joinedAt).startOf('day').fromNow()}`)
      .addField("Discord User Since:", `${moment(Target.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n- ${moment(Target.createdAt).startOf('day').fromNow()}`)


    message.reply(Response);
  }
}