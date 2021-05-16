const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }
    
    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
    // 4096 is the new biggest size of the avatar.
    // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
    // If it's not animated, it will result as a normal image format.
    
    const embed = new MessageEmbed()
    .setTitle(`${user.tag} avatar`)
    .setDescription(`[Url Avatar ${user.tag}](${avatar})`)
    .setColor("BLACK")
    .setImage(avatar)
    
    return message.channel.send(embed);
  }