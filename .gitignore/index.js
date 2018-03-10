const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ElyBot !!help");
});
bot.on("message", message => {
    if(message.content === "!!help"){
        message.channel.sendMessage(message.member + " Les commandes t'ont étés envoyés en MP");
        message.author.createDM().then(channel => {
            channel.send("Commandes disponnibles sur ELYTHIOM :\n \n```Markdown\n!!help -> Avoir la liste des commandes\n```");
        });
        console.log("Commande !!help effectuée par :\n" + message.author.displayName);
    } else if(message.content === "coucou"){
        message.channel.sendMessage("coucou " + message.member);
        message.author.createDM().then(channel => {
            channel.send("╔════════════════════════════╗\n║                                   COUCOU                                      ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n╚════════════════════════════╝")
        });
    } else if(message.content === "COUCOU"){
        message.channel.sendMessage("coucou " + message.member);
        message.author.createDM().then(channel => {
            channel.send("╔════════════════════════════╗\n║                                   COUCOU                                      ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n╚════════════════════════════╝")
        });
    } else if(message.content === "Coucou"){
        message.channel.sendMessage("coucou " + message.member);
        message.author.createDM().then(channel => {
            channel.send("╔════════════════════════════╗\n║                                   COUCOU                                      ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n║                                                                                           ║\n╚════════════════════════════╝")
        });
    } else if(message.content.startsWith("!!setgame")){
        bot.user.setGame(message.content.substr(9));
        message.channel.sendMessage(message.member + " Tu viens de set le Jeu du bot pour " + message.content.substr(8))
    } else if(message.content === "!!resetgame"){
        bot.user.setGame("ElyBot, !!help")
        message.channel.sendMessage(message.member + " Tu viens de reset le Jeu du bot")
    }
});
bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue sur ELYTHIOM " + member.displayName + "\n \nSi tu veus la liste des commandes; va sur le discord de ElyThiom et fais !!help")
    })
});
bot.login(process.env.TOKEN);
