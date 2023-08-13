import { Client, Collection, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { loadCommandOrEvent } from "./helpers/commandLoader.mjs";

dotenv.config()
const commands = [];

(async () => {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await client.login(process.env.DISCORD_BOT_TOKEN)
    client.commands = new Collection();
    await loadCommandOrEvent(client, "commands")
    await loadCommandOrEvent(client, "events")
    client.login(process.env.DISCORD_BOT_TOKEN);
})()