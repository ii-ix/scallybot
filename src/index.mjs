import dotenv from "dotenv";
import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { loadCommandOrEvent } from "./helpers/loader-helpers.mjs";

(async () => {
    dotenv.config()
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.commands = new Collection();
    const folders = ["commands", "events"]
    for (const folder of folders) await loadCommandOrEvent(client, folder)
    client.once(Events.ClientReady, () => console.log('Ready!'));
    client.login(process.env.DISCORD_BOT_TOKEN);
})()