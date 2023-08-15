import { fileURLToPath } from 'url';
import { readdirSync } from "fs";
import { dirname, join } from 'path';

export function getDirectoryName(directory) {
  const currentModulePath = fileURLToPath(directory);
  return dirname(currentModulePath);
}

export function readFilesRecursively(directory) {
  let files = [];
  const items = readdirSync(directory, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = join(directory, item.name);
    if (item.isDirectory()) {
      const nestedFiles = readFilesRecursively(fullPath);
      files = files.concat(nestedFiles);
    } else if (item.isFile() && item.name.endsWith(".mjs")) files.push(fullPath)
  });
  return files;
}