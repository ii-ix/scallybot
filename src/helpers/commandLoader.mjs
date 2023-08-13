import { readdirSync } from "fs";
import { join } from "path";
import { getDirectoryName } from "./getDirectoryName.mjs";
import { validateFunctionModule } from "./validateFunctionModule.mjs";

export async function loadCommandOrEvent(client, folderName) {
  const __dirname = getDirectoryName(import.meta.url);
  const folderPath = join(__dirname, `../../src/${folderName}`);
  const files = readdirSync(folderPath).filter(file => file.endsWith(".mjs"));

  for (const file of files) {
    try {
      const filePath = join(folderPath, file);
      const { default: module } = await import(filePath);
      await validateFunctionModule(module, file);
      client[folderName].set(module.data.name, module);
    } catch (error) {
      console.error(error.message);
    }
  }
}