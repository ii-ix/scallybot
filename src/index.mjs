import dotenv from "dotenv";
import { join } from "path";
import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { loadCommandOrEvent } from "./helpers/loader-helpers.mjs";
import { deployCommands } from "./helpers/command-helpers.mjs"
import config from "../meta/config.json" assert { type: "json" };
import { getDirectoryName, readFilesRecursively } from "./helpers/directory-helpers.mjs";

(async () => {
    dotenv.config()
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.commands = new Collection();
    const folders = ["commands", "events"]
    const commandsOrEvents = []
    for (const folder of folders) {
        const __dirname = getDirectoryName(import.meta.url);
        const folderPath = join(__dirname, `../src/${folder}`);
        const files = readFilesRecursively(folderPath)
        for (const file of files) {
            const commandOrEvent = await loadCommandOrEvent(client, file, folder)
            commandsOrEvents.push(commandOrEvent)
        }
    }
    const { updateCommands } = config
    const token = process.env.DISCORD_BOT_TOKEN
    if (updateCommands) {
        const { clientId, guildId } = config
        await deployCommands(clientId, guildId, token, commandsOrEvents)
    }
    client.once(Events.ClientReady, () => {
        console.log('Ready!');
    });

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    });
    client.login(token);
})()