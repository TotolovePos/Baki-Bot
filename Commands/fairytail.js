const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {

    name: "fairytail",
    description: "Voir un animé",
    permission: "Aucune",
    dm: true,
    category: "anime",

    async run(bot,message,args) {

        const Embed = new EmbedBuilder() // create an embed
            .setColor("#ffffff")
            .setTitle("Fairy Tail")
            .setDescription("🎥Anime : https://anime-sama.fr/anime/fairy-tail/\n 📝Scan : https://anime-sama.fr/scan/fairy-tail")
            .setFooter({text: "Anime-Sama.fr"})
            .setTimestamp()
            

        message.reply({
            embeds: [Embed], // your embed
            
        })

    }

}
