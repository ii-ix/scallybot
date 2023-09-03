import { ActivityType, Client, Partials, Collection, GatewayIntentBits } from "discord.js";
import config from "../../config/config.json" assert { type: "json" };
import commands  from "../handlers/command.mjs";
// import { deploy } from "../handlers/deploy.mjs";
// import { events } from "../handlers/events.mjs";
// import { mongoose } from "../handlers/mongoose.mjs";
// import components from "../handlers/components.mjs";
export default class extends Client {
    collection = {
        interactioncommands: new Collection(),
        prefixcommands: new Collection(),
        aliases: new Collection(),
        components: {
            buttons: new Collection(),
            selects: new Collection(),
            modals: new Collection()
        }
    };
    applicationcommandsArray = [];

    constructor() {
        super({
            intents: [Object.keys(GatewayIntentBits)],
            partials: [Object.keys(Partials)],
            presence: {
                activities: [{
                    name: 'something goes here',
                    type: ActivityType.Custom,
                    state: 'DiscordJS-V14-Bot-Template v2'
                }]
            }
        });
    };

    start = async () => {
        commands(this);
        // events(this);
        // components(this);
        // if (config.handler.mongodb.toggle) mongoose();

        await this.login(process.env.DISCORD_BOT_TOKEN || config.client.token);

        if (config.handler.deploy) deploy(this, config);
    };
};