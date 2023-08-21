import { log } from '../functions.js';
import ExtendedClient from '../class/ExtendedClient.js';
import { getModuleFilesRecursively, loadCommandOrEvent } from '../functions/index.mjs';

/**
 * 
 * @param {ExtendedClient} client 
 */
export default async (client) => {

    const types = ['prefix']
    for (let type of types) {
        const files = getModuleFilesRecursively(`../commands/${type}`);
        for (const file of files) {
            switch (type) {
                case 'prefix':
                    type = 'prefixcommands';
                    await loadCommandOrEvent(client, file, type)
                    break;
                default:
                    type = 'interactioncommands';
                    client.collection.interactioncommands.set(module.structure.name, module);
                    client.applicationcommandsArray.push(module.structure);
                    break;

            }
            log(`Loaded new command: ${file}`, 'info');
        }
    }
};


// Work on migrating the switch/case logic from here into the loadCommandOrEvent function.
// Once conditional code has been moved, proceed to changing the for loop and experiment with forEach.