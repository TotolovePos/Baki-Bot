const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js");

module.exports = {

    name: "ban",
    description: "Ban un Membre",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    category: "Moderate",
    options: [
        {
            type: "user",
            name: "membre",
            description: "le membre a bannir",
            required: true
        }, {
            type: "string",
            name: "raison",
            description: "la raison du bannissement",
            required: false
        }
    ],

    async run(bot, message, args) {
        let user = await bot.users.fetch(args._hoistedOptions[0].value);
        const EmbedNoUser = new EmbedBuilder().setColor("#ffffff").setTitle("Admin").setDescription("Cet utilisateur n'existe pas.").setTimestamp()
        if(!user) return message.reply({
            embeds: [EmbedNoUser],
            ephemeral: true
        })

        let member = message.guild.members.cache.get(user.id);

        let reason = args.getString("reason");
        if(!reason) reason = "Code POS.";

        const EmbedYouCantBanHim = new EmbedBuilder().setTitle("Admin").setDescription("Tu ne peux pas bannir cet utilisateur.").setColor("#ffffff");
        if (!member.bannable && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply({
            embeds: [EmbedYouCantBanHim],
            ephemeral: true
        });

        try {
            const EmbedGetBanned = new EmbedBuilder()
                .setTitle(EMBED_BAN)
                .setDescription(`Tu as été banni du serveur ${message.guild.name} par ${message.user.tag} pour la raison \`${reason}\``)
                .addFields({
                    name: `• Banni par: `,
                    value: `${message.user.tag}`,
                    inline: false
                }, {
                    name: `• Raison: `,
                    value: `${reason}`,
                    inline: false
                })
                .setColor(SUCCESS_COLOR);

            await user.send({
                embeds: [EmbedGetBanned],
                ephemeral: false
            });
        } catch (err) {
        }
        await message.reply({
            content: "• Cet utilisateur à bien été banni !\nRaison: " + reason,
            ephemeral: true
        });

        await member.ban({
            reason: reason
        });


    }
}