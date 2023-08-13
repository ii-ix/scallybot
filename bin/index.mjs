import { join } from "path";
import { readdirSync } from "fs";
import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import config from "../meta/config.json" assert { type: "json" };
import { getDirectoryName } from "../src/utils/getDirectoryName.mjs";
import validateFunctionModule from "../src/utils/validateFunctionModule.mjs";

(async () => {
    const __dirname = getDirectoryName(import.meta.url);
    const commands = [];
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
                console.log(`The module '${file}' passed.`);
            } catch (error) {
                console.error(error.message);
            }
        }
    }
})()