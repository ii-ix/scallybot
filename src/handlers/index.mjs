import { join } from 'path';
import { getModuleFilesRecursively, loadCommandOrEvent, log } from '../functions/index.mjs';

/**
 * 
 * @param {ExtendedClient} client 
 */
export default async (client) => {
  const types = ['prefix', 'slash', 'events'];

  // Define a mapping of type to directory paths
  const typeToDir = {
    prefix: './src/command/prefix/',
    slash: './src/command/slash/',
    events: './src/event/',
  };

  // Iterate through each type
  for (const type of types) {
    try {
      const directory = join(process.cwd(),typeToDir[type]);
      const files = getModuleFilesRecursively(directory);
      // Load commands or events based on the type
      files.forEach((file) => loadCommandOrEvent(client, file, type));
    } catch (error) {
      const errorMessage = `Error initializing of type '${type}': ${error.message}`;
      log(errorMessage, 'err');
    }
  }
};