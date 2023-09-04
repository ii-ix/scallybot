import { log } from '../../functions/index.mjs';
import ExtendedClient from '../../class/ExtendedClient.mjs';

export default {
    event: 'ready',
    once: true,
    async execute(interaction) {
        log(`Logged in as '${interaction.user.tag}'`, "done")
    }
}