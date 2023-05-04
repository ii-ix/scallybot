require("dotenv").config();
const {readdir} = require("fs");
const {PREFIX} = require("../meta/config.json");
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client();
client.commands = new Collection();
client.queue = new Map()

client.config = {
    prefix: PREFIX || process.env.PREFIX
}

async function loader(feature, client) {
    const actions = ['commands', 'events'];
    const rootDir = `./src/${feature}`
    for await (const action of actions) {
        const actionDir = `${rootDir}/${action}`;
        await readdir(actionDir, (err, files) => {
            if (err) console.error(err.message)
            switch (action) {
                case 'commands':
                    files.forEach(file => {
                        if (!file.endsWith(".js")) return;
                        let props = require(`../${rootDir}/${action}/${file}`);
                        let commandName = file.split(".")[0];
                        client.commands.set(commandName, props);
                        console.log(`Loading Command: ${commandName}`)
                    })
                    break;
                case 'events':
                    files.forEach(file => {
                        const event = require(`../${actionDir}/${file}`)
                        let eventName = file.split(".")[0];
                        client.on(eventName, event.bind(this, client));
                        console.log(`Loading Event: ${eventName}`)
                    });
                    break;
                default:
                    break;
            }
        })
    }
}

(async () => {
    await loader('music', client)
    await client.login(process.env.TOKEN)
})()