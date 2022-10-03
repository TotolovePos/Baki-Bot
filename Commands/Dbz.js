const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {

    name: "dbz",
    description: "Voir un animé",
    permission: "Aucune",
    dm: true,
    category: "anime",

    async run(bot,message,args) {

        const Embed = new EmbedBuilder() // create an embed
            .setColor("#ffffff")
            .setTitle("Dragon Ball Z")
            .setDescription("🎥Anime : https://anime-sama.fr/anime/dragon-ball-z\n 📝Scan : Aucun Scan")
            .setFooter({text: "Anime-Sama.fr"})
            .setTimestamp()
            

        message.reply({
            embeds: [Embed], // your embed
            
        })

    }

}
