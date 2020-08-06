const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "$"

bot.on("ready", function(){
    console.log("Ready");
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '$wsh') {
            message.reply('tamer')
        }
    }
});

bot.on("guildMemberAdd",function(member)
{
    let faction1 = member.guild.roles.find("name", "Richesse 💰");
    let faction2 = member.guild.roles.find("name", "Gloire 🕊️");
    let faction3 = member.guild.roles.find("name", "Pouvoir 🔨");
    let chance = Math.floor(Math.random() * 3);
    if(chance == 0)
    {
        member.addRole(faction1);
    }
    else if(chance == 1)
    {
        member.addRole(faction2);
    }
    else
    {
        member.addRole(faction3);
    }
});

bot.on("guildMemberAdd", function(member) {
    let role1 = member.guild.roles.find("name", "------------------Machines------------------");
    let role2 = member.guild.roles.find("name", "----------------------Jeux----------------------");
    let role3 = member.guild.roles.find("name", "--------------------Autres--------------------");
    let role4 = member.guild.roles.find("name", "Echoué");
    member.addRole(role1).catch(console.error);
    member.addRole(role2).catch(console.error);
    member.addRole(role3).catch(console.error);
    member.addRole(role4).catch(console.error);

});







bot.login(process.env.TOKEN) // Token
