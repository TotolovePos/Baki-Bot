module.exports = async (bot,interaction) => {

    if (interaction.isChatInputCommand()) {
        let command = require(`../Commands/${interaction.commandName}`);
        command.run(bot, interaction, interaction.options, bot.db);
    }

}
