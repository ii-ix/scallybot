import dotenv from "dotenv";
import { join } from "path";
import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { loadCommandOrEvent } from "./helpers/loader-helpers.mjs";
import { deployCommands } from "./helpers/command-helpers.mjs"
import config from "../config/config.json" assert { type: "json" };
import { getDirectoryName, getModuleFilesRecursively } from "./helpers/directory-helpers.mjs";


// (async () => {
//     dotenv.config()
//     const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//     client.commands = new Collection();
//     const types = ["commands", "events"]
//     const commandsAndEvents = []
//     for (const type of types) {
//         const __dirname = getDirectoryName(import.meta.url);
//         const folderPath = join(__dirname, `../src/${type}`);
//         const files = getModuleFilesRecursively(folderPath)
//         for (const file of files) {
//             const commandOrEvent = await loadCommandOrEvent(client, file, type)
//             commandsAndEvents.push(commandOrEvent)
//         }
//     }
//     const { updateCommands } = config
//     const token = process.env.DISCORD_BOT_TOKEN
//     if (updateCommands) {
//         const { clientId, guildId } = config
//         await deployCommands(clientId, guildId, token, commandsAndEvents)
//     }
//     client.once(Events.ClientReady, () => {
//         console.log('Ready!');
//     });

//     client.on(Events.InteractionCreate, async interaction => {
//         if (!interaction.isChatInputCommand()) return;
//         const command = client.commands.get(interaction.commandName);
//         if (!command) return;
//         try {
//             await command.execute(interaction);
//         } catch (error) {
//             console.error(error);
//             if (interaction.replied || interaction.deferred) {
//                 await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
//             } else {
//                 await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
//             }
//         }
//     });
//     client.login(token);
// })()