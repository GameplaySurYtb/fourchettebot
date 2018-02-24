const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("ElyBot, //help")
    message.message("ElyBot activé")
})
bot.on('guildMemberAdd', function (member){
    member.createDM("Coucou").then(function (channel){
        return channel.send('Bienvenue sur le channel' + member.displayName)
    })
})

bot.on("message", function (message){
    if(message.content === "//help")
       message.reply("Ya pas de commandes")
})


bot.login("NDA3MTI1MzYxNTk2NDMyMzg0.DXL5CQ.jMf7MepV70DwT-DQHQFinzlQdh8");
