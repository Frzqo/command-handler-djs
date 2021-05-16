const Discord = require("discord.js");

const config = require('./config.json')
const client = new Discord.Client({fetchAllMembers:true})
require('dotenv').config()



client.on("ready", async () => {
  
  console.log(`${client.user.username} is ready`);

});

client.on("message", async message => {
  
  //CMD HANDLER
  if (message.author.bot) return null;
  if (message.content.indexOf(config.prefix) !== 0) return null;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // (" ");
  const cmd = args.shift().toLowerCase();
  try {
    const commandsFile = require(`./commands/${cmd}.js`);
    commandsFile.run(client, message, args);
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log(`${message.author.tag} menggunakan command ${config.prefix}${cmd}`);
  }
  
});


client.login(process.env.TOKEN);
