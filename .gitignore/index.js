const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", function (message){
    if(message.content === "//help")
       message.channel.send("Ya pas de commandes")
})
bot.on("ready", function(){
    bot.user.setGame("ElyBot, //help");
    message.channel.send("ElyBot activé");
});

bot.login("NDA3MTI1MzYxNTk2NDMyMzg0.DXL5CQ.jMf7MepV70DwT-DQHQFinzlQdh8");
