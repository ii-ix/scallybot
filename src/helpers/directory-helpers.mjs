import { fileURLToPath, pathToFileURL } from 'url';
import { readdirSync } from "fs";
import { dirname, join } from 'path';

export function getDirectoryName(directory) {
  const currentModulePath = fileURLToPath(directory);
  return dirname(currentModulePath);
}

export function readFilesRecursively(directory, extension = '.mjs') {
  let files = [];
  const items = readdirSync(directory, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = join(directory, item.name);
    if (item.isDirectory()) {
      const nestedFiles = readFilesRecursively(fullPath, extension);
      files = files.concat(nestedFiles);
    } else if (item.isFile() && item.name.endsWith(extension)) {
      const fileURL = _getFileURL(fullPath);
      files.push(fileURL);
    }
  });
  return files;
}

function _getFileURL(filePath) {
  const fileURL = pathToFileURL(filePath);
  return fileURL.toString();
}
