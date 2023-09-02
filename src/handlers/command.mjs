import { log } from '../functions.js';
import ExtendedClient from '../class/ExtendedClient.js';
import { getModuleFilesRecursively, loadCommandOrEvent } from '../functions/index.mjs';

/**
 * 
 * @param {ExtendedClient} client 
 */
export default async function loadCommands(client) {
    const types = ['prefix'];
    types.forEach(async type => {
        const files = getModuleFilesRecursively(`../commands/${type}`);
        files.forEach(async file => {
            await loadCommandOrEvent(file);
            const logMessage = `Loaded new command: ${file}`;
            log(logMessage, 'info');
        });
    });
};