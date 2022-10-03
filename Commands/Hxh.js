const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {

    name: "hxh",
    description: "Voir un animé",
    permission: "Aucune",
    dm: true,
    category: "anime",

    async run(bot,message,args) {

        const Embed = new EmbedBuilder() // create an embed
            .setColor("#ffffff")
            .setTitle("Hunter x Hunter")
            .setDescription("🎥Anime : https://anime-sama.fr/anime/hunter-x-hunter/\n 📝Scan : https://anime-sama.fr/scan/hunter-x-hunter")
            .setFooter({text: "Anime-Sama.fr"})
            .setTimestamp()
            

        message.reply({
            embeds: [Embed], // your embed
            
        })

    }

}
