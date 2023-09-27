import { Events } from 'discord.js';
import { log } from '../../functions/index.mjs';

export default {
    event: Events.InteractionCreate,
    on: true,
    async execute(client) {
        try {
            log(`message received.`, "done")
        } catch (err) {
            log(`message failed. error: ${err}`, "error")
        }
    }
}