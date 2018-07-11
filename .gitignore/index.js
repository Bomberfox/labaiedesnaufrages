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
    let faction1 = member.guild.roles.find("name", "EquipageRequin");
    let faction2 = member.guild.roles.find("name", "EquipagePieuvre");
    let faction3 = member.guild.roles.find("name", "EquipageTortue");
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












bot.login('NDY1OTM2MTE3MDExODQxMDM5.DiUy-A._ytLrOoXPFFCrat1JAjg8oeDlC4') // Token
