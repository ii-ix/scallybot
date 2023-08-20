import { fileURLToPath } from 'url';
import { readdirSync } from "fs";
import { dirname, join } from 'path';
import chalk from 'chalk';

export function getDirectoryName(directory) {
    const currentModulePath = fileURLToPath(directory);
    return dirname(currentModulePath);
};

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

async function _loadCommandOrEvent(client, file, type) {
    try {
      const { default: module } = await import(file);
      const isValidModule = await _validateFunctionModule(module, file);
      if (isValidModule) {
        client[type].set(module.data.name, module);
        return module.data
      }
      return {}
    } catch (error) {
      console.error(error.message);
    }
  };

/**
 * 
 * @param {string} string 
 * @param {'info' | 'err' | 'warn' | 'done' | undefined} style 
 */
export const log = (string, style) => {
    switch (style) {
        case 'info': {
            console.log(chalk.blue('[INFO] ' + string));
            break;
        };
        case 'err': {
            console.error(chalk.red('[ERROR] ' + string));
            break;
        };
        case 'warn': {
            console.warn(chalk.yellow('[WARNING] ' + string));
            break;
        };
        case 'done': {
            console.log(chalk.green('[SUCCESS] ' + string));
            break;
        };
        default: {
            console.log(string);
            break;
        };
    };
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

export async function _validateFunctionModule(moduleToValidate) {
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