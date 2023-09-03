import { log } from '../functions/index.mjs';
import ExtendedClient from '../class/ExtendedClient.mjs';
import { getModuleFilesRecursively, loadCommandOrEvent } from '../functions/index.mjs';

/**
 * 
 * @param {ExtendedClient} client 
 */
export default async (client) => {
    const types = ['prefix'];
    types.forEach(async type => {
        const files = getModuleFilesRecursively(`./src/commands/${type}`);
        files.forEach(async file => {
            await loadCommandOrEvent(client, file, type);
            const logMessage = `Loaded new command: ${file}`;
            log(logMessage, 'info');
        });
    });
};