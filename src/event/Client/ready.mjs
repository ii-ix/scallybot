import { log } from '../../functions/index.mjs';
import ExtendedClient from '../../class/ExtendedClient.mjs';

export default {
    event: 'ready',
    once: true,
    async execute(client) {
        log(`Logged in as '${client.user.tag}'`, "done")
    }
}