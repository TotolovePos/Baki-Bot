const loadSlashCommand = require('../Loaders/loadSlashCommands');
const {ActivityType} = require("discord.js");

module.exports = async (bot) => {

    loadSlashCommand(bot);
    console.log(`${bot.user.tag} est en ligne bb.`);
    bot.user.setPresence({
        activities: [{name: "DBZ LEGEND", type: ActivityType.Playing}]
    });

}