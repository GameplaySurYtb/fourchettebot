const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ElyBot !!help");
    bot.user.setUsername("ElyBot");
});
bot.on("message", message => {
    let command = message.content.split(" ");
    command = args.shift().toLowerCase();
    if(message.content === "!!help"){
        message.channel.sendMessage(message.member + " Les commandes t'ont étés envoyés en MP");
        message.author.createDM().then(channel => {
            channel.send("Commandes disponnibles sur ELYTHIOM :\n \n```Markdown\n!!help -> Avoir la liste des commandes\n```")
        });
        console.log("Commande !!help effectuée par :\n" + message.author.displayName);
    } else if(command === "coucou"){
        message.channel.sendMessage("coucou " + message.member);
        message.author.createDM().then(channel => {
            channel.send("╔════════════════════════════╗\n║                                   COUCOU                                      ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n╚════════════════════════════╝")
        });
    } else if(command === "COUCOU"){
        message.channel.sendMessage("coucou " + message.member);
        message.author.createDM().then(channel => {
            channel.send("╔════════════════════════════╗\n║                                   COUCOU                                      ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n╚════════════════════════════╝")
        });
    } else if(command === "Coucou"){
        message.channel.sendMessage("coucou " + message.member);
        message.author.createDM().then(channel => {
            channel.send("╔════════════════════════════╗\n║                                   COUCOU                                      ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n╚════════════════════════════╝")
        });
    } else if(command.startsWith("!!setgame")){
        bot.user.setGame(command.substr(9));
    } else if(command === "!!resetgame"){
        bot.user.setGame("ElyBot, !!help")
        message.channel.sendMessage(message.member + " Tu viens de reset le Jeux du bot")
    } else if(command === "!!kick"){
        let modRole = message.guild.roles.find("name", "[Fondateur]")
        if(!message.member.roles.has(modRole.id)){
            return message.reply("Tu t'es pris pour un admin ?").catch(console.error)
        }
        if(message.mentions.user.size === 0){
            return message.reply("Merci de mentionner le joueur a kick").catch(console.error)
        }
        let kickMember = message.guild.member(message.mentions.user.first());
        if(!kickMember){
            return message.reply("Joueur Introuvable ou impossible a expulser");
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
            return message.reply("Je ne peus pas kick de joueurs ccar je n'ai pas la perm").catch(console.error)
        }
        kickMember.kick().then(member =>{
            message.reply(`${member.user.username} a été kick avec succes`).catch(console.error);
            message.guild.channels.find("name", "accueil").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}`)
        }).catch(console.error)
    }
});
bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue sur ELYTHIOM " + member.displayName + "\n \nSi tu veus la liste des commandes; va sur le discord de ElyThiom et fais !!help")
    })
})
bot.login(process.env.TOKEN);
