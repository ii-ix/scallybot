import { fileURLToPath } from 'url';
import path from 'path';

export function getDirectoryName(directory) {
  const currentModulePath = fileURLToPath(directory);
  return path.dirname(currentModulePath);
}