import { join } from "path";
import { readdirSync } from "fs";
import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import config from "../meta/config.json" assert { type: "json" };
import { getDirectoryName } from "../src/utils/getDirectoryName.mjs";
import validateFunctionModule from "../src/utils/validateFunctionModule.mjs";

dotenv.config()
const __dirname = getDirectoryName(import.meta.url);
const commands = [];

(async () => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await client.login(process.env.DISCORD_BOT_TOKEN)
    client.commands = new Collection();

    const foldersPath = join(__dirname, "../src/commands");
    const commandFolders = readdirSync(foldersPath);

    for (const folder of commandFolders) {
        const commandsPath = join(foldersPath, folder);
        const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith(".mjs"));
        for (const file of commandFiles) {
            try {
                const filePath = join(commandsPath, file);
                const { default: commandModule } = await import(filePath);
                await validateFunctionModule(commandModule, file);
                client.commands.set(commandModule.data.name, commandModule);
            } catch (error) {
                console.error(error.message);
            }
        }
    }
    // const eventsPath = path.join(__dirname, "../src/events");
    // const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".mjs"));

    // for (const file of eventFiles) {
    //     const filePath = path.join(eventsPath, file);
    //     const event = require(filePath);
    //     if (event.once) {
    //         client.once(event.name, (...args) => event.execute(...args));
    //     } else {
    //         client.on(event.name, (...args) => event.execute(...args));
    //     }
    // }

    client.login(process.env.DISCORD_BOT_TOKEN);

})()