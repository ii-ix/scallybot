import dotenv from "dotenv";
import config from "../meta/config.json" assert { type: "json" };
import { readdir } from "fs";
import Discord from "discord.js";
const { Collection, Client, Events, GatewayIntentBits } = Discord
const { PREFIX } = config;
//  
                    switch (type) {
                        case "commands":
                            const { default: eventHandler } = await import(`../${dir}/${file}`);
                            let commandName = file.split(".")[0];
                            client.commands.set(commandName, eventHandler);
                            console.log(`Loading Command: ${commandName}`);
                            break;
                        case "events":
                            try {
                                const { default: eventHandler } = await import(`../${dir}/${file}`);
                                let eventName = file.split(".")[0];
                                client.on(eventName, eventHandler(client));
                                console.log(`Loading Event: ${eventName}`);
                            } catch (err) {
                                console.error(`Error: ${file}\n ${err.message}`);
                                throw err;
                            }
                            break;
                        default:
                            console.log(`Default...`);
                            break;
                    }
                }
        })
    }
}

(async () => {
    dotenv.config()
    const configuration = { intents: [GatewayIntentBits.Guilds] }
    const client = new Client(configuration);
    await client.login(process.env.DISCORD_BOT_TOKEN)
    client.once(Events.ClientReady, c => {
        console.log(`Ready! Logged in as ${c.user.tag}`);
    });
    client.queue = new Map()
    client.commands = new Collection();
    client.config = { prefix: PREFIX || process.env.PREFIX }
    await loader("music", client);
    //Logging in to discord
})()