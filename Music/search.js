////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const ytsr = require("youtube-sr")
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const { approveemoji, denyemoji, PREFIX, } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "search",
  aliases: ["s","find"],
  cooldown: 3,

  async execute(message, args, client) {
    //if its not in a guild return
    if (!message.guild) return;
    //define channel
    const { channel } = message.member.voice;
    //get serverqueue
    const serverQueue = message.client.queue.get(message.guild.id);
    //react with approve emoji
    message.react(approveemoji).catch(console.error);
    //if the argslength is null return error
    if (!args.length)
      return attentionembed(message, `Usage: ${message.client.prefix}${module.exports.name} <Video Name>`)
    //if there is already a search return error
    if (message.channel.activeCollector)
      return attentionembed(message, "There is a search active!");
    //if the user is not in a voice channel return error
    if (!message.member.voice.channel)
      return attentionembed(message, "Please join a Voice Channel first")
    //If not in the same channel return error
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return attentionembed(message, `You must be in the same Voice Channel as me`);
    //define search
    const search = args.join(" ");
    //define a temporary Loading Embed
    let temEmbed = new MessageEmbed()
      .setAuthor("Searching...", "https://cdn.discordapp.com/attachments/993820371264475218/993820631189688401/NC-loadingnew.gif")
      .setColor("#F0EAD6")
    //define the Result Embed
    let resultsEmbed = new MessageEmbed()
      .setTitle("Results for ")
      .setDescription(`\`${search}\``)
      .setColor("#F0EAD6")
      .setAuthor("Search results:", "https://cdn.discordapp.com/attachments/778954384667181076/864948750392098846/Nightcorer-spin-nuovo.gif", "http://NightcorerPlays.tk")
      .setFooter("Respond with the right number", "https://cdn.discordapp.com/attachments/778954384667181076/864948750392098846/Nightcorer-spin-nuovo.gif")
    //try to find top 9 results
    try {
      //find them
      const results = await ytsr.search(search, { limit: 9 });
      //map them and sort them and add a Field to the ResultEmbed
      results.map((video, index) => resultsEmbed.addField(video.url, `${index + 1}. ${video.title}`));
      // send the temporary embed
      const resultsMessage = await message.channel.send(temEmbed)
      //react with 6 Numbers
      await resultsMessage.react("1️⃣");
      await resultsMessage.react("2️⃣");
      await resultsMessage.react("3️⃣");
      await resultsMessage.react("4️⃣");
      await resultsMessage.react("5️⃣");
      await resultsMessage.react("6️⃣");
      await resultsMessage.react("7️⃣");
      await resultsMessage.react("8️⃣");
      await resultsMessage.react("9️⃣");
      
      //edit the resultmessage to the resultembed
      await resultsMessage.edit(resultsEmbed)
      //set the collector to true
      message.channel.activeCollector = true;
      //wait for a response
      let response;
      await resultsMessage.awaitReactions((reaction, user) => user.id == message.author.id,
        { max: 1, time: 60000, errors: ['time'], }).then(collected => {
          //if its one of the emoji set them to 1 / 2 / 3 / 4 / ...
          if (collected.first().emoji.name == "1️⃣") { return response = 1; }
          if (collected.first().emoji.name == "2️⃣") { return response = 2; }
          if (collected.first().emoji.name == "3️⃣") { return response = 3; }
          if (collected.first().emoji.name == "4️⃣") { return response = 4; }
          if (collected.first().emoji.name == "5️⃣") { return response = 5; }
          if (collected.first().emoji.name == "6️⃣") { return response = 6; }
          if (collected.first().emoji.name == "7️⃣") { return response = 7; }
          if (collected.first().emoji.name == "8️⃣") { return response = 8; }
          if (collected.first().emoji.name == "9️⃣") { return response = 9; }
          //otherwise set it to error
          else {
            response = "error";
          }
        });
      //if response is error return error
      if (response === "error") {
        //send error message
        attentionembed(message, "Please use the right emoji symbol.");
        //try to delete the message
        return resultsMessage.delete().catch(console.error);
      }
      //get the field name of the response
      const choice = resultsEmbed.fields[parseInt(response) - 1].name;
      //set collector to false aka off
      message.channel.activeCollector = false;
      //play the collected song
      message.client.commands.get("play").execute(message, [choice]);
      //delete the search embed
      resultsMessage.delete().catch(console.error);
      //catch any errors while searching
    } catch (error) {
      //log them
      console.error(error);
      //set collector false, just incase its still true
      message.channel.activeCollector = false;
    }
  }
};
