////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");
const { Client, Collection } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const {
  approveemoji,
  denyemoji,
  PREFIX,
} = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "queue",
  aliases: ["q"],
  cooldown: 2,
  async execute(message) {
    //if not in a guild return
    if (!message.guild) return;
    //get serverqueue
    const queue = message.client.queue.get(message.guild.id);
    //nothing playing error
    if (!queue) return attentionembed(message, "There is nothing playing.").catch(console.error);
    //set description
    console.log(queue.songs);
    let description = "";
    for (let i = 1; i < queue.songs.length; i++) {
      description += `**${i + 1}.** [${queue.songs[i].title.substring(0, 45)}](${queue.songs[i].url}) | \`${queue.songs[i].duration}\`\n`
    }
    //define queueembed
    const db = require('quick.db');
    let prefix = await db.get(`prefix_${message.guild.id}`)
    let queueEmbed = new MessageEmbed()
      .setTitle("Music Queue")
      .setDescription(description)
      .setFooter(`If you are looking for queue elements to ${prefix}remove, note that you'll need to use the numbers reported here;\n Number 1 will remove the now playing song`)
      .setColor("#F0EAD6");
    //split the description
    const splitDescription = splitMessage(description, {
      maxLength: 2048,
      char: "\n",
      prepend: "",
      append: ""
    });
    //For every description send a new embed
    splitDescription.forEach(async (m) => {
      //(over)write embed description
      queueEmbed.setDescription(m);
      //react with emoji
      message.react(approveemoji)
      //send embed
      message.channel.send(queueEmbed);
    });
  }
};
