import dotenv from "dotenv";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { loadCommandOrEvent } from "./helpers/commandLoader.mjs";

dotenv.config()
const commands = [];

(async () => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await client.login(process.env.DISCORD_BOT_TOKEN)
    client.commands = new Collection();
    const folders = ["commands", "events"]
    for (const folder of folders) {
        await loadCommandOrEvent(client, folder)
    }
    client.login(process.env.DISCORD_BOT_TOKEN);
})()