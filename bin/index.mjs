import dotenv from "dotenv";
import config from "../meta/config.json";
import { readdir } from "fs";
import { Collection, Client } from "discord.js"
const { PREFIX } = config;

// Iterates through a directory and loads in all files
async function loader(module, client) {
    const rootDir = `./src/${module}`;
    const types = ["commands", "events"]
    for await (const type of types) {
        const dir = `${rootDir}/${type}`
        await readdir(dir, async (err, files) => {
            if (err) console.error(err.message)
            else for await (const file of files) {
                console.log(`Eval ${file}`)
                let event
                switch (type) {
                    case "commands":
                        const command = await import(`../${dir}/${file}`);
                        let commandName = file.split(".")[0];
                        client.commands.set(commandName, command);
                        console.log(`Loading Command: ${commandName}`)
                        break;
                    case "events":
                        try {
                            event = await import(`../${dir}/${file}`);
                            let eventName = file.split(".")[0];
                            client.on(eventName, await event(null, client));
                            console.log(`Loading Event: ${eventName}`)
                        } catch (err) {
                            console.error(`Error: ${file}\n ${err.message}`)
                            throw err
                        }
                        break;
                    default:
                        console.log(`Default...`)
                        break;
                }
            }
        })
    }
}

(async () => {
    dotenv.config()
    const client = await new Client();
    client.queue = await new Map()
    client.commands = await new Collection();
    client.config = { prefix: PREFIX || process.env.PREFIX }
    await loader("music", client);
    //Logging in to discord
    await client.login(process.env.DISCORD_TOKEN)
})()