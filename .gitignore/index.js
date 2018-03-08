const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ElyBot !!help");
    bot.user.setUsername("ElyBot");
});
bot.on("message", message => {
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
    }
});
bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue sur ELYTHIOM " + member.displayName + "\n \nSi tu veus la liste des commandes; va sur le discord de ElyThiom et fais !!help")
    })
})
bot.login(process.env.TOKEN);
