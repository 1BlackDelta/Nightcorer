module.exports = {
  name: 'channelclear',
  aliases: ['channeldelete', 'chclear', 'chdelete', 'cc', 'chdel'],
  cooldown: 3,
  async execute(message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions to delete messages.");
    if (!args[0]) return message.reply("Specify the amount of messages to delete");
    if (isNaN(args[0])) return message.reply("Please use numeric value.");

    if (parseInt(args[0] > 100)) return message.reply("That's too many messages! Maximum amount is 100");
    if (parseInt(args[0] < 1)) return message.reply("Please use a number greater than 1");

    const delamount = parseInt(args[0]);

    await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
      message.channel.bulkDelete(delamount + 1, true);

      message.reply(`${args[0]} messages have been deleted.`)
    });
  }
}