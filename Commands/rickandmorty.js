const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {

    name: "rickandmorty",
    description: "Voir un animé",
    permission: "Aucune",
    dm: true,
    category: "anime",

    async run(bot,message,args) {

        const Embed = new EmbedBuilder() // create an embed
            .setColor("#ffffff")
            .setTitle("Rick et Morty")
            .setDescription("🎥Anime : : https://anime-sama.fr/anime/rick-et-morty\n 📝Scan : Aucun Scan")
            .setFooter({text: "Anime-Sama.fr"})
            .setTimestamp()
            

        message.reply({
            embeds: [Embed], // your embed
            
        })

    }

}
