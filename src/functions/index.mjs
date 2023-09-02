import { readdirSync } from "fs";
import { join } from 'path';
import chalk from 'chalk';

/**
 * Returns all module files recursively in a given directory.
 * @param {string} directory  The directory of the module files
 * @param {string} extension The file extension to search
 * @returns {Array} The modules file names.
export function getModuleFilesRecursively(directory, extension = '.mjs') {
    let files = [];
    const items = readdirSync(directory, { withFileTypes: true });
    items.forEach(item => {
        const fullPath = join(directory, item.name);
        if (item.isDirectory()) {
            const nestedFiles = getModuleFilesRecursively(fullPath);
            files = files.concat(nestedFiles);
        } else if (item.isFile() && item.name.endsWith(extension)) files.push(fullPath)
    });
    return files;
};

/**
 * Loads and registers a command or event module.
 * @param {Client} client The Discord client
 * @param {string} file The file path of the module
 * @param {string} type The type ("commands" or "events")
 * @returns {object|null} The data of the loaded module or null if invalid
 */
export async function loadCommandOrEvent(client, file, type) {
    try {
        const { default: module } = await import(file);
        const isValidModule = await _validateFunctionModule(module, file);

        if (isValidModule) {
            const { data } = module
            client[type].set(data.name, module);

            const aliases = data.aliases ?? [];
            aliases.forEach((alias) => {
                client.collection.aliases.set(alias, data.name);
            });
            return data; // Return valid module data
        }

        return null; // Return null for invalid module
    } catch (error) {
        console.error(`Error loading ${type.slice(0, -1)} module from ${file}:`, error.message);
        throw error; // Re-throw the error for further handling
    }
}

/**
 * Logs a message with a specified style.
 *
 * @param {string} string - The message to be logged.
 * @param {string} style - The style of the log message.
 *   Can be one of: 'info', 'err', 'warn', 'done'.
 */
export const log = (string, style) => {
    const logStyles = {
        info: { log: chalk.blue, label: '[INFO]' },
        err: { log: chalk.red, label: '[ERROR]' },
        warn: { log: chalk.yellow, label: '[WARNING]' },
        done: { log: chalk.green, label: '[SUCCESS]' },
    };

    const selectedStyle = logStyles[style] || { log: console.log, label: '' };

    // Log the message using the selected style.
    selectedStyle.log(`${selectedStyle.label} ${string}`);
};

/**
 * 
 * @param {number} time 
 * @param {import('discord.js').TimestampStylesString} style
 * @returns {`<t:${string}>`}
 */
export const time = (time, style) => {
    return `<t:${Math.floor(time / 1000)}${style ? `:${style}` : ''}>`;
};

/**
 * Validates a function module to ensure it has required properties.
 *
 * @param {Object} moduleToValidate - The module to be validated.
 * @returns {boolean} - Whether the module is valid (has required properties).
 * @throws {Error} - If the module is not an object or has missing required properties.
 */
async function _validateFunctionModule(moduleToValidate) {
    try {
        if (typeof moduleToValidate !== 'object') {
            throw new Error('The provided module is not an object.');
        }

        const requiredProperties = ['data', 'execute'];
        const missingProperties = requiredProperties.filter(prop => !moduleToValidate[prop]);

        if (missingProperties.length > 0) {
            const missingPropsString = missingProperties.join(', ');
            const errorText = missingProperties.length === 1 ? 'property is missing' : 'properties are missing';
            throw new Error(`The provided module is missing the required ${errorText}: ${missingPropsString}`);
        }

        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
};