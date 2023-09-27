import { Events } from 'discord.js';
import { log } from '../../functions/index.mjs';

export default {
    event: Events.ClientReady,
    once: true,
    async execute(client) {
        log(`Logged in as '${client.user.tag}'`, "done")
    }
}