const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {

    name: "tokyorevenger",
    description: "Voir un animé",
    permission: "Aucune",
    dm: true,
    category: "anime",

    async run(bot,message,args) {

        const Embed = new EmbedBuilder() // create an embed
            .setColor("#ffffff")
            .setTitle("Tokyo Renvenger")
            .setDescription("🎥Anime : https://anime-sama.fr/anime/tokyo-revengers/\n 📝Scan : https://anime-sama.fr/scan/tokyo-revengers/")
            .setFooter({text: "Anime-Sama.fr"})
            .setTimestamp()
            

        message.reply({
            embeds: [Embed], // your embed
            
        })

    }

}
