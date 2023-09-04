import { log } from '../../functions/index.mjs';
import ExtendedClient from '../../class/ExtendedClient.mjs';

export default {
    event: 'ready',
    once: true,
    /**
     * 
     * @param {ExtendedClient} _ 
     * @param {import('discord.js').Client<true>} client 
     * @returns 
     */
    async execute(_, client) {
        log(`Logged in as '${client.user.tag}'`, "done")
    }
}