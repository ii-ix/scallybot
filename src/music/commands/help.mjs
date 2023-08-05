import config from "../../../meta/config.json" assert { type: "json" } ;
import Discord from "discord.js";
const { MessageEmbed } = Discord;
const { PREFIX } = config

const eventHandler = {
  info: {
    name: "help",
    description: "To show all commands",
    usage: "[command]",
    aliases: ["commands", "help me", "pls help"]
  },

  run: async function (client, message, args) {
    let allCmds = "";
    const prefix = client.config.prefix ? client.config.prefix || PREFIX : "";
    client.commands.forEach(cmd => {
      let cmdinfo = cmd.info
      allCmds += "`" + prefix + cmdinfo.name + " " + cmdinfo.usage + "` ~ " + cmdinfo.description + "\n"
    });

    let embed = new MessageEmbed()
      .setAuthor("Commands of " + client.user.username)
      .setColor(message.guild.me.displayHexColor)
      .setDescription(allCmds)
      .setFooter(`To get info of each command you can do ${prefix}help [command]`);

    if (!args[0]) return message.channel.send({ embeds: [embed] });
    else {
      let cmd = args[0];
      let command = client.commands.get(cmd);
      if (!command) command = client.commands.find(x => x.info.aliases.includes(cmd));
      if (!command) return message.channel.send("Unknown Command");
      let commandinfo = new MessageEmbed()
        .setTitle("Command: " + command.info.name + " info")
        .setColor(message.guild.me.displayHexColor)
        .setDescription(`Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`);
      message.channel.send({ embeds: [commandinfo] });
    }
  }
};

export default eventHandler;