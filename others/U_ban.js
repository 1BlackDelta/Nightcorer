module.exports = {
  name: 'ban',
  aliases: ["ban"],
  cooldown: 2,
  execute(message, args) {
    const member = message.mentions.users.first();
    const memberTarger = message.guild.members.cache.get(member.id);

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have the required permissions to perform the command.");

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have the required permissions to perform the command.");

    if(!memberTarger.bannable) return message.channel.send("The specified user as an higher role than Nightcorer, the bot cannot perform the command on that member.");

    if(!args[0]) return message.channel.send("Specify the user to ban.")

    if(member){
      memberTarger.ban()
      message.channel.send("User banned successfully");
    }else{
      message.channel.send("Failed banning the specified user");
    }
  }
}