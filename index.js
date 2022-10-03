const Discord = require('discord.js');
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents});
const loadCommand = require('./Loaders/loadCommands');
const loadEvents = require('./Loaders/loadEvents');
const Config = require('./config');

bot.commands = new Discord.Collection();

bot.login(process.env.TOKEN);

loadCommand(bot);
loadEvents(bot);
