const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {

    name: "tokyoghoul",
    description: "Voir un animé",
    permission: "Aucune",
    dm: true,
    category: "anime",

    async run(bot,message,args) {

        const Embed = new EmbedBuilder() // create an embed
            .setColor("#ffffff")
            .setTitle("Tokyo Ghoul")
            .setDescription("🎥Anime : https://anime-sama.fr/anime/tokyo-ghoul/\n 📝Scan : https://anime-sama.fr/scan/tokyo-ghoul\n 📝Scan2 : https://anime-sama.fr/scan/tokyo-ghoul-re")
            .setFooter({text: "Anime-Sama.fr"})
            .setTimestamp()
            

        message.reply({
            embeds: [Embed], // your embed
            
        })

    }

}
