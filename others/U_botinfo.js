const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

const db = require('quick.db');

module.exports = {
  name: 'botinfo',
  aliases: ['bot'],
  cooldown: 2,
  async execute(message, args, client) {

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = PREFIX;

    const botinfo = new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle("Here's my informations!")
      .setDescription(`Name: \`Nightcorer\`\nOwner and Developer: \`[BLK] BlackDelta#0725\`\nType: \`Music, Utility, Fun\`\n\nDefault Prefix: \`nc!\`\nCurrent Prefix: \`${prefix}\`\n\nAverage Ping: \`50ms\`\nCurrent Ping: \`${client.ws.ping}ms\`\n\nServers: \`${client.guilds.cache.size}\`\n\n`)
      .addField("|| ||", "Visit the [Official Website](https://nightcorerbot.blackdelta.repl.co/)")

    message.react("✅");

    message.reply(botinfo);
  }
}