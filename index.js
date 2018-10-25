laconfig = require("./laconfig.json");
const Discord = require("discord.js");
const robot = new Discord.Client();

robot.on("ready", () => {
    robot.user.setPresence({
        game: { 
            name: 'Icy Day',
            type: 'WATCHING'
        },
        status: "dnd"
    })
  });

  robot.on("message", async message => {
    if(message.author.robot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = laconfig.prefix
    let messageArray = message.contest.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    robot.on("guildMemberAdd", async member => {
      console.log(`${member.id} joined the server.`);
  
      let welcomechannel = member.guild.channels.find(`name`, "welcome_leaves");
      
      welcomechannel.send(`Hello ${member} welcome to Night Support! Read "<#495869652522500096>" and "<#499934754523840512>". Write in "<#495869103534243840>" ***-verify***. Good bye!`);
  
  
    });
    if(cmd === `${prefix}verify`){
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
      let pMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!pMember) return message.reply("Couldn't find that user, yo.");
     
      let gRole = message.guild.roles.find(`name`, 'verifed')
      
  
      if(pMember.roles.has(gRole.id))(" Have already role!");
      await(pMember.addRole(gRole.id));
  
      try{
      await    pMember.send(`You verify account`);
      }catch(e){
      message.channel.send(`***You verify account***`);
      }
    }
  });
  


  

 

robot.login(laconfig.token);