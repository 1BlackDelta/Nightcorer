const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: "helpmusic",
  aliases: ["hm"],
  cooldown: 3,
  async execute(message) {
    message.react("✅");

    const db = require('quick.db');

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = PREFIX;

    message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle("Music Commands")
      .setDescription(`${prefix}join | **Joins the channel**\n${prefix}play [video title] | **Starts playing a song/video**\n${prefix}stop | **Disconnects the bot and stop the music**\n${prefix}pause | **Pauses the video without disconnecting**\n${prefix}resume | **Resumes the video**\n${prefix}lyrics | **Shows the lyrics for the current song, if found**\n${prefix}nowplaying | **Shows remaining time, title, link and who requested the current video playing**\n${prefix}loop | **Turns on or off video loop, so the audio keeps restarting until ${prefix}stop**\n${prefix}radio [radio number] | **Plays a selected radio station (34 available, because 34 is a funny number)**\n${prefix}search [video title] | **Searches for the title given, and gives 5 results to play**\n${prefix}queue | **Shows the current video queue (when a video without loop finished, the next queue video will play)**\n${prefix}skipto [queue video number] | **skips to a certain video in the queue using its number**\n${prefix}shuffle | **Takes the videos in the queue and puts them in random numbers in the queue**\n${prefix}remove [queue video number] | **Removes a video from the queue, so it wont be played anymore**\n${prefix}move [queue video number] | **Moves the videos around the queue (its still a bit bugged idk)**\n${prefix}volume [0-200] | **Sets the audio volume to the specified value**\n${prefix}join | **Makes the bot join and await for commands**\n${prefix}leave | **Disconnects from the channel**\n${prefix}skip | **Skips to current video and plays the next in the queue**\n${prefix}filter [filter name] | **Applies an audio filter to the current video**`)
      .setFooter("Developed for you by: [BLK] BlackDelta#0725", "https://cdn.discordapp.com/avatars/577839014103613471/0688852cdf38a685cd5267e82f2a28fa.png?size=256"));
  }
}